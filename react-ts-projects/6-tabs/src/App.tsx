import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Job from './Components/Job';
import Loading from './Components/Loading';
import Tab from './Components/Tab';

const url = 'https://course-api.com/react-tabs-project';

export type JobType = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [jobIndex, setJobIndex] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  const job = jobs[jobIndex];
  return (
    <>
      <Typography variant='h1' align='center'>
        Expirence
      </Typography>
      {jobs.map((job) => {
        return <Tab key={job.order} company={job.company} />;
      })}

      <Job key={job.id} {...job} />
    </>
  );
}

export default App;
