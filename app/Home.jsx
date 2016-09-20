import React from 'react'
import { connect } from 'react-redux'
//import { increase, decrease } from '../actions/count'

function Home({ number, increase, decrease }) {
  return (
    <div>
      Home !!!
    </div>
  )
}

export default connect(
  state => ({ number: 0 }),
  null
)(Home)