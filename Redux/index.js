import {combineReducers} from 'redux'
import {repoReducer} from './Reducers/RepoReducer'

export default combineReducers({
  repos: repoReducer
})