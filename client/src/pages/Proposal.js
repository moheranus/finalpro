
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

      <div className="proposal-container">

        <div className="ProposalInput">
          <div className="proposalOne">
               <div className="textTitle">
                     <div className="proposal-text">proposal_1:</div>
                 <div className="proposal-sub1">
                       <input type="text"placeholder=" title of the first proposal"></input>

                 </div>
               </div>
               <div className="fileUpload">
                       <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
               </div>
          </div>
          <div className="proposalTwo">
            <div className="textTitle">
                  <div className="proposal-text">proposal_2:</div>
              <div className="proposal-sub1">
                    <input type="text"placeholder=" title of the second proposal"></input>

              </div>
            </div>
            <div className="fileUpload">
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            </div>
          </div>
          <div className="proposalThree">
            <div className="textTitle">
                  <div className="proposal-text">proposal_3:</div>
              <div className="proposal-sub1">
                    <input type="text"placeholder=" title of the third proposal"></input>

              </div>
            </div>
            <div className="fileUpload">
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            </div>
          </div>
        </div>







              <div className="proposal_btn">
                     <button class="buttons button2">Submit</button>
              </div>
      </div>



    </div>
    </>


  )
}

export default Proposal;
