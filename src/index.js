import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import * as serviceWorker from './serviceWorker'

import App from './App'
import './assets/css/base.less'
import 'antd-mobile/dist/antd-mobile.css'
import './assets/css/reset-antd.less'

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

render(App)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
