// ②reducers
import * as actions from './actions'
const initialState = {
  a: 0,
  name: 'zhangsan'
}

function reducers(state = initialState, action) {
  switch (action.type) {
    case actions.COUNTER_ADD:
      return {
        ...state, a: state.a + 1
      }
      case actions.COUNTER_DEC:
        return {
          ...state, a: state.a - 1
        }
        case actions.COUNTER_DOUBLE:
          return {
            ...state, a: state.a * 2
          }
          default:
            return state
  }
}

export default reducers