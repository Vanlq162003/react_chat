import { UserAddOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Tooltip, Avatar, Form, Input, Alert } from 'antd';
import Message from './Message';
// import { AppContext } from '../../Context/AppProvider';
// import { addDocument } from '../../firebase/services';
// import { AuthContext } from '../../Context/AuthProvider';
// import useFirestore from '../../hooks/useFirestore'; 

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 660px;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export default function ChatWindow() {


    return (
        <WrapperStyled>

            <>
                <HeaderStyled>
                    <div className='header__info'>
                        <p className='header__title'>name</p>
                        <span className='header__description'>
                            mo ta
                        </span>
                    </div>
                    <ButtonGroupStyled>
                        <Button
                            icon={<UserAddOutlined />}
                            type='text'
                        >
                            Mời
                        </Button>
                        <Avatar.Group size='small' maxCount={2}>

                            <Tooltip>
                                <Avatar >
                                    aaa
                                </Avatar>
                            </Tooltip>

                        </Avatar.Group>
                    </ButtonGroupStyled>
                </HeaderStyled>
                <ContentStyled>
                    <MessageListStyled >

                        <Message aaaa />
                        <Message aaaa />
                        <Message aaaa />
                        <Message aaaa />

                        


                    </MessageListStyled>
                    <FormStyled >
                        <Form.Item name='message'>
                            <Input

                            />
                        </Form.Item>
                        <Button type='primary' >
                            Gửi
                        </Button>
                    </FormStyled>
                </ContentStyled>
            </>

            <Alert
                message='Hãy chọn phòng'
                type='info'
                showIcon
                style={{ margin: 5 }}
                closable
            />

        </WrapperStyled>
    );
}