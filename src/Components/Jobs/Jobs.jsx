import { GoLocation } from "react-icons/go";
import { AiOutlineDollarCircle } from "react-icons/ai";
const Jobs = ({ jobs }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, salary, location } = jobs;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border-cyan-100">
            <figure className="px-10 pt-10">
                <img src={logo} alt="google" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-2">
                    <button className="btn btn-active btn-primary">{remote_or_onsite}</button><button className="btn btn-active btn-primary">{job_type}</button>
                </div>
                <div className=" flex gap-2">
                    <h2 className="flex gap-1 center"><GoLocation className="text-2xl" /> {location}</h2>
                    <h2 className="flex gap-1 align-center "> <AiOutlineDollarCircle className="text-2xl" />Salary:{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;