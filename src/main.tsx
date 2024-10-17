import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import '@fontsource/inter';
import '@/index.scss'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'
import store from '@/store/index.ts';
import router from '@/router/index.js'
import CssBaseline from '@mui/joy/CssBaseline';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> 
    
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
    </Provider>
  </StrictMode>,
)
