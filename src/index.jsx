import React from 'react'
import ReactDom from 'react-dom'

class Home extends React.Children {
  handleClick() {
    console.log('click')
  }
  render() {
    return (
      <div>
        <p>home</p>
        <button onClick={this.handleClick}>home</button>
      </div>
    )
  }
}

ReactDOM.hydrate(<Home />, document.getElementById('root'))