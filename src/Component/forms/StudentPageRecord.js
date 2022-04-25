import React, { useEffect, useState } from 'react'
import './allForms.css'
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const StudentPageRecord = () => {

  const [students,setStudents]=useState([]);

  useEffect(()=>{
   loadStudent();
  },[]);

  const loadStudent=async () =>{
    const result= await axios.get('http://localhost:3005/students');
    setStudents(result.data);
    // console.log(result);
  }

  return (
    <>
    <div className="student-main-div">
        <p>No.</p>
        <p>Student Name</p>
        <p>Class</p>
        
        <p>Result</p>
        
        <p>Score</p>
        <p>Grade</p>
        <div className="first-icon">
          <FiEdit2 className="edit-icon" />
          <MdDelete />
        </div>
      </div>
      <hr />

      {
        students.map((item,index)=>{
          return(
            <>
               <div className="student-details-div" >
              <p>{index+1}</p>
              <p>{item.name}</p>
              <p>{item.studentclass}th</p>
             
             
              {
                item.score<60?<p><p className='result-fail'>Failed</p></p>:<p><p className='result-pass'>passed</p></p>
              }
             
             
              <p>{item.score}/100</p>
              
              {
                item.score>=70?<p className='exilent'>Excellent</p>:<p>{
                  item.score>70 && item.score<=60?<p>Average</p>:<p>{
                    item.score<60?<p className='fail'>Poor</p>:<p className='average'>Average</p>
                    }</p>
                  }</p>
              }
            
              {/* <p>average</p> */}
              <div className="second-icon">
                <NavLink to={`/student/edit/${item.id}`} className='active-link-det-ed'>
                <FiEdit2 className="edit-icon"/>
                </NavLink>
                <NavLink to={`/student/delete/${item.id}`} className='active-link-det-ed'>
                <MdDelete/>
                </NavLink>
              </div>
            </div>
            <hr />
            </>
          )
        })
      }

    </>
  )
}

export default StudentPageRecord