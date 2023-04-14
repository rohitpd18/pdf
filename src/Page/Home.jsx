import React, { useEffect, useState } from "react";
import "../assets/Css/Home.css";
import Card from "../Components/Card";
import axios from "../axios";


const Home = () => {
  const [pdf, setPdf] = useState([]);

  const fectchPdf = async () => {
    const res = await axios.get("/api/pdf");
    const data = res.data.data;

    setPdf(data);
  };

  useEffect(() => {
    fectchPdf();
  }, []);

  return (
    <>
      <div className="home-heading">
        <h2>Free Pdfs are Free to download!!</h2>
      </div>

      <div className="container card-container">
        {pdf.map((ele) => {
          return (
            <Card
              key={ele._id}
              id={ele._id}
              name={ele.name}
              pdfUrl={ele.pdfUrl}
              pdfSize= {ele.pdfSize}
              noOfPage= {ele.noOfPage}
              img={ele.img}
              tag={ele.tag}
              category={ele.category}
              publishDate= {ele.publishDate}
              uploadedBy={ele.uploadedBy}
              subtitle= {ele.subtitle}
              description={ele.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
