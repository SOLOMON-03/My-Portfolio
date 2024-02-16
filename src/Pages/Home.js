import React from "react";
import "./Home.css";
import image from "../Assets/IMG_20240213_104539.jpg";

const PDF_URL= "SOLOMON_A - RESUME.pdf"
function Home() {
    const downloadPdf = (url) =>{
        fetch(url).then(response=>response.blob()).then(blob=>{
            const blobUrl = window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split("/").pop();
            const aTag = document.createElement("a");
            aTag.href = blobUrl;
            aTag.setAttribute("download", fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        })
    }
    return (
            <div className="home-view" id="home">
                <div className="home-left">
                    <div className="home-box"></div>
                    <img src={image} className="home-img" alt="" />
                </div>
                <div className="home-right">
                    <h1 className="home-h1-me">Hi, I am Solomon</h1>
                    <h5 className="home-h5-me">FullStack Developer</h5>
                    <p className="home-p-me">
                    Seeking a challenging position in a reputed organization where I can learn new
                    skills, expand my knowledge, and leverage my learning. To get an opportunity
                    where I can make the best of my potential and contribute to the organization’s
                    growth.
                    </p>
                    <button className="home-button" onClick={()=>downloadPdf(PDF_URL)}>CV Download</button>
                </div>
            </div> 
    );
}

export default Home;
