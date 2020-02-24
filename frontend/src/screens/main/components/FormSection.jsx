import React from 'react';
import Form from './Form'
import SaveTrip from './SaveTrip'
import {Link} from "react-router-dom";
import saveToLocal from '../helpers/saveToLocal';


const FormSection = (props) => {
  return (
    <div className='form-section shadow ' >
      <div>
        <h1> <strong>{props.city}</strong></h1>
        <h2> {props.budget>=0?`$${props.budget}`:`-$${-props.budget}`}  </h2>
      </div>
      <Form budget={props.budget} setBudget={props.setBudget} />
      {props.user? <SaveTrip columns={props.columns} user={props.user} total={props.total} city={props.city} budget={props.budget} tripId={props.tripId} tripName={props.tripName} />:<Link onClick={()=> saveToLocal(props.columns)} to='/login'>Login to Save</Link> }
    </div>
  );
};

export default FormSection;