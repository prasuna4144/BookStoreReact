import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css'
function Epuform() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const submit1 = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4500/auth", formdata)  // Send the formdata directly
      .then((response) => {
        // Handle the response, e.g., navigate to another page
        navigate("/shop");
      })
      .catch((error) => {
        alert("Bad credentials");
      });
  };

  return (
    <div className="div2">
      <h1 className="hh">LOGIN HERE</h1>
      <form className="app" onSubmit={submit1}>
        <label className="lab1">EMAIL : </label>
        <br />
        <input
          type="email"
          name="email"
          required
          className="a"
          placeholder="enter email"
          onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
        />
        <br />
        <br />
        <label className="lab">PASSWORD : </label>
        <br />
        <input
          type="password"
          name="password"
          required
          className="a"
          placeholder="enter password"
          onChange={(e) => setformdata({ ...formdata, password: e.target.value })}
        />
        <br />
        <br />
        <br />
        <button className="but" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Epuform;