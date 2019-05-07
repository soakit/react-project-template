import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as homeReducer } from './home.redux'
import { reducer as contactsReducer } from './contacts.redux'
import { reducer as loginReducer } from './login.redux'

// https://github.com/yellowfrogCN/reduxDevTools/blob/master/README.md
// 引入redux-devtools-extension的可视化工具（有点吊）

// 创建一个中间件集合
let middleware = applyMiddleware(thunk)

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger') // 利用redux-logger打印日志
  // 调用日志打印方法 collapsed是让action折叠，看着舒服点
  const loggerMiddleware = createLogger({ collapsed: true })
  middleware = [thunk, loggerMiddleware]
  middleware = composeWithDevTools(applyMiddleware(...middleware))
} else {
  middleware = applyMiddleware(thunk)
}

const store = createStore(
  combineReducers({ ...homeReducer, ...contactsReducer, ...loginReducer }),
  middleware
)

export default store
