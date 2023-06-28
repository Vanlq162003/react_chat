import React  from 'react'
import { Row, Col, Button, Typography } from 'antd';
import { auth } from '../../firebase/config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase/config';




const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider()

const Login = () => {
  const navigate = useNavigate();


    const handleLogin = () =>{
        auth.signInWithPopup(fbProvider)
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // Nếu đã xác thực thành công, điều hướng đến trang /home
          navigate('/home');
        }
      });
  
      return () => unsubscribe();
    }, [navigate]);
  return (
    <div>
    <Row justify='center' style={{ height: 800 }}>
      <Col span={8}>
        <Title style={{ textAlign: 'center' }} level={3}>
          React Chat
        </Title>
        <Button
          style={{ width: '100%', marginBottom: 5 }}
        //   onClick={() => handleLogin(googleProvider)}
        >
          Đăng nhập bằng Google
        </Button>
        <Button
          style={{ width: '100%' }}
          onClick={() => handleLogin(fbProvider)}
        >
          Đăng nhập bằng Facebook
        </Button>
      </Col>
    </Row>
  </div>
  )
}

export default Login