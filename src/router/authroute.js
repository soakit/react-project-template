import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

@withRouter
@connect(null)
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ['/login', '/register']
    const { pathname } = this.props.location
    if (publicList.indexOf(pathname) > -1) {
      return
    }
    // TODO: validate user login status
    setTimeout(() => {
      if (!localStorage.getItem('isLogined')) {
        this.props.history.push('/login')
      }
    }, 200)
  }

  render() {
    return null
  }
}
export default AuthRoute
