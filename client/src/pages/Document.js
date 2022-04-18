
import React from 'react';

import './Document.css'
export default function Document(){
    return (
        <>
        <div className = "document-container">


            <div className="table-container">


                    <table id="projects">
                    <tr>
                    <th>Title</th>
                    <th>Department</th>
                    <th>Rate</th>
                    <th>Dates</th>
                    </tr>
                    <tr>
                    <td>circuit and power</td>
                    <td>Electrical engineering</td>
                    <td>****</td>
                    <td>12/7/2019</td>
                    </tr>
                    <tr>
                    <td> RMs managment system</td>
                    <td>Software</td>
                    <td>*****</td>
                    <td>4/4/2022</td>
                    </tr>
                    <tr>
                    <td>self managing drone</td>
                    <td>Electro Mechanical</td>
                    <td>****</td>
                    <td>5/6/2022</td>
                    </tr>

                    <tr>
                    <td>circuit and power</td>
                    <td>Electrical engineering</td>
                    <td>****</td>
                    <td>12/7/2019</td>
                    </tr>
                    <tr>
                    <td>RM managment system</td>
                    <td>Software</td>
                    <td>*****</td>
                    <td>4/4/2022</td>
                    </tr>
                    <tr>
                    <td>self managing drone</td>
                    <td>Electro Mechanical</td>
                    <td>****</td>
                    <td>5/6/2022</td>
                    </tr>

                    </table>
                    <div class="pagination">
                              <a href="#">&laquo;</a>
                              <a href="#">1</a>
                              <a href="#" class="active">2</a>
                              <a href="#">3</a>
                              <a href="#">4</a>
                              <a href="#">5</a>
                              <a href="#">6</a>
                              <a href="#">&raquo;</a>
                    </div>


            </div>

        </div>
        </>
    );
}
