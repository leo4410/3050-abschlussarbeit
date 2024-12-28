import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function SnowComponent({ stations }: { stations: any[] }) {

    return (
        <>
            {stations !== undefined &&
                <div>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Station</TableCell>
                                    <TableCell>Kürzel</TableCell>
                                    <TableCell>Breitengrad</TableCell>
                                    <TableCell>Längengrad</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {stations.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item["label"]}</TableCell>
                                        <TableCell>{item["station_code"]}</TableCell>
                                        <TableCell>{item["lat"]}</TableCell>
                                        <TableCell>{item["lon"]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>


                </div>
            }
        </>
    )
}

export default SnowComponent
