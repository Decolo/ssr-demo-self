import React from 'react'
import { fetchHomeData } from './'

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.)
  }
}
const Home = () => {
  const handleClick = () => {
    alert(111)
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

Home.loadData = store => store.dispatch(fetchHomeData())
export default Home