
import React from 'react';

import './Document.css'

export default function Document(){


    return (
        <>
        <div className = "document-container">
          <div className = "adjustment">




          </div>






                <div class="container-fluid">


                    <h1 class="h1">List of Project</h1>



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
                                            <th>Department</th>
                                            <th>Rate</th>
                                            <th>Date</th>
                                            <th>Action</th>


                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                              <td>circuit and power</td>
                                              <td>Electrical engineering</td>
                                              <td>****</td>
                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">View</button></td>


                                        </tr>
                                        <tr>
                                          <td>2</td>
                                            <td> RMs managment system</td>
                                            <td>Software</td>
                                            <td>*****</td>
                                            <td>4/4/2022</td>
                                          <td><button class="btn btn-primary">View</button></td>

                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td> RMs managment system</td>
                                          <td>Software</td>
                                          <td>*****</td>
                                          <td>4/4/2022</td>
                                          <td><button class="btn btn-primary">View</button></td>

                                        </tr>
                                        <tr>
                                            <td>4</td>
                                              <td>circuit and power</td>
                                              <td>Electrical engineering</td>
                                              <td>****</td>
                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">View</button></td>

                                        </tr>
                                        <tr>
                                          <td>5</td>
                                            <td> RMs managment system</td>
                                            <td>Software</td>
                                            <td>*****</td>
                                            <td>4/4/2022</td>
                                          <td><button class="btn btn-primary">View</button></td>

                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td> RMs managment system</td>
                                          <td>Software</td>
                                          <td>*****</td>
                                          <td>4/4/2022</td>
                                          <td><button class="btn btn-primary">View</button></td>

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
