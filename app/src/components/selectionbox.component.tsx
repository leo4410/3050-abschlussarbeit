import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

function SelectionboxComponent({ selectedStations, setSelectedStations, item }: { selectedStations: any[], setSelectedStations: any, item: any }) {

    const [checked, setChecked] = useState(selectedStations.find((station => station["station_code"] == item["station_code"])) != undefined ? true : false)

    function addSelectedStation() {

        var found = selectedStations.find((station => station["station_code"] == item["station_code"]));

        if (found) {
            var index = selectedStations.indexOf(found)
            selectedStations.splice(index, 1)
            setChecked(false)
        } else {
            selectedStations.push(item)
            setChecked(true)
        }
        setSelectedStations(selectedStations)
    }


    return (
        <Checkbox
            checked={checked}
            onChange={addSelectedStation}
        />
    )
}

export default SelectionboxComponent
