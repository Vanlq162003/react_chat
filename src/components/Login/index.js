import React  from 'react'
import { Row, Col, Button, Typography } from 'antd';
import { auth, db } from '../../firebase/config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase/config';
import { addDocument } from '../../firebase/services';




const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider()

const Login = () => {


    const handleLogin = async () =>{
      const {additionalUserInfo , user} = await  auth.signInWithPopup(fbProvider)

      // console.log(additionalUserInfo.isNewUser)
      if(additionalUserInfo.isNewUser == true){
        addDocument('users' , {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.displayName,
          providerId: additionalUserInfo.providerId
        })
      }
    }

    
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