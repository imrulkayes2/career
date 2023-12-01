import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    console.log(job);

    const handleApply = () => {
        saveJobApplication(intId);
        toast('You have Successfully applied this job.')
    };


    return (
        <div>
            <h2>Job details here</h2>
            <div className="grid  gap-4  md:grid-cols-4">
                <div className="border md: col-span-3">
                    <p>Every job in formation comming here</p>
                </div>
                <div className=" border md:col-span-1">
                    <p className="text-2xl">Side job item</p>
                    <button onClick={handleApply} className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;