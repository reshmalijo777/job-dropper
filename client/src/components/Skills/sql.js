import "./skills.css"
import Chip from '@mui/material/Chip';
import {MDBIcon} from 'mdb-react-ui-kit';

const SQL = () => {
    return (
        <Chip className="chips" component="a" href="https://www.w3schools.com/sql/" target="_blank"     
          icon={
            <MDBIcon 
        fab
        icon="database"/>
        }
        label="SQL"/>
    )
}

export default SQL;