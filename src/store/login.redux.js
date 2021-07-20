import api from '@/utils/api-client'

const login = {
  AUTH_SUCCESS: Symbol('AUTH_SUCCESS'),
  LOGOUT: Symbol('LOGOUT'),
  ERROR_MSG: Symbol('ERROR_MSG'),
  LOAD_DATA: Symbol('LOAD_DATA'),
}

export const loginActions = {
  // login
  login: (data) => {
    return async (dispatch) => {
      // const res = await api('post', '/login', data)
      // TODO: 判断res
      // if (true) {
      localStorage.setItem('isLogined', 1)
      dispatch({
        type: login.AUTH_SUCCESS,
        payload: {
          redirectTo: '/contacts',
        },
      })
      dispatch({
        type: login.LOAD_DATA,
        payload: {
          user: {
            userName: 'admin',
          },
        },
      })
      // }
    }
  },
  loadData: (userinfo) => {
    return { type: login.LOAD_DATA, payload: userinfo }
  },
  logout() {
    localStorage.setItem('isLogined', '')
    return { type: login.LOGOUT }
  },
}

const defaultState = {
  redirectTo: '',
  msg: '',
  user: null,
  type: '',
}

export const loginReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case login.AUTH_SUCCESS:
      return { ...state, msg: '', ...action.payload }
    case login.LOAD_DATA:
      return { ...state, ...action.payload }
    case login.ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    case login.LOGOUT:
      return { ...defaultState, redirectTo: '/login' }
    default:
      return state
  }
}
