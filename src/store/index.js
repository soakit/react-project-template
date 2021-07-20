import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from './home.redux'
import { contactsReducer } from './contacts.redux'
import { loginReducer } from './login.redux'

// 创建一个中间件集合
let middleware = applyMiddleware(thunk)

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger') // 利用redux-logger打印日志
  // https://github.com/yellowfrogCN/reduxDevTools/blob/master/README.md
  // 引入redux-devtools-extension的可视化工具（有点吊）
  const { composeWithDevTools } = require('redux-devtools-extension')
  // 调用日志打印方法 collapsed是让action折叠，看着舒服点
  const loggerMiddleware = createLogger({ collapsed: true })
  middleware = [thunk, loggerMiddleware]
  middleware = composeWithDevTools(applyMiddleware(...middleware))
} else {
  middleware = applyMiddleware(thunk)
}

// key就相当于命名空间
const rootReducers = combineReducers({
  home: homeReducer,
  contacts: contactsReducer,
  user: loginReducer,
})

const store = createStore(rootReducers, middleware)

export default store
