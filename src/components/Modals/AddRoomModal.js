import React, { useContext } from 'react'
import AppProvider, { AppContext } from '../Context/AppProvider';
import { useForm } from 'antd/es/form/Form';
import { Form, Input, Modal } from 'antd';
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../Context/AuthProvider';

const AddRoomModal = () => {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
    const { user: { uid } } = useContext(AuthContext)
    const [form] = Form.useForm()
    const handleOk = () => {
        // handle logic
        // add new room to firestore
        addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });
        console.log({ formData: form.getFieldValue() })

        // reset form value
        form.resetFields();


        setIsAddRoomVisible(false);
    };

    const handleCancel = () => {
        // reset form value
        // form.resetFields();

        setIsAddRoomVisible(false);
    };

    return (
        <div>
            <Modal
                title='Tạp Phòng'
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout='vertical'>
                    <Form.Item label='Tên phòng' name='name'>
                        <Input placeholder='Nhập tên phòng' />
                    </Form.Item>
                    <Form.Item label='Mô tả' name='description'>
                        <Input.TextArea placeholder='Nhập mô tả' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddRoomModal