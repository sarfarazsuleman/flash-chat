import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from 'setup/store'
import Router from 'setup/router'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)