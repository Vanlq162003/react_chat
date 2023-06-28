import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Login />}   />
        <Route path ='/home' element={<ChatRoom />}   />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
