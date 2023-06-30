import React, { useEffect } from 'react';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';

import { auth, db } from '../../firebase/config';
import { AuthContext } from '../Context/AuthProvider';


// import { AppContext } from '../../Context/AppProvider';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username {
    color: white;
    margin-left: 5px;
  }
`;

export default function UserInfo() {
  useEffect(()=>{
    db.collection('users').onSnapshot((snapShot)=>{
      const data = snapShot.docs.map(doc=>({
        ...doc.data(),
        id:doc.id
      }))
      console.log({data,snapShot, docs:snapShot.docs})
    })
  })


  return (
    <WrapperStyled>
      <div>
        <Avatar >
          A
        </Avatar>
        <Typography.Text className='username'></Typography.Text>
      </div>
      <Button
        onClick={()=>auth.signOut()}
      >
        Đăng xuất
      </Button>
    </WrapperStyled>
  );
}