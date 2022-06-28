import React from 'react'
import { Button, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import facebook from "../images/facebook.png"
import google from "../images/google.png"
import { authentication } from "../Firebase/firebaseConfig"
import { RecaptchaVerifier } from 'firebase/auth';
import { actionLoginAsync, FacebookLogin, GoogleLogin } from '../Redux/actions/actionLogin';
import { useDispatch} from 'react-redux';

authentication.useDeviceLanguage();

const Login = () => {

    const dispatch = useDispatch();

    const onFinish = (values) => {
        const { email, password } = values;
        generateCatch();
        dispatch(actionLoginAsync(email, password));

    };

    const generateCatch = () => {
        try {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptch-container', {
                'size': 'invisible',
                'callback': (response) => {
                    // console.log(response);
                }
            }, authentication);
        } catch (error) { }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: '#2BE7E8', border: 'none', borderRadius: '63px' }} block>
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <div id='recaptch-container'></div>
            <div style={{ margin: "auto", display: "flex", justifyContent: "center", flexDirection: 'column' }}>
                <div style={{ display: "flex", justifyContent: "center", marginLeft: '140px' }}>
                    <Button type="primary" htmlType="button" onClick={()=> dispatch(GoogleLogin())} style={{ backgroundColor: 'transparent', border: 'none' }}><img src={google} alt='google' /></Button>
                    <Button type="primary" htmlType="button"onClick={()=> dispatch(FacebookLogin())} style={{ backgroundColor: 'transparent', border: 'none' }}><img src={facebook} alt='facebook' /></Button>
                </div>
                <br></br>
                <p style={{ marginLeft: '140px' }}><Link to='/register'>Click here</Link> if you still don't have an account!</p>
            </div>
        </div>
    )
}

export default Login