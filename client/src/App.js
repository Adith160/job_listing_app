import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import JobDetails from './pages/JobDetails/JobDetails'
import JobPost from './pages/JobPost/JobPostPage'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/job-details' element={<JobDetails />}/>
        <Route path='/job-post' element={<JobPost />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
