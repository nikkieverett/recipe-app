import { createStore } from 'redux'
import reducer from './reducer'
import actions from './actions'

const store = createStore(reducer)

export default {
  store,
  actions
}
