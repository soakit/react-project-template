import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import mixin, { padStr } from '@/utils/mixin'
import './contacts.less'

import { contactsActions } from '@/store/contacts.redux'
import { loginActions } from '@/store/login.redux'

const { logout } = loginActions

const { getContactsList } = contactsActions

@connect(
  (state) => ({
    ...state.user, // 取出user 空间下的所有state数据
    ...state.contacts,
  }),
  {
    logout,
    getContactsList,
  }
)
@mixin({ padStr })
class Contacts extends Component {
  componentDidMount() {
    this.props.getContactsList()
  }

  handleLogout() {
    this.props.logout()
  }

  render() {
    const { contactsList } = this.props
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div className="mod-contacts">
        {redirect && redirect !== path ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        <h1>人脉</h1>
        <br />
        <h1 onClick={this.handleLogout.bind(this)}>退出</h1>
        <br />
        <ul>
          {contactsList.map((item, index) => (
            <li key={item}>人脉222{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Contacts
