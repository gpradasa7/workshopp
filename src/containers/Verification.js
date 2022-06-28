import React from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { authentication } from '../Firebase/firebaseConfig';
import { actionVerifyCodeAsync } from '../Redux/actions/actionLogin';

authentication.useDeviceLanguage();

const Verification = () => {

    const dispatch = useDispatch();
    const { email } = useSelector(store => store.loginStore);


    const onValidateCode = ({ target }) => {
        if (target.value.length === 6) {
            dispatch(actionVerifyCodeAsync({ code: target.value, email }));
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