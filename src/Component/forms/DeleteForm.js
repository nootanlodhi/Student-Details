
import React,{useEffect, useState} from 'react'
import './allForms.css'
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './allForms.css'
import axios from 'axios';

const DeleteForm = () => {

  let {id}=useParams();

  let navigate=useNavigate();

 const [deleteStudent,setDeleteStudent]=useState({
  name:'',
  studentclass:'',
 });

 const {name,studentclass}=deleteStudent;

 useEffect(()=>{
   loadStudent();
 },[])

 const onSubmitFun= async(e)=>{
   e.preventDefault();

   await axios.delete(`http://localhost:3005/students/${id}`,deleteStudent);
  //  console.log('http://localhost:3005/students');
   navigate('/student')
 }

 const loadStudent=async()=>{
   const result= await axios.get(`http://localhost:3005/students/${id}`);
   setDeleteStudent(result.data);
   console.log(result);
 }

//  const deleteUser= async(id)=>{
//   await axios.delete(`http://localhost:3005/students/${id}`);
//   loadStudent();
// }

  return (
    <>
    
      <div className="addStudent-main-div">
        <div className="deleteStudent-div">
          <h3>Remove Student</h3>
          <hr className="form-hr" />
          <p className="para">
            Are you sure you want to remove the current Student from the list?
          </p>
          <form action="" onSubmit={e=>onSubmitFun(e)}>
          <div className="deletStudentName">
            <p className="studentNamehead">Student name</p>
            <p className="stuname">{deleteStudent.name}</p>
          </div>
          <div className="deletStudentName">
            <p className="studentNamehead">class</p>
            <p>{deleteStudent.studentclass}</p>
          </div>
          <hr className="form-hr" />
          <div className="add-cancle-btn">
            <button className="cancle-btn">
                <NavLink to='/student' className='active-link'>
              Cancle
              </NavLink>
            </button>
            <button className="confirm-btn remove-btn" >
              
              Remove
              
            </button>
            
          </div>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default DeleteForm