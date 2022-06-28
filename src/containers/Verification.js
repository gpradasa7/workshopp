import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { authentication } from '../Firebase/firebaseConfig';
import { actionUpdateUserInfoSync, actionVerifyCodeAsync } from '../Redux/actions/actionLogin';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

authentication.useDeviceLanguage();

const Verification = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { email, error: verificationError } = useSelector(store => store.loginStore);

    const onValidateCode = ({ target }) => {
        if (target.value.length === 6) {
            dispatch(actionVerifyCodeAsync({ code: target.value, email }));
        }
    }

    if (verificationError) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Error intentando enviar el codigo de verificación!."
        }).then(() => {
            dispatch(actionUpdateUserInfoSync({ error: undefined }));
        });
    } else {
        if (verificationError === false) {
            navigate('/home');
        }
    }

    return (
        <div style={{ width: 400, margin: "3em" }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onChange={onValidateCode}
                autoComplete="off"
            >
                <Form.Item
                    label="Code"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your code!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </div>
    )
}

export default Verification