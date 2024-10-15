import { useState } from 'react'
import Button from '@mui/joy/Button';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'


export interface CounterState {
  count: number;
}

export interface RootState {
  counter: CounterState;
}
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { inscrement, decrement} from "./store/modules/channlStore"


function App() {
  const [count1, setCount] = useState(0)
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { count } = useTypedSelector(state => state.counter);
  const disptch = useDispatch()
  return (
    <>
    {/* <LoginFinal/> */}
    <Button variant="solid">Hello world</Button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="outlined"  color="warning" onClick={() => setCount((count1) => count1 + 1)}>
          count is {count1} 
        </Button>
        <Button variant="outlined"  color="warning" onClick={() => disptch(inscrement())}>
          +
        </Button>
        {count}
        <Button variant="outlined"  color="warning" onClick={() => disptch(decrement())}>
          -
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
