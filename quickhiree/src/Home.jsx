import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/jobs?search=${search}');
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Find Your Dream Job Today</h1>

      <input
        type="text"
        placeholder="Search job..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />

      <br /><br />

      <button onClick={handleSearch} style={styles.btn}>
        Search Job
      </button>

      <button onClick={() => navigate("/jobs")} style={styles.btn}>
        Browse All Jobs
      </button>
    </div>
  );
};

const styles = {
  btn: {
    padding: "10px 15px",
    margin: "5px",
    cursor: "pointer"
  }
};

export default Home;