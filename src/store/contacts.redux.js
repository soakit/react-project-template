import api from '@/utils/api-client'

const home = {
  // 获取记录
  GET_CONTACTS_LIST: Symbol('GET_CONTACTS_LIST'),
}

export const actions = {
  // 保存表单数据
  getContactsList: () => {
    return async dispatch => {
      const result = [1, 2, 3] // await api('get', '/getContactsList')
      dispatch({
        type: home.GET_CONTACTS_LIST,
        contactsList: result,
      })
    }
  },
}

const defaultState = {
  contactsList: [0, 0, 0],
}
export const reducer = {
  // 首页表单数据
  contactsData: (state = defaultState, action = {}) => {
    switch (action.type) {
      case home.GET_CONTACTS_LIST:
        return { ...state, ...action }
      default:
        return state
    }
  },
}
