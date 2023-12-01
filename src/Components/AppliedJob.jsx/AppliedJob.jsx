import { GoLocation } from "react-icons/go";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const AppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, salary, location } = job;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure> <img src={logo} alt="google" className="rounded-xl" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="btn btn-active hover: btn-primary">{remote_or_onsite}</button>
                    <button className="btn btn-active hover: btn-primary">{job_type}</button>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
                <div className=" flex gap-2">
                    <h2 className="flex gap-1 center"><GoLocation className="text-2xl" /> {location}</h2>
                    <h2 className="flex gap-1 align-center "> <AiOutlineDollarCircle className="text-2xl" />Salary:{salary}</h2>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;