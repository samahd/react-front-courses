import React, { useState } from "react";
import Course from "./Course";

const AllCourses=()=>{
    const [courses,setCourses]=useState([
        {title:"Java Course", description:"this is Core Java Course"},
        {title:"DJango Course", description:"this is DJango Course using Python"},
        {title:"Python Course", description:"this is Python Course"},
        {title:"C++ Course", description:"this is c++ Courses"},
        {title:"JavaScript Course", description:"this is JavaScript Course"}
    ]);
    
    return (
        <div>
            <h1 className="text-center">All Courses</h1>

            {courses.length > 0
                ?courses.map((item) => <Course course={item}/>)
                :"No Course"}
        </div>
    );
};

export default AllCourses;
