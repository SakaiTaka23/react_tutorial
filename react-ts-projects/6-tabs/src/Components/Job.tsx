import { Typography } from '@material-ui/core';
import React from 'react';
import { JobType } from '../App';

const Job: React.FC<JobType> = ({ title, dates, duties, company }) => {
  return (
    <>
      <Typography variant='h4'>{title}</Typography>
      <Typography>{company}</Typography>
      <div>{dates}</div>
      <ul>
        {duties.map((duty) => {
          return <li>{duty}</li>;
        })}
      </ul>
    </>
  );
};

export default Job;
