import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Toaster} from 'react-hot-toast'
import { Route,  Routes } from 'react-router-dom'
import LoginLanding from './pages/LoginLanding'
import Setting from './pages/Setting'
import Payslips from './pages/Payslips'
import Leave from './pages/Leave' 
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'
const App = () => {
  return (
    <>
      <ToastContainer />
      <Toaster />
      <Routes>
        <Route path='/login' element={<LoginLanding />} />
        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/payslips' element={<Payslips />} />
          <Route path='/leave' element={<Leave />} />
        </Route>
        <Route path='/print/payslips/:id' element={<PrintPayslips />} />
        <Route path='*' element={<Navigate to='/dashboard' replace />} />
      </Routes>
    </>
  )
}

export default App