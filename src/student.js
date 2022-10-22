import React from 'react';
import Courses from './courses';
import _ from "lodash";

const Student = ({ name = "John Doe", number = "1", enrolled=1}) => {
  return (
    <>
        <p>Student <b>{name}</b> with student number <b>{number}</b></p>
        {_.times(enrolled, (i) => <Courses enrolled={i} />)} 
    </>
  )
}

export default Student; 
