import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './allForms.css'

const AddStudentForm = () => {

  let navigate=useNavigate();
   const [studentScore,setStudentScore]=useState();
   const [formError,setFormError]=useState({});
   const [isSubmit,setIsSubmit]=useState(false);

 const [addStudent,setAddStudent]=useState({
   name:'',
   studentclass:'',
   score:'',
 });

 const {name,studentclass,score}=addStudent;

 const onInputChange=(e)=>{
   setAddStudent({...addStudent,[e.target.name]:e.target.value});

   setStudentScore(addStudent.score);
  //  navigate('./student')
 }

 const onSubmitFun= async(e)=>{
   e.preventDefault();
   setFormError(validate(addStudent));
   setIsSubmit(true);
  //  if(Object.keys(formError).length===0 && isSubmit){
  //  await axios.post('http://localhost:3005/students',addStudent);
  //  navigate('./student');
  //  }
  //  setFormError(validate(addStudent));
  //  setIsSubmit(true);
 }

 const fun=async()=>{
  await axios.post('http://localhost:3005/students',addStudent);
   navigate('./student');
 }

 useEffect(()=>{
   console.log(formError);
   if(Object.keys(formError).length===0 && isSubmit){
     console.log(addStudent);
     fun();
   }
 },[formError])

 const validate=(values)=>{
  const errors={};
  if(!values.name)
  {
    errors.name="name is reqired"
  }

  if(!values.studentclass)
  {
    errors.studentclass="class is reqired"
  }else if(values.studentclass<0)
  {
    errors.studentclass="plese enter between 1 to 12"
  }else if(values.studentclass>12)
  {
    errors.studentclass="plese enter between 1 to 12"
  }

  if(!values.score)
  {
    errors.score="score is reqired"
  }else if(values.score<0)
  {
    errors.score="plese enter between 1 to 100"
  }
  else if(values.score>100)
  {
    errors.score="plese enter between 1 to 100"
  }

  return errors;
 }

  return (
    <>
      <div className="addStudent-main-div">
      <div className="addStudent-div">
  
        <h3>Add Student</h3>
        <hr className="form-hr" />
        <form onSubmit={e=>onSubmitFun(e)}>
          <div className="form-lable">
            <label htmlFor="studentName">Student Name*</label>
            <input
              name="name"
              type="text"
              onChange={e=>onInputChange(e)}
              value={name}
            />
          </div>
          <p className='error-msg'>{formError.name}</p>
          <div className="form-lable">
            <label htmlFor="studentclass">Class*</label>
            <input
              name="studentclass"
              type="number"
              onChange={e=>onInputChange(e)}
              value={studentclass}
            />
          </div>
          {
            formError.studentclass?<p className='error-msg'>{formError.studentclass}</p>:<p className='warning-msg'>please input values between 1 to 12</p>
          }
          <div className="form-lable">
            <label htmlFor="score">Score*</label>
            <input
              name="score"
              type="number"
              onChange={e=>onInputChange(e)}
              value={score}
            />
          </div>
          {
            formError.score?<p className='error-msg'>{formError.score}</p>:<p className='warning-msg'>please input values between 0 to 100</p>
          }
          {/* <p className='error-msg'>{formError.score}</p> */}
          <div className="form-lable">
            <label>Result</label>
            <div className="result-div">
              
                {
                  addStudent.score?
                  addStudent.score<60?<p className='result-fail-ed'>Failed</p>:<p className='result-pass-ed'>passed</p>:<p>--</p>
                }
              
            </div>
          </div>
          <div className="form-lable">
            <label>Cradit</label>
            <p>{
              addStudent.score?
                   addStudent.score>=70?<p className='exilent'>Excellent</p>:<p> {
                     addStudent.score>70 && addStudent.score <=60 ?<p>Average</p>:<p>{
                      addStudent.score<60?<p className='fail'>Poor</p>:<p className='average'>Average</p>
                     } </p>
                    }</p>:<p>--</p>
              }</p>
          </div>
          <hr className="form-hr" />
          <div className="add-cancle-btn">
              
            <button className="cancle-btn">
            <NavLink to='/student' className='active-link'>
              Cancle
              </NavLink>
            </button>
            
            <button className="confirm-btn" >
              
              Confirm
              
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddStudentForm