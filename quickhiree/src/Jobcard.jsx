import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p><b>{job.company}</b></p>
      <p>{job.salary}</p>
      <p>{job.type}</p>

      <Link to={'/jobs/${job.id}'}>
        <button style={styles.btn}>View Details</button>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px"
  },
  btn: {
    padding: "8px 10px",
    cursor: "pointer"
  }
};

export default JobCard;