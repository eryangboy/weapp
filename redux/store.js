import {
  createStore
} from '../miniprogram_npm/redux/index'
import reducers from './reducers'
//create your Redux store
const store = createStore(reducers)

export default store;