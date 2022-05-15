
import {useState} from 'react';

import './Document.css'
import GradeModal from './GradeModal'


function ProjectRate(){
  const [isOpen, setIsOpen] = useState(false);

const togglePopup = () => {
  setIsOpen(!isOpen);
}

    return (
        <>
        <div className = "document-container">
          <div className = "adjustment">

          </div>


                <div class="container-fluid">
                   <h1 class="h1">Grade The Project</h1>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">


                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Date</th>
                                            <th>Grade</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                              <td>Project Management</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary openModalBtn" onClick={togglePopup}>Grade

                                            </button></td>
                                          {isOpen && <GradeModal
                                              content={<>
                                                <h2>Grade The Project</h2>
                                                <div className="select-container">
                                                     <select>
                                                           <option value="">Select Grade</option>
                                                           <option value="">A+</option>
                                                           <option value="">A</option>
                                                           <option value="">A-</option>
                                                           <option value="">B+</option>
                                                           <option value="">B</option>
                                                           <option value="">B-</option>
                                                           <option value="">C+</option>
                                                           <option value="">C</option>
                                                           <option value="">C-</option>
                                                           <option value="">D</option>
                                                           <option value="">F</option>

                                                     </select>
                                                </div>
                                                <p>This is only used for the purpose of rating the project</p>
                                                <button class="buttons button2">Submit</button>
                                              </>}
                                              handleClose={togglePopup}
                                            />}



                                        </tr>
                                        <tr>
                                            <td>2</td>
                                              <td>MyHobies</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Grade</button></td>

                                        </tr>
                                        <tr>
                                            <td>3</td>
                                              <td>AASTU Daily News</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Grade</button></td>

                                        </tr>
                                        <tr>
                                            <td>4</td>
                                              <td>fresh Delivery</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Grade</button></td>

                                        </tr>
                                        <tr>
                                            <td>5</td>
                                              <td>Digital sign Assistant</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Grade</button></td>

                                        </tr>
                                        <tr>
                                            <td>6</td>
                                              <td>AI mechanism</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Grade</button></td>

                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>


        </div>
        </>
    );
}
export default ProjectRate;
