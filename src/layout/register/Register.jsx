import React, { useState } from 'react';
import { Form, Input, Button, Select, Card, Typography, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, IdcardOutlined, BankOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Title } = Typography;
const { Option } = Select;

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Check if email already exists
      const endpoint = values.role === 'student' ? 'students' : 'teachers';
      const existingUsers = await axios.get(`/${endpoint}`);
      const emailExists = existingUsers.data.some(user => user.email === values.email);

      if (emailExists) {
        message.error('Email already exists');
        return;
      }

      // Prepare user data
      const userData = {
        id: Date.now().toString(),
        name: values.name,
        email: values.email,
        password: values.password,
      };

      if (values.role === 'student') {
        userData.rollNumber = values.rollNumber;
        userData.courses = [];
        userData.age = 18; // Default age
      } else {
        userData.department = values.department;
      }

      // Create new user
      await axios.post(`/${endpoint}`, userData);
      
      message.success('Registration successful');
      navigate(values.role === 'student' ? '/login' : '/login-teacher');
      
    } catch (error) {
      message.error('Registration failed. Please try again.');
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Col xs={24} sm={24} md={16} lg={12} xl={8}>
        <Card bordered={false} style={{ boxShadow: '0 1px 2px 0 rgba(0,0,0,0.03)' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <img 
              src="https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6-1200x900.jpg" 
              style={{ width: '20%' }} 
              alt="Logo" 
            />
            <Title level={4} style={{ marginTop: 16 }}>Sign up</Title>
          </div>

          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Full Name" 
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="Email Address" 
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The passwords do not match!');
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item
              name="role"
              rules={[{ required: true, message: 'Please select your role!' }]}
            >
              <Select placeholder="Select Role">
                <Option value="student">Student</Option>
                <Option value="teacher">Teacher</Option>
              </Select>
            </Form.Item>

            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) => prevValues.role !== currentValues.role}
            >
              {({ getFieldValue }) => 
                getFieldValue('role') === 'student' ? (
                  <Form.Item
                    name="rollNumber"
                    rules={[{ required: true, message: 'Please input your roll number!' }]}
                  >
                    <Input 
                      prefix={<IdcardOutlined />} 
                      placeholder="Roll Number" 
                    />
                  </Form.Item>
                ) : getFieldValue('role') === 'teacher' ? (
                  <Form.Item
                    name="department"
                    rules={[{ required: true, message: 'Please input your department!' }]}
                  >
                    <Input 
                      prefix={<BankOutlined />} 
                      placeholder="Department" 
                    />
                  </Form.Item>
                ) : null
              }
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Sign Up
              </Button>
            </Form.Item>

            <Row justify="center">
              <Col>
                Already have an account? <Button type="link" onClick={() => navigate('/login')} style={{ padding: 0 }}>Sign in</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}