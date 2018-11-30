import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const createStoreWithMiddleware = history => compose(
  applyMiddleware(thunkMiddleware)
)(createStore(history))

export default function configureStore (history) {
  return createStoreWithMiddleware(rootReducer, history)
}
