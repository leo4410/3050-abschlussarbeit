import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StationsMap from "../maps/stations.map.tsx"
import Checkbox from '@mui/material/Checkbox';
import SelectionboxComponent from './selectionbox.component.tsx';

const STATIONDATA_URL = "http://localhost:8000/";

function StationsComponent({ selectedStations, setSelectedStations }: { selectedStations: any[], setSelectedStations: any }) {
  const [stations, setStations] = useState<any[]>([])

  useEffect(() => {
    fetchStations();
  }, []);

  async function fetchStations() {

    var query = STATIONDATA_URL + "stations/"

    var responsedata = await fetch(query);
    var jsondata = await responsedata.json();
    setStations(jsondata)
  }

  return (
    <>
      {stations !== undefined &&
        <div>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox


                      inputProps={{
                        'aria-label': 'select all desserts',
                      }}
                    /></TableCell>
                  <TableCell>Station</TableCell>
                  <TableCell>Kürzel</TableCell>
                  <TableCell>Breitengrad</TableCell>
                  <TableCell>Längengrad</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {stations.map((item, index) => (
                  <TableRow key={index}>
                    <SelectionboxComponent selectedStations={selectedStations} setSelectedStations={setSelectedStations} item={item} />
                    <TableCell>{item["label"]}</TableCell>
                    <TableCell>{item["station_code"]}</TableCell>
                    <TableCell>{item["lat"]}</TableCell>
                    <TableCell>{item["lon"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <StationsMap stations={stations}></StationsMap>
        </div>
      }
    </>
  )
}

export default StationsComponent
