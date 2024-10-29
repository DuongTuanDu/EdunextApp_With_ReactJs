import SideMenu from "../components/SideMenu"
import "./Css/SlotDetail.css"
import {
    Container,
    Link,
    Breadcrumbs,
    Typography,
    Grid,
    List,
    ListItemButton,
    ListItemAvatar,
    Avatar,
    Box,
    Tab,
    Button
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageIcon from '@mui/icons-material/Image';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import AvatarLogo from '../image/avatar.png'


function StudentItem() {
    return (
        <div className="student-item">
            <div className="edu-collapsible" style={{ position: 'relative' }}>
                <div className="action-position"></div>
                <Paper elevation={0} className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAccordion-root css-av0tg4">
                    <Accordion square className="MuiAccordion-root">
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownIcon />}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                            className="MuiButtonBase-root MuiAccordionSummary-root"
                        >
                            <div className="MuiAccordionSummary-content css-1n11r91">
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <div className="row">
                                            <div className="col-12">
                                                <Typography variant="body2" className="ms-2 me-1" value="Nguyễn Quang Thuận Thành">Nguyễn Quang Thuận Thành</Typography>
                                            </div>
                                            <div className="col-12">
                                                <Typography variant="body2" className="ms-2 me-1 color-italic">thanhnqthe150520@fpt.edu.vn</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3} className="element-center user-online-status">
                                        <div className="dot offline"></div>
                                        <Typography variant="body2" className="text-semibold ms-2 me-5 gray-color" value="Offline">Offline</Typography>
                                    </Grid>
                                    <Grid item xs={3} className="student-item__actions"></Grid>
                                </Grid>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3">
                            <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb">
                                    <div id="panel1d-content" role="region" className="MuiAccordion-region">
                                        <AccordionDetails className="MuiAccordionDetails-root css-7avtwz">
                                            <div className="student-item__content">
                                                <div className="individual-pass-detail" style={{ marginLeft: 55 }}>
                                                    <div className="individual-row">
                                                        <span className="left"><i className="las la-minus not-pass"></i><span className="ms-1">View question</span></span>
                                                    </div>
                                                    <div className="individual-row">
                                                        <span className="left"><i className="las la-minus not-pass"></i><span className="ms-1">No. of comments posted</span></span>
                                                        <span className="right text-lightbold">0/1</span>
                                                    </div>
                                                    <div className="individual-row">
                                                        <span className="left"><i className="las la-minus not-pass"></i><span className="ms-1">No. of stars rated by others</span></span>
                                                        <span className="right text-lightbold">0/1</span>
                                                    </div>
                                                    <div className="individual-row">
                                                        <span className="left"><i className="las la-minus not-pass"></i><span className="ms-1">No. of votes</span></span>
                                                        <span className="right text-lightbold">0/1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            </div>
        </div>
    )
}

function CommentItem() {
    return (
        <div id="comments-container" class="wrap-comment-section jquery-comments">
            <div class="data-container" data-container="comments">
                <div id="comment-list" class="main">
                    <div>
                        <div id="comment-6686cce78148019cc4ab4736" class="comment parent-comment">
                            <div class="comment-wrapper">
                                <div class="wrap-user-avatar"><img src={AvatarLogo} alt="" class="user-avatar" style={{ width: '34px', height: '34px' }} /></div>
                                <div class="main-comment disable-reply">
                                    <div class="comment-header">
                                        <div class="comment-writer"></div>
                                        <div class="comment-user-info"><i class="fs-10">04-07-2024 23:07:49</i></div>
                                    </div>
                                    <div>
                                        <div class="wrapper">
                                            <div class="content" style={{ position: 'relative' }}>
                                                <div class="wrap-content">
                                                    <div class="styled">
                                                        <p>gRPC (gRPC Remote Procedure Call) is an open-source framework developed by Google for handling remote procedure calls. It allows services to communicate with each other easily and efficiently, using HTTP/2 for transport, Protocol Buffers (protobuf) for serialization, and providing features like authentication, load balancing, and more.</p>
                                                        <p>Benefits of gRPC</p>
                                                        <ol>
                                                            <li>Performance and Efficiency:
                                                                •	HTTP/2: gRPC uses HTTP/2, which provides features like multiplexing, header compression, and server push. This results in reduced latency and improved performance compared to HTTP/1.x.
                                                                •	Binary Protocol: Using Protocol Buffers for serialization, gRPC messages are smaller and faster to parse compared to JSON.
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="attachments">
                                                <div class="previews"></div>
                                                <div class="tags"></div>
                                            </div>
                                        </div>
                                        <div class="cmt-buttons">
                                            <div class="cmt-acts">
                                                <div class="actions"></div>
                                            </div>
                                            <span class="cmt-summary"><span class="cmt-sum-item vote-sumb"><i class="la la-star"></i><span class="vote-count">7</span></span></span>
                                        </div>
                                        <span title="Reply" class="reply-cmt" value="Reply">Reply</span><span class="vote-cmt ">Vote</span>
                                    </div>
                                </div>
                            </div>
                            <ul class="child-comments"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function AssignmentDetail() {
    const [data, setData] = useState([]);
    const [valueTab, setValueTab] = useState("1");
    const [expanded, setExpanded] = useState(true); // State to control accordion expansion
    const [listQuestion, setListQuestion] = useState([]);
    const [listAssignment, setListAssignment] = useState([]);

    const assignmentId = useParams().assignmentId;
    const slotId = useParams().slotId;

    const handleLoadQuestion = async () => {
        try {
            const response = await axios.get("/slots/" + slotId);
            //take the first question that has the same id as the questionId
            const data = response.data.assignments.filter(assignment => assignment.id === assignmentId)[0];
            console.log(data);
            setListQuestion(response.data.questions);
            setListAssignment(response.data.assignments);
            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAccordionChange = () => {
        setExpanded(!expanded); // Toggle accordion state
    };

    const handleChange = (event, newValue) => {
        setValueTab(newValue);
    };

    useEffect(() => {
        handleLoadQuestion();
    }, []);

    const save = (data) => {
        console.log(data);
    };

    const myTheme = createTheme({
        palette: {
            type: 'dark',
        },
    });


    return (
        <div>
            <div className="wrapper">
                <SideMenu />
                <div className="w-100 menu-height-dynamic">
                    <div className="site-main">
                        <div className="activity-details container">
                            <div>
                                <Breadcrumbs
                                    aria-label="breadcrumb" sx={{ color: "#000000" }}
                                >
                                    <Link
                                        underline="hover"
                                        sx={{ display: "flex", alignItems: "center" }}
                                        color="#000000"
                                        href="/"
                                    >
                                        Trang chủ
                                    </Link>
                                    <Link
                                        underline="hover"
                                        sx={{ display: "flex", alignItems: "center" }}
                                        color="#000000"
                                        href="/product"
                                    >
                                        Sản phẩm
                                    </Link>
                                </Breadcrumbs>

                                <div style={{ paddingTop: '10px' }}>
                                    <Typography variant="h5" gutterBottom>(Assignment) {data.text}</Typography>
                                </div>
                                <Grid container spacing={2} className="main-content-lesson row">
                                    <Grid item xs={12} md={7} lg={8} xl={8}>
                                        <div className="assignment-details-page">
                                            <div className="activity-content-title">
                                                <h3 className="fs-20">Content</h3>
                                                <hr style={{ marginBottom: '8px' }}></hr>
                                                <div className="styled"><p>{data.content}</p></div>
                                            </div>
                                        </div>

                                        <div>
                                            <Typography>
                                                <Box fontWeight="fontWeightBold">ADDITIONAL FILES</Box>
                                            </Typography>
                                            <Typography>
                                                <Box fontWeight="fontWeightBold">DUE DATE: 2023-09-05 23:00:00 (GMT+07)</Box>
                                            </Typography>
                                            <Typography>
                                                <Box fontWeight="fontWeightBold">SCORE (Điểm số của bạn): 0</Box>
                                            </Typography>


                                        </div>

                                        <hr style={{ marginBottom: '30px', marginTop: '50px' }}></hr>

                                        <div className="submit-for-student">
                                            <Grid container spacing={2} className="submit-overview">
                                                <Grid item xs={12} md={4} lg={4} xl={4}>
                                                    <div class="mg-b-10 content-assignment">
                                                        <div>
                                                            <span title="SUBMISSION STATUS" value="SUBMISSION STATUS" class="top text-lightbold">SUBMISSION STATUS</span>
                                                        </div>
                                                        <div>
                                                            <span title="Late" value="Late" class="fs-14 text-lightbold activity-state-label late">Late</span>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={4} lg={4} xl={4}>
                                                    <div class="mg-b-10 content-assignment">
                                                        <div>
                                                            <span title="SUBMISSION STATUS" value="SUBMISSION STATUS" class="top text-lightbold">SUBMISSION STATUS</span>
                                                        </div>
                                                        <div>
                                                            <span title="Late" value="Late" class="fs-14 text-lightbold activity-state-label late">Late</span>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={4} lg={4} xl={4}>
                                                    <div class="mg-b-10 content-assignment">
                                                        <div>
                                                            <span title="SUBMISSION STATUS" value="SUBMISSION STATUS" class="top text-lightbold">SUBMISSION STATUS</span>
                                                        </div>
                                                        <div className="text-ellipsis text-left">
                                                            <Button variant="contained" color="success" className="btn-submit">GET MY FILE</Button>
                                                        </div>
                                                    </div>
                                                </Grid>

                                            </Grid>

                                        </div>
                                    </Grid>

                                    <Grid item xs={12} md={5} lg={4} xl={4}>
                                        <div className="entry-lesson-tabs">
                                            <div className="wrap-lesson-tabs pd-20">
                                                <div className="list-activity-activityDetail pd-t-20 sidebar-block">
                                                    <h3>Table of contents</h3>
                                                </div>
                                                <List className="css-1ontqvh ">
                                                    <div className="">
                                                        <span className="fs-10"> QUESTION</span>
                                                    </div>

                                                    {listQuestion.map((question) => (
                                                        <a href={`/slots/${slotId}/question/${question.id}`} className="css-qs2q9j">
                                                            <ListItemButton className="css-qs2q9j" >
                                                                <ListItemAvatar>
                                                                    <Avatar>
                                                                        <ImageIcon />
                                                                    </Avatar>
                                                                </ListItemAvatar>

                                                                <Grid container spacing={0} className="">
                                                                    <Grid item xs={8} md={8} lg={8} xl={8} sm={8}>
                                                                        <span className="fs-10"> {question.text}</span>
                                                                    </Grid>
                                                                    <Grid item xs={3} md={3} lg={3} xl={3} sm={3}>
                                                                        <div className="activity-state-label on-going">
                                                                            <span className="fs-10"> {question.status}</span>
                                                                        </div>
                                                                    </Grid>
                                                                </Grid>
                                                            </ListItemButton>
                                                        </a>
                                                    ))}


                                                    <div className="">
                                                        <span className="fs-10"> ASSIGNMENT</span>
                                                    </div>
                                                    {listAssignment.map((assignment) => (
                                                        <a href={`/slots/${slotId}/assignments/${assignment.id}`} className="css-qs2q9j">
                                                            <ListItemButton className="css-qs2q9j" >
                                                                <ListItemAvatar>
                                                                    <Avatar>
                                                                        <ImageIcon />
                                                                    </Avatar>
                                                                </ListItemAvatar>

                                                                <Grid container spacing={0} className="">
                                                                    <Grid item xs={8} md={8} lg={8} xl={8} sm={8}>
                                                                        <span className="fs-10"> {assignment.text}</span>
                                                                    </Grid>
                                                                    <Grid item xs={3} md={3} lg={3} xl={3} sm={3}>
                                                                        <div className="activity-state-label on-going">
                                                                            <span className="fs-10"> {assignment.status}</span>
                                                                        </div>
                                                                    </Grid>
                                                                </Grid>
                                                            </ListItemButton>
                                                        </a>
                                                    ))
                                                    }


                                                </List>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}