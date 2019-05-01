﻿import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
// import Routes from './Routes';
import { actions } from './components/Header/store/actions'

const App = (props) => {
  return (
    <div>
       <Header/>
       {
         renderRoutes(props.route.routes)
       }
    </div>
  )
}

App.loadData = (store) => {
  store.dispatch(actions.getHeaderInfo())
}

export default App
