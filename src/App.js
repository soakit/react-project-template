import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from '@/store/index'

import Router from './router'

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
export default hot(module)(App)
