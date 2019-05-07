import React, { Component } from 'react'
import { connect } from 'react-redux'

import mixin, { padStr } from '@/utils/mixin'
import './home.less'

import { actions as homeActions } from '@/store/home.redux'

const { getAllRecords } = homeActions

@connect(
  state => state.homeData,
  {
    getAllRecords,
  }
)
@mixin({ padStr })
class Home extends Component {
  componentDidMount() {
    this.props.getAllRecords()
  }

  render() {
    const { recordList } = this.props
    return (
      <div className="mod-home">
        <h1>首页</h1>
        <ul>
          <li>{recordList[0]}</li>
          <li>{recordList[1]}</li>
          <li>{recordList[2]}</li>
        </ul>
      </div>
    )
  }
}

export default Home
