import api from '@/utils/api-client'

const home = {
  // 获取记录
  GET_ALL_RECORDS: Symbol('GET_ALL_RECORDS'),
}

export const actions = {
  // 保存表单数据
  getAllRecords: () => {
    return async dispatch => {
      const result = [109, 5, 15] // await api('get', '/getAllRecords')
      dispatch({
        type: home.GET_ALL_RECORDS,
        recordList: result,
      })
    }
  },
}

const defaultState = {
  recordList: [0, 0, 0],
}
export const reducer = {
  // 首页表单数据
  homeData: (state = defaultState, action = {}) => {
    switch (action.type) {
      case home.GET_ALL_RECORDS:
        return { ...state, ...action }
      default:
        return state
    }
  },
}
