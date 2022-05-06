import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { BrowserRouter, NavLink, Outlet } from 'react-router-dom';
import AddStudentForm from '../forms/AddStudentForm';
import StudentPageRecord from '../forms/StudentPageRecord';

const StudentPage = () => {
  return (
    <>
       <div className="studentInfo-main">
      <div className="first-div">
        <p>Students</p>
        <NavLink to='/student/add'>
        <button>
          <div className="add-div">
            <IoIosAdd className="add-icon" /> ADD
          </div>
        </button>
        </NavLink>
      </div>
      <div className="second-div">
        <StudentPageRecord/>
        <Outlet/>
      </div>
      <div className="third-div"></div>
    </div>
    </>
  )
}

export default StudentPage