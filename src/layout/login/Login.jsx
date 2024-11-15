import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, Row, Col, message, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const { Title, Text } = Typography;

export default function Login() {
    const [listUser, setListUser] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLoadAllUser = async () => {
        try {
            const response = await axios.get("/students");
            setListUser(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleLoadAllUser();
    }, []);

    const onFinish = async (values) => {
        setLoading(true);

        const { email, password } = values;

        if (!email || !password) {
            message.error("Please enter email and password");
            setLoading(false);
            return;
        }

        const user = listUser.find(user => user.email === email);
        if (!user) {
            message.error("Email not found");
            setLoading(false);
            return;
        }

        if (user.password !== password) {
            message.error("Password is incorrect");
            setLoading(false);
            return;
        }

        setTimeout(() => {
            localStorage.setItem("userId", user.id);
            localStorage.setItem("rollNumber", user.rollNumber);
            localStorage.setItem("role", "student");
            localStorage.setItem("email", user.email);

            message.success("Login successful");
            setLoading(false);
            navigate("/courses");
        }, 2000);
    };

    return (
        <Row justify="center" align="middle" style={{
            minHeight: '100vh',
            backgroundColor: '#f0f2f5',
            padding: '24px'
        }}>
            <Col xs={24} sm={24} md={16} lg={12} xl={8}>
                <Card bordered={false}>
                    <div className="grid place-items-center mb-8">
                        <img
                            src="https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6-1200x900.jpg"
                            style={{ width: '20%' }}
                            alt="Logo"
                        />
                        <Title level={4} style={{ marginTop: 16 }}>
                            The social constructive learning tool
                        </Title>
                    </div>

                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        size="large"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your Email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Email Address"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading}
                            >
                                {loading ? '' : 'Sign In'}
                            </Button>
                        </Form.Item>

                        <Row justify="space-between">
                            <Col>
                                <Link to="/login-teacher">Login for teacher</Link>
                            </Col>
                            <Col>
                                <Text>Don't have an account? </Text>
                                <Link to="/register">Sign up</Link>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}