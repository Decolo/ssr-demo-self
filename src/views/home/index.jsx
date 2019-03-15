import React from 'react'
import { connect } from 'react-redux'
import { doRequestHomeData, doFetchHomeData } from '@/store/actions'
import { api } from '@/api'
import './style.scss'

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      const params = {
        ...api['fetchHomeList']
      }
      this.dispatch(doFetchHomeData(params))
    }
  }
  render() {
    const { data } = this.props
    return (
      <div>
        <ul className="list">
          {data.map((item, index) => <li className="item" key={index}>{item}</li>)}
        </ul>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

Home.loadData = store => {
  const params = {
    ...api['fetchHomeList']
  }
  store.dispatch(doFetchHomeData(params))
}
  
const mapStateToProps = state => ({ 
  data: state.home.data
})

export default connect(mapStateToProps)(Home)