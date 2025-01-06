import { useState } from 'react'
import StationsComponent from "./components/stations.component.tsx"
import SnowComponent from './components/snow.component.tsx';
import { Button, ButtonGroup } from '@mui/material';

function App() {

  const [menu, setMenu] = useState("Schneehöhen")
  const [selectedStations, setSelectedStations] = useState<any[]>([{
    "network": "BEOB",
    "station_code": "1JA0",
    "label": "Jaunpass",
    "active": true,
    "lon": 7.339465,
    "lat": 46.593472,
    "elevation": 1520,
    "type": null
  }, {
    "network": "BEOB",
    "station_code": "1SM0",
    "label": "Saanenmöser",
    "active": true,
    "lon": 7.297512,
    "lat": 46.518764,
    "elevation": 1390,
    "type": null
  }, {
    "network": "IMIS",
    "station_code": "STH1",
    "label": "Stockhorn",
    "active": true,
    "lon": 7.538571,
    "lat": 46.693863,
    "elevation": 2190,
    "type": "WIND"
  },
  ])

  return (
    <div>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        {menu === "Schneehöhen" && <Button value="Schneehöhen" variant="contained" onClick={(event) => { setMenu(event.currentTarget.value) }}>Schneehöhen</Button>}
        {menu !== "Schneehöhen" && <Button value="Schneehöhen" variant="outlined" onClick={(event) => { setMenu(event.currentTarget.value) }}>Schneehöhen</Button>}
        {menu === "Standorte" && <Button value="Standorte" variant="contained" onClick={(event) => { setMenu(event.currentTarget.value) }}>Standorte</Button>}
        {menu !== "Standorte" && <Button value="Standorte" variant="outlined" onChange={(event) => { setMenu(event.currentTarget.value) }}>Standorte</Button>}
      </ButtonGroup>


      {menu === "Schneehöhen" && <SnowComponent selectedStations={selectedStations}></SnowComponent>}
      {menu === "Standorte" && <StationsComponent selectedStations={selectedStations} setSelectedStations={setSelectedStations}></StationsComponent>}

    </div>

  )
}

export default App
