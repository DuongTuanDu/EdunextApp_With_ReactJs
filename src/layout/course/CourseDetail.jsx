import React, { useEffect, useState } from 'react';
import { Typography, Button, Breadcrumb, Select, Pagination, Collapse, Card, Tag, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SideMenu from '../../components/SideMenu';
import '../Css/CourseDetail.css';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import AddSlotModal from '../../components/Modal/CreateSlotModal';
import AddQuestionModal from '../../components/Modal/CreateQuestionModal';

const { Text } = Typography;
const { Panel } = Collapse;
const { Option } = Select;

function SlotItem({ slot, handleLoadSlot }) {
    const [openModal, setOpenModal] = useState(false);
    const courseId = useParams().id;

    const handleAddQuestion = (e) => {
        e.preventDefault();
        handleOpenModal();
    }

    const handleAddAssignment = (e) => {
        e.preventDefault();
        console.log('add assignment')
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div className="session-item" style={{ marginBottom: '20px' }}>
            <Collapse 
                expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
                style={{ backgroundColor: '#f7f7f7', border: 'solid 1px #e4e4e4' }}
            >
                <Panel 
                    header={
                        <div style={{ padding: '16px 0' }}>
                            <div className="slot-header">
                                <div className="w-100">
                                    <Tag color="blue" style={{ fontSize: '14px', padding: '4px 12px' }}>
                                        Slot {slot.id}
                                    </Tag>
                                    <div style={{ marginTop: '8px' }}>
                                        <Text type="secondary">{slot.time || "10:00 07/05/2024 - 12:20 07/05/2024"}</Text>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                                    Course Introduction
                                </Text>
                                <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                                    Course Introduction
                                </Text>
                                <Text strong style={{ display: 'block', marginBottom: '8px' }}>
                                    - Project Group Module 01 -Chapter 01: Introduction to ASP.NET Core and RESTful Service
                                </Text>
                                <Text strong>
                                    -Chapter 01: Introduction to ASP.NET Core and RESTful Service
                                </Text>

                                {localStorage.getItem("role") === "teacher" && (
                                    <div style={{ marginTop: '16px' }}>
                                        <Button type="primary" style={{ marginRight: '10px' }} onClick={handleAddQuestion}>
                                            Add Question
                                        </Button>
                                        <Button type="primary" onClick={handleAddAssignment}>
                                            Add Assignment
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                    key="1"
                >
                    <Card title="QUESTIONS" bordered={false} style={{ marginBottom: '16px' }}>
                        {slot.questions.map((question, index) => (
                            <div key={index} style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                                <Row align="middle">
                                    <Col span={18}>
                                        <Link to={`/slots/${courseId}/question/${question.id}`}>
                                            <Text>{question.text}</Text>
                                        </Link>
                                    </Col>
                                    <Col span={6} style={{ textAlign: 'right' }}>
                                        <Tag color="success">Finished</Tag>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Card>

                    <Card title="ASSIGNMENTS" bordered={false}>
                        {slot.assignments.map((assignment, index) => (
                            <div key={index} style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
                                <Row align="middle">
                                    <Col span={18}>
                                        <Link to={`/slots/${courseId}/assignments/${assignment.id}`}>
                                            <Text>{assignment.text}</Text>
                                        </Link>
                                    </Col>
                                    <Col span={6} style={{ textAlign: 'right' }}>
                                        <Tag color="success">Finished</Tag>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Card>
                </Panel>
            </Collapse>

            <AddQuestionModal
                open={openModal}
                handleClose={handleCloseModal}
                slotId={slot.id}
                onCreate={handleLoadSlot}
            />
        </div>
    );
}

export default function CourseDetail() {
    const [slotList, setSlotList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const courseId = useParams().id;

    const handleLoadSlot = async () => {
        try {
            const response = await axios.get("/slots");
            const data = response.data.filter(slot => slot.course_id === courseId);
            setSlotList(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handleLoadSlot();
    }, []);

    const handleOpenModal = () => {
        setOpenModal(true);
        handleLoadSlot();
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        handleLoadSlot();
    };

    return (
        <div className="wrapper">
            <SideMenu />
            <div className="w-100 menu-height-dynamic">
                <div className="site-main" style={{ padding: '24px' }}>
                    <div className="course-detail">
                        <Breadcrumb
                            items={[
                                { title: <Link to="/">Trang chủ</Link> },
                                { title: <Link to="/product">Sản phẩm</Link> }
                            ]}
                            style={{ marginBottom: '24px' }}
                        />

                        <div style={{ marginBottom: '24px' }}>
                            <Row gutter={16} align="middle">
                                <Col>
                                    <Select
                                        style={{ width: 250 }}
                                        placeholder="Filter activities"
                                    >
                                        <Option value="">All Activities</Option>
                                        <Option value="hidden">Hidden</Option>
                                        <Option value="ongoing">On Going</Option>
                                        <Option value="assignment">Assignment or Feedback</Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <Select
                                        style={{ width: 115 }}
                                        placeholder="Jump Slot"
                                    >
                                        <Option value="">All Activities</Option>
                                        <Option value="hidden">Hidden</Option>
                                        <Option value="ongoing">On Going</Option>
                                        <Option value="assignment">Assignment or Feedback</Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <Select
                                        style={{ width: 300 }}
                                        placeholder="Class Name"
                                    >
                                        <Option value="">All Activities</Option>
                                        <Option value="se1707">SE1707-NET-APHL-SUMMER2024</Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <Button type="primary" size="middle">Assignments</Button>
                                </Col>
                                {localStorage.getItem("role") === "teacher" && (
                                    <Col>
                                        <Button type="primary" size="middle" onClick={handleOpenModal}>
                                            Add Slot
                                        </Button>
                                    </Col>
                                )}
                            </Row>

                            <div style={{ marginTop: '16px' }}>
                                <Text strong style={{ fontSize: '12px' }}>TEACHERS: </Text>
                                <Text strong style={{ fontSize: '12px' }}>MINHDL@FPT.EDU.VN</Text>
                            </div>
                        </div>

                        <div className="course-detail-content">
                            {slotList.map((slot, index) => (
                                <SlotItem key={index} slot={slot} handleLoadSlot={handleLoadSlot} />
                            ))}
                        </div>

                        <div style={{ 
                            position: 'sticky', 
                            bottom: '20px', 
                            backgroundColor: 'white', 
                            padding: '16px 0',
                            textAlign: 'center',
                            boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}>
                            <Pagination 
                                total={50} 
                                pageSize={5}
                                showSizeChanger={false}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <AddSlotModal
                open={openModal}
                handleClose={handleCloseModal}
                onCreate={handleLoadSlot}
                courseId={courseId}
            />
        </div>
    );
}