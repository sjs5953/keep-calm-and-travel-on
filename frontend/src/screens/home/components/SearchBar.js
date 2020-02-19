import React, {useState,useEffect,Link} from 'react';
import getCities from '../helpers/getCities'
import CityItemList from './CityItemList'

import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
    },
  },
}));

export default function SearchBar (props) {
  const classes = useStyles()

  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');

  return(
    <>
      <form className={classes.root} noValidateautoComplete="off" onSubmit={event=>event.preventDefault()}>
        <TextField input 
          id="standard-search" 
          label="Enter your destination, budget or activity" 
          type='text'
          color="secondary"
          onChange={(event)=>
            {
              setCity(event.target.value);
              getCities(event.target.value, setCities);
            }}
          placeholder='e.g Bali'
          value={city}
        />
      </form>

      <CityItemList cities={cities} setCity={setCity} value={city}/>
    </>
  )

}

// <div style={{width: 300}}>
      
// <Autocomplete
//   id="combo-box-demo"
//   options={cities.map(city => city.city)}
//   // getOptionLabel={option => option.title}
//   style={{ width: 300 }}
//   renderInput={params => (
//     <TextField {...params} label="comboBox" margin="normal" variant="outlined" fullWidth onChange={(event)=>getCities(event.target.value, setCities)} />
// )}
// />
// </div>




// import React from 'react';
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 500,
//     },
//   },
// }));

// export default function SearchBar (props) {
//   const classes = useStyles()
//   return(
//     // <form>
//     //   <TextField placeholder="Destination, Budget or Activity" onChange={(event)=> props.onChange(event.target.value)}/>
//     // </form>
//     <form className={classes.root} noValidate autoComplete="off">
//     <TextField 
//     id="standard-search" 
//     label="Enter your destination, budget or activity" 
//     type="search" 
//     onChange={(event)=> props.onChange(event.target.value)}
//     />
//     </form>
//   )
// }

