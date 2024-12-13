import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import ProtectedRoute from './component/ProtectedRoute';

const App = () => {

  return (
    <Router>
      <Routes>
        
        {/*  protected routes */}
        <Route path='/' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />

        {/* public route */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App