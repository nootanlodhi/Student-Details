import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudentForm from './Component/forms/AddStudentForm';
import DeleteForm from './Component/forms/DeleteForm';
import EditForm from './Component/forms/EditForm';
import Courses from './Component/pages/Courses';
import Dashboard from './Component/pages/Dashboard';
import MainPage from './Component/pages/MainPage';
import StudentPage from './Component/pages/StudentPage';
import Sidebar from './Component/sidebar/Sidebar';

function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
         <Sidebar/>
         <Routes className='dashboard'>
            
              <Route index path='/' element={<Dashboard/>}></Route>
            
            <Route path='/course' element={<Courses/>}/>
            <Route path='/student' element={<StudentPage/>}>
            {/* <Route index path='/student/add' element={<AddStudentForm/>}/> */}
           <Route path='/student/edit/:id' element={<EditForm/>}/>
           <Route path='/student/delete/:id' element={<DeleteForm/>}/>
            </Route>
            <Route index path='/student/add' element={<AddStudentForm/>}/>
           {/* <Route path='/student/edit' element={<EditForm/>}/> */}
           {/* <Route path='/student/delete' element={<DeleteForm/>}/> */}
         </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
