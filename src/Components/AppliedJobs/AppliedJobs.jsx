import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import AppliedJob from "../AppliedJob.jsx/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleFilterJob = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'Onsite') {
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onSiteJobs);
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }

            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied)
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [])
    return (
        <div>
            <div className="flex justify-between">
                <p>Applied Jobs: {appliedJobs.length}</p>
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilterJob('all')}><a>All</a></li>
                        <li onClick={() => handleFilterJob('Remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilterJob('Onsite')}><a>On Site</a></li>
                    </ul>
                </details>
            </div>
            {
                displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }

        </div>
    );
};

export default AppliedJobs;