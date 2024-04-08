import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Juicy Lean Swallow</title>
        <meta property="og:title" content="Juicy Lean Swallow" />
      </Helmet>
    </div>
  )
}

export default Home
