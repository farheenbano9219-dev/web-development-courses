import { useParams } from "react-router-dom";
import jobs from "./jobsData";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) return <h2>Job not found</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{job.title}</h2>
      <p><b>{job.company}</b></p>
      <p>{job.salary}</p>
      <p>{job.type}</p>
      <p>{job.description}</p>

      <button
        onClick={() => alert("Success! Application Submitted")}
        style={{ padding: "10px" }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;