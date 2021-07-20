import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './login.less'
import { loginActions } from '@/store/login.redux'
import { createForm } from 'rc-form'

const { login } = loginActions

@createForm()
@connect(
  state => state.user,
  {
    login,
  }
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  register() {
    this.props.history.push('/register')
  }

  handleLogin() {
    // TODO: login
    console.log('login.jsx', this.props.state)
    this.props.login(this.props.state)
  }

  render() {
    console.log(this.props, this.state)
    const { getFieldProps } = this.props.form
    return (
      <div className="mod-login">
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        <div className="logo-wrap">
          <div className="logo" />
        </div>
        <div className="bg" />
        <WingBlank className="form-box">
          <List>
            {this.props.msg ? (
              <p className="error-msg">{this.props.msg}</p>
            ) : null}
            <div className="filed-title">用户名</div>
            <InputItem
              {...getFieldProps('userName')}
              placeholder="请输入用户名"
            />
            <div className="filed-title">密码</div>
            <InputItem
              {...getFieldProps('password')}
              type="password"
              placeholder="请输入密码"
            />
          </List>
          <WhiteSpace />
        </WingBlank>
        <Button onClick={this.handleLogin} type="primary" className="btn-login">
          登录
        </Button>
      </div>
    )
  }
}

export default Login
