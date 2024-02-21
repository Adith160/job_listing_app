import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import JobDetailPage from './pages/JobDetailPage/JobDetailPage'
import JobEditPage from './pages/JobEditPage/JobEditPage'
import JobPost from './pages/JobPost/JobPostPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter >
      <Routes>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/job-details' element={<JobDetailPage />}/>
        <Route path='/job-edit/:id' element={<JobEditPage />}/>
        <Route path='/job-post' element={<JobPost />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
