import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './Components/Loading';
import Tab from './Components/Tab';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);

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

  return <Tab />;
}

export default App;
