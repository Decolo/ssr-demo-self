import React from 'react'
import { connect } from 'react-redux'
import { doFetchHomeData } from '@/store/action'
import './style.scss'

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.list)
  }
  handleClick() {
    alert(111)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

Home.loadData = store => store.dispatch(doFetchHomeData())
const mapStateToProps = state => ({ 
 list: state.home.list
})

export default connect(mapStateToProps)(Home)