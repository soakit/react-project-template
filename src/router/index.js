import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import asyncComponent from '@/utils/asyncComponent'

import AuthRoute from './authroute'

import home from '@/views/home/home'
import Contacts from '@/views/contacts/contacts'
import Login from '@/views/login/login'

// https://segmentfault.com/a/1190000010067597
// asyncComponent 异步加载组件，打包会分割
// const record = asyncComponent(() => import('../views/record/record')) // 记录

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default () => (
  /* "/" 制定exact后，"/record" 等其它路由就不会再匹配到"/"了 */
  <HashRouter>
    <div style={{ height: '100%' }}>
      <AuthRoute />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </div>
  </HashRouter>
)
