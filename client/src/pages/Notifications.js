import React, { useState} from 'react';
import './Notification.css';



function ReadMore({children = 100}) {

    const text = children;

    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0, 100) : text;

    function toggleIsShow() {
        setIsShowLess((!isShow));
    }

    return(
        <p>
            {result}
            <span className="btn btn-link" onClick={toggleIsShow}>
                {isShow ? "Read More" : "Read Less"}
            </span>
        </p>
    )

}


export default function Notifications(){
    return (
        <>
        <div className="notification-container">
                 <div className="notification-title">

                     <h2>Current Notification</h2>

                 </div>
                 <div className="listOfMessage">
                       <ul>
                           <li>
                               <div className="messageDate">
                                     <p>14 may 2022</p>
                               </div>

                             <ReadMore>
                                  Your proposal have been approved you can proced into the project with your adviser
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                  book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </ReadMore>
                           </li>
                           <li>
                           <div className="messageDate">
                                 <p>14 may 2022</p>
                           </div>

                         <ReadMore>

                              on next monday we will be having a meeting at 8:00 local time at my officce
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </ReadMore>

                           </li>
                           <li>
                           <div className="messageDate">
                                 <p>14 may 2022</p>
                           </div>

                         <ReadMore>

                              Please Submit your proposal
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </ReadMore>

                             </li>
                             


                       </ul>

                 </div>
        </div>
        </>
    );
}
