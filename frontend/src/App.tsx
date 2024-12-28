import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StationsComponent from "./components/stations.component.tsx"

const SNOWDATA_URL = "http://localhost:8000/";

function App() {



  return (
    <div>
      <StationsComponent></StationsComponent>
    </div>

  )
}

export default App
