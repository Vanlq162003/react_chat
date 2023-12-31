import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './components/Context/AuthProvider';
import AppProvider from './components/Context/AppProvider';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';
function App() {
  return <>
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<ChatRoom />} />
          </Routes>
          <AddRoomModal/>
          <InviteMemberModal/>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
}

export default App;
