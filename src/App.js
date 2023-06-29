import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './components/Context/AuthProvider';

function App() {
  return <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<ChatRoom />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>
}

export default App;
