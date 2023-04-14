import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useLocation } from "react-router-dom";
import "../assets/Css/SinglePdf.css";

const SingleBlog = () => {
  const [pdf, setPdf] = useState({});
  let location = useLocation();

  const fectPdf = async () => {
    let data = await axios.get("/api/pdf" + location.pathname);
    setPdf(data.data.data);
  };

  useEffect(() => {
    fectPdf();
  }, []);

  return (
    <>
      <div className="container">
        <div className="single-pdf">
          <div className="pdf-heading">
            <h1 className="pdf-title">{pdf.name}</h1>
            <p className="pdf-subtitle">{pdf.subtitle}</p>
          </div>

          <div className="details">
            <div className="details-items">
              <div className="details-item">
                <p>PDF name</p>
                <p>{pdf.name}</p>
              </div>
              <hr />
              <div className="details-item">
                <p>No. of Pages.</p>
                <p>{pdf.noOfPage}</p>
              </div>
              <hr />
              <div className="details-item">
                <p>PDF Size</p>
                <p>{pdf.pdfSize} MB</p>
              </div>
              <hr />
              <div className="details-item">
                <p>PDF Category</p>
                <p>{pdf.category}</p>
              </div>
              <hr />
              <div className="details-item">
                <p>PDF Published</p>
                <p>{pdf.publishDate}</p>
              </div>
              <hr />
              <div className="details-item">
                <p>Uploaded By</p>
                <p>{pdf.uploadedBy}</p>
              </div>
              <hr />
            </div>
            <div className="pdf-img">
              <img src={axios.getUri() + "/" + pdf.img} alt="" />
            </div>
          </div>

          <h3 className="pdf-title">{pdf.name}</h3>
          <small className="pdf-subtitle">{pdf.subtitle}</small>
          <div className="pdf-description">{pdf.description}</div>

          <div className="download-section">
            <h3>{pdf.name} Download Link</h3>
            <a href={axios.getUri() + "/" + pdf.pdfUrl}>
              <button>Preview here</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
