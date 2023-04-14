import React, { useState } from "react";

import imgbanner from "../../public/download.jpg";
import { AiFillPlusSquare } from "react-icons/ai";
import "../assets/Css/Create.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Create() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [
        {
          header: [1, 2, 3, 4, 5, 6, false],
        },
      ],
      [
        {
          font: [],
        },
      ],
      [
        {
          size: [],
        },
      ],
      ["bold", "italic", "underline", "blockquote", ],
      [{list:"ordered"},
      {list:"bullet"},
      {indent:"-1"},
      {indent:"+1"}],
      ["link", "image","video"]
    ],
  };

  return (
    <div className="box-cointainer">
      <div className="img">
        {/* <img style={{ margin: "auto" }} src={imgbanner} alt="banner" /> */}
      </div>
      <div class="form">
        {/* <div class="title">Welcome</div> */}
        <div class="subtitle">Add your Pdf and details</div>
        <div class="input-container ic1">
          <input id="" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            Title
          </label>
        </div>
        <div class="input-container ic2">
          <input id="lastname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Sub Title
          </label>
        </div>
        <div class="textarea-container ic2">
          <textarea id="lastname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Description
          </label>
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="file" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Trumnail Image
          </label>
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="file" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Upload pdf
          </label>
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="name" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            PDF name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            url
          </label>
        </div>
        <div class="input-container ic2">
          <select id="email" class="input" placeholder=" ">
            <option value="volvo" className="option">
              --Select--
            </option>
            <option value="volvo">Automobile</option>
            <option value="saab">Business</option>
            <option value="mercedes">Education</option>
            <option value="audi">Government</option>
          </select>
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Category
          </label>
        </div>
        <div class="subtitle ic2">Main cotent</div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          className="quil "
          />

          {/* <div dangerouslySetInnerHTML={{ _html:value }} /> */}
        <button type="text" class="submit">
          submit
        </button>
          </div>
    </div>
  );
}

export default Create;
