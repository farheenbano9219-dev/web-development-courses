import { useLocation } from "react-router-dom";
import jobsData from "./jobsdata";
import JobCard from "./JobCard";
import { useState } from "react";

const Jobs = () => {
  const [filter, setFilter] = useState("All");
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  const filteredJobs = jobsData.filter((job) => {
    return (
      (filter === "All" || job.type === filter) &&
      job.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Job Listings</h2>

      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Remote")}>Remote</button>
        <button onClick={() => setFilter("Full-Time")}>Full-Time</button>
      </div>

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
