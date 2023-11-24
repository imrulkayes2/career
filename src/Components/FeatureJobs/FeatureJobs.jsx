import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/public/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    const [dataLength, setDataLength] = useState(4);
    return (
        <div className=" text-center my-10">
            <h1 className='text-5xl text-center'>Featured Jobs:{jobs.length}</h1>
            <p className='text-2xl text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2">
                {
                    jobs.slice(0, dataLength).map(jobs => <Jobs key={jobs.id} jobs={jobs}></Jobs>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(jobs.length)}
                    className=" btn btn-primary mt-5">See All Jobs </button>
            </div>
        </div >
    );
};

export default FeatureJobs;