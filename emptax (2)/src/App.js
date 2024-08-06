import { Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import './css/App.css';
import HomePage from './components/HomePage';
import SignUp from './components/Signup';
import Login from './components/Login';
import TaxCalculator from './components/landingpage.jsx';
import SuperAdminForm from './components/SuperAdmin.jsx';
import TaxCalc from './components/TaxCalc.jsx';
import LoginF from './components/LoginF.jsx';
function App() {
  return (
    <div className="App">
      {/* <TaxCalculator/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage/>} />
        {/* <Route path='/signup' element={<SignUp/>}/> */}
        <Route path='/login' element={<LoginF/>}/>
        <Route path='/register' element={<SuperAdminForm/>}/>
        <Route path='/manage' element={<TaxCalc/>}/>
      </Routes>
      {/* <SimpleStepper/> */}
      {/* <AdminPage/> */}
      {/* <SuperAdminForm/> */}
    </div>
  );
}

export default App;
