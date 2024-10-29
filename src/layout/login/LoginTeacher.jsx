import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const { Title, Text } = Typography;

export default function SignInTeacher() {
    const [listUser, setListUser] = useState([]);
    const navigate = useNavigate();

    const handleLoadAllUser = async () => {
        try {
            const response = await axios.get("/teachers");
            setListUser(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleLoadAllUser();
    }, []);

    const onFinish = async (values) => {
        const { email, password } = values;
        
        if (!email || !password) {
            message.error("Please enter email and password");
            return;
        }

        const user = listUser.find(user => user.email === email);
        if (!user) {
            message.error("Email not found");
            return;
        }

        if (user.password !== password) {
            message.error("Password is incorrect");
            return;
        }

        localStorage.setItem("userId", user.id);
        localStorage.setItem("rollNumber", user.rollNumber);
        localStorage.setItem("role", "teacher");
        localStorage.setItem("email", user.email);
        
        message.success("Login successful");
        navigate("/courses");
    };

    return (
        <Row 
            justify="center" 
            align="middle" 
            style={{ 
                minHeight: '100vh',
                backgroundColor: '#f0f2f5',
                padding: '24px'
            }}
        >
            <Col xs={24} sm={24} md={16} lg={12} xl={8}>
                <Card 
                    bordered={false}
                    style={{
                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                        borderRadius: '8px',
                        padding: '24px 40px'
                    }}
                    hoverable
                >
                    <div style={{ textAlign: 'center', marginBottom: 32 }}>
                        <img 
                            src="https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6-1200x900.jpg"
                            style={{ 
                                width: '20%',
                                maxWidth: '250px',
                                marginBottom: '16px'
                            }} 
                            alt="Logo" 
                        />
                        <Title level={2} style={{ marginBottom: 8 }}>
                            Teacher Login
                        </Title>
                        <Text type="secondary" style={{ fontSize: '16px' }}>
                            Welcome back to your teaching portal
                        </Text>
                    </div>

                    <Form
                        name="login_teacher"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        size="large"
                        layout="vertical"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your Email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input 
                                prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Email Address"
                                size="large"
                                style={{ height: '45px', borderRadius: '6px' }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Password"
                                size="large"
                                style={{ height: '45px', borderRadius: '6px' }}
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
                                size="large"
                                style={{ 
                                    height: '45px',
                                    borderRadius: '6px',
                                    fontSize: '16px',
                                    boxShadow: '0 2px 0 rgba(0,0,0,0.045)'
                                }}
                            >
                                Sign In
                            </Button>
                        </Form.Item>

                        <Row 
                            justify="space-between" 
                            align="middle"
                            style={{ marginTop: '24px' }}
                        >
                            <Col>
                                <Link 
                                    to="/login"
                                    style={{ 
                                        color: '#1890ff',
                                        fontSize: '14px'
                                    }}
                                >
                                    Login for student
                                </Link>
                            </Col>
                            <Col>
                                <Text type="secondary" style={{ fontSize: '14px' }}>
                                    Don't have an account?{' '}
                                </Text>
                                <Link 
                                    to="/register"
                                    style={{ 
                                        color: '#1890ff',
                                        fontSize: '14px',
                                        fontWeight: 500
                                    }}
                                >
                                    Sign up
                                </Link>
                            </Col>
                        </Row>
                    </Form>

                    <div style={{ marginTop: '48px', textAlign: 'center' }}>
                        <Text type="secondary" style={{ fontSize: '14px' }}>
                            Copyright © {new Date().getFullYear()} EduNext. All rights reserved.
                        </Text>
                    </div>
                </Card>
            </Col>
        </Row>
    );
}