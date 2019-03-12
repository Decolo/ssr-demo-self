import React from 'react'

const About = () => {
  return (
    <div>about</div>
  )
}

About.loadData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('load about data')
      resolve('About data')
    }, 100)
  })
}

export default About