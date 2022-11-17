import './css/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'

import { store } from './redux'
import { MainView } from './views/MainView'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider store={store}>
    <MainView />
  </StoreProvider>
)
