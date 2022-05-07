
import './Draft.css';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "PDF", "DOC"];

function Proposal() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>

    <div className="dragdrop-container">
      <div className="text-cont">
           <p>Drop your Proposal here</p>
      </div>
      <div className="fileUpload">
              <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      </div>
      <div className="submit-btn">
             <button class="buttonss button22">Submit</button>
             <button class="buttonss2 button22">Write New</button>
      </div>



    </div>
    </>


  )
}

export default Proposal;
