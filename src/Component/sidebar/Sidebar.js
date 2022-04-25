import React from 'react'
import { VscBook } from 'react-icons/vsc';
import { IoIosPeople } from 'react-icons/io';
import { GrMultiple } from 'react-icons/gr';
import { MdWallpaper } from 'react-icons/md';
import { BiChalkboard } from 'react-icons/bi';
import { GiWifiRouter } from 'react-icons/gi';
import { RiDashboardLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className='sidebar-first'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9atvMb3uBV3xU3kSgIQBlPhcER_fU3hJIpQ&usqp=CAU'/>
        <h3>School Space</h3>
       </div>
       <hr className='sidebar-hr'/>
       <div className='sidebar-second'>
           <div className='second-first-div'>
           
               <div>
               <NavLink to='/dashboard' className='active-link items-table' style={({isActive})=>{
                 return{
                   backgroundColor: isActive ? 'rgb(204, 233, 242)' : '',
                   color: isActive ? 'rgb(0, 195, 255)':''
                 }
               }}>
               <RiDashboardLine/>
               {/* <NavLink to='/dashboard' className='active-link' style={({isActive})=>{
                 return{
                   backgroundColor: isActive ? 'rgb(204, 233, 242)' : ''
                 }
               }}> */}
               <p>Dashboard</p>
               </NavLink>
               </div>
               
               <div>
               <NavLink to='/course' className='active-link items-table' style={({isActive})=>{
                 return{
                   backgroundColor: isActive ? 'rgb(204, 233, 242)' : '',
                   color: isActive ? 'rgb(0, 195, 255)':''
                 }
               }}>
               <VscBook/>
               <p>
                 
                 Courses</p>
                 </NavLink>
               </div>
               <div>
               <NavLink  to='student' className='active-link items-table' style={({isActive})=>{
                 return{
                   backgroundColor: isActive ? 'rgb(204, 233, 242)' : '',
                   color: isActive ? 'rgb(0, 195, 255)':''
                 }
               }}>
               <IoIosPeople/>
               
               <p>Students</p>
               </NavLink>
               </div>
               <div className='items-table'>
               <GrMultiple/>
               <p>Exams</p>
               </div>
               <div className='items-table'>
               <MdWallpaper/>
               <p>Paper</p>
               </div>
               <div className='items-table'>
               <BiChalkboard/>
               <p>Notice Board</p>
               </div>
               <div className='items-table'>
               <GiWifiRouter/>
               <p>Live Classes</p>
               </div>
           </div>
           <div className='second-second-div'>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgN2Nov5Yw4BPAXCEbGcwi-l-mab5SAd3lEQ&usqp=CAU'/>
               <p className='name'>Nootan Lodhi</p>
               <p className='gmail'>witbybit@gmail.com</p>
               <button className='view-profile'>View Profile</button>
           </div>
       </div>
    </div>
  )
}

export default Sidebar