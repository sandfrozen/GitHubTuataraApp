import React from 'react'
import {AppNavigator} from './AppNavigator'
import {createAppContainer} from 'react-navigation'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import repoReducer from './Redux/index'

const AppContainer = createAppContainer(AppNavigator)

const store = createStore(repoReducer)

export default class App extends React.Component {
  render() {
    return <Provider store={ store }><AppContainer/></Provider>
  }
}