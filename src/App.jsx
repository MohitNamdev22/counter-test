import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Card, Typography} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <Card style={{padding:20, width:500}}>
        <Typography variant="h5">Welcome to the counter game

        </Typography>
      </Card>
    </div>
  )
}

export default App
