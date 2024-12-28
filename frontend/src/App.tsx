import { useState } from 'react'
import StationsComponent from "./components/stations.component.tsx"
import SnowComponent from './components/snow.component.tsx';
import { Button, ButtonGroup } from '@mui/material';

const SNOWDATA_URL = "http://localhost:8000/";
const STATIONDATA_URL = "http://localhost:8000/";

function App() {

  const [menu, setMenu] = useState("Schneehöhen")
  const [selectedStations, setSelectedStations] = useState<any[]>([])

  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        {menu === "Schneehöhen" && <Button value="Schneehöhen" variant="contained" onClick={(event) => { setMenu(event.target.value) }}>Schneehöhen</Button>}
        {menu !== "Schneehöhen" && <Button value="Schneehöhen" variant="outlined" onClick={(event) => { setMenu(event.target.value) }}>Schneehöhen</Button>}
        {menu === "Standorte" && <Button value="Standorte" variant="contained" onClick={(event) => { setMenu(event.target.value) }}>Standorte</Button>}
        {menu !== "Standorte" && <Button value="Standorte" variant="outlined" onClick={(event) => { setMenu(event.target.value) }}>Standorte</Button>}
      </ButtonGroup>


      {menu === "Schneehöhen" && <SnowComponent stations={selectedStations}></SnowComponent>}
      {menu === "Standorte" && <StationsComponent selectedStations={selectedStations} setSelectedStations={setSelectedStations}></StationsComponent>}

    </div>

  )
}

export default App
