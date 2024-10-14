import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
import '@fontsource/inter';
import './index.scss'

import store from './store/index.ts';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'

import router from './router/index.js'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> 
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
    </Provider>
  </StrictMode>,
)
