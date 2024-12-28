import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StationsComponent from "./components/stations.component.tsx"

const SNOWDATA_URL = "http://localhost:8000/";

function App() {

  /*const [data, setData] = useState()

  <// useEffect(() => {
    // fetchDailyData(2024, 12, 22);
  // }, []);

  async function fetchDailyData(year: number, month: number, day: number) {

    var query = SNOWDATA_URL + "snow/year/"
    query = query + year + "?month=" + month + "&day=" + day;

    var responsedata = await fetch(query);
    var jsondata = await responsedata.json();
    setData(jsondata)
    console.log(jsondata)
  }*/

  return (
    <div>
      <StationsComponent></StationsComponent>
    </div>

  )
}

export default App
