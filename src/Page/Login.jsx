import React, { useEffect, useState } from "react";
import "../assets/Css/Login.css"
import axios from "../axios";
function Login() {

  const [pdf, setPdf] = useState([]);

  const fectchPdf = async () => {
    const res = await axios.get("/api/create");
    const data = res.data.data.create;
// console.log(data);
    setPdf(data);
  };

  useEffect(() => {
    fectchPdf();
  }, []);

  return (
    <div>

{pdf.map((ele) => {
          return (<div>
            <div>{ele.title}</div>
            <div dangerouslySetInnerHTML={{ __html: ele.value }} />
            </div>
            );
        })}




          <div class="form">
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button type="text" class="submit">submit</button>
    </div>
    </div>
  );
}

export default Login;
