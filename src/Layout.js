import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin1/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin1/Content/ManageUser';
import DashBoard from './components/Admin1/Content/DashBoard';
import Login from './components/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register';
import ListQuizz from './components/User/ListQuizz';
import DetailQuiz from './components/User/DetailQuiz';
const NotFound = () => {
    return (
        <div className='container mt-3 alert alert-danger'>
            not found data with your current URL
        </div>
    )
}
const Layout = (props) => {
    console.log("LAYOUT RENDERED");
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<ListQuizz></ListQuizz>} />
                </Route>
                <Route path="/quiz/:id" element={<DetailQuiz></DetailQuiz>} />

                <Route path="/admins" element={<Admin />} >
                    <Route index element={<DashBoard />} />
                    <Route path='manage-users' element={<ManageUser />}></Route>
                </Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default Layout
