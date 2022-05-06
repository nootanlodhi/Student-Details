import React,{useEffect, useState} from 'react'
import './allForms.css'
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './allForms.css'
import axios from 'axios';

const EditForm = () => {

  let {id}=useParams();

  let navigate=useNavigate();

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
 }
 useEffect(()=>{
   loadStudent();
 },[])

 const onSubmitFun= async(e)=>{
   e.preventDefault();
   setFormError(validate(addStudent));
   setIsSubmit(true);
  //  await axios.put(`http://localhost:3005/students/${id}`,addStudent);
  // //  console.log('http://localhost:3005/students');
  //  navigate('./student')
 }

 const loadStudent=async()=>{
   const result= await axios.get(`http://localhost:3005/students/${id}`);
   setAddStudent(result.data);
 }

 const fun=async()=>{
  await axios.put(`http://localhost:3005/students/${id}`,addStudent);
  //  console.log('http://localhost:3005/students');
   navigate('/student')
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
        {/* {!show ? <h3>Edit Student</h3> : <h3>Add Student</h3>} */}
        <h3>Edit Student</h3>
        <hr className="form-hr" />
        <form action="" onSubmit={e=>onSubmitFun(e)}>
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
          <div className="form-lable">
            <label>Result</label>
            <div className="result-div">
              <p>
                {
                  addStudent.score?
                  addStudent.score<60?<p className='result-fail-ed'>Failed</p>:<p className='result-pass-ed'>passed</p>:<p>--</p>
                }
              </p>
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
            
            <button className="confirm-btn" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default EditForm