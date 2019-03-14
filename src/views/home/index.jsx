import React from 'react'
import { connect } from 'react-redux'
import { doRequestHomeData, doFetchHomeData } from '@/store/actions'
import { api } from '@/api'
import './style.scss'

class Home extends React.Component {
  handleClick() {
    alert(111)
  }
  render() {
    console.log(this.props)
    return (
      <div>
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
 state: state
})

export default connect(mapStateToProps)(Home)