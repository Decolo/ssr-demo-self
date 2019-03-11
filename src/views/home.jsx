import React from 'react'

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

export default Home