
import React from 'react';

import './Document.css'

function ProposalRequest(){


    return (
        <>
        <div className = "document-container">
          <div className = "adjustment">

          </div>


                <div class="container-fluid">


                    <h1 class="h1">Project Request List</h1>



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
                                            <th>Approve</th>
                                            <th>Reject</th>



                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                              <td>Project Management</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Approve</button></td>
                                            <td><button class="btn btn-primary">Reject</button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                              <td>MyHobies</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Approve</button></td>
                                            <td><button class="btn btn-primary">Reject</button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                              <td>AASTU Daily News</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Approve</button></td>
                                            <td><button class="btn btn-primary">Reject</button></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                              <td>fresh Delivery</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Approve</button></td>
                                            <td><button class="btn btn-primary">Reject</button></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                              <td>Digital sign Assistant</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Approve</button></td>
                                            <td><button class="btn btn-primary">Reject</button></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                              <td>AI mechanism</td>

                                              <td>12/7/2019</td>
                                            <td><button class="btn btn-primary">Approve</button></td>
                                            <td><button class="btn btn-primary">Reject</button></td>
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
export default ProposalRequest;
