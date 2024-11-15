import React from 'react';
import '../layout/course/CourseList.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip
import { Link, useNavigate } from "react-router-dom";

export default function SideMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handle log out
    const handleLogout = async (e) => {
        try {
            localStorage.removeItem("userId");
            localStorage.removeItem("rollNumber");
            localStorage.removeItem("role");
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <aside style={{ width: '120px', float: 'left' }} className="">
            <div className="side-menu">
                <nav>
                    <ul className="ul-side-menu" style={{ padding: '0px' }}>
                        <div className="flex justify-center" style={{ width: '100%' }}>
                            <Link to="#" style={{ textDecoration: 'underline' }}>
                                <img
                                    src="https://inbaobigiay.vn/wp-content/uploads/2024/06/logo-fpt-vector-6-1200x900.jpg"
                                    style={{ width: '100%' }}
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <li>
                            <Link href="#" onClick={handleClick}>
                                <span>
                                    <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                        <Tooltip title="Account" arrow>
                                            <AccountCircleIcon style={{ fontSize: '1.5rem' }} />
                                        </Tooltip>
                                    </div>
                                </span>
                            </Link>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>{localStorage.getItem("email")}</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </li>
                        <li>
                            <Link to="/courses">
                                <span>
                                    <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                        <Tooltip title="Home" arrow>
                                            <HomeOutlinedIcon style={{ fontSize: '1.5rem' }} />
                                        </Tooltip>
                                    </div>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/assignments">
                                <span>
                                    <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                        <Tooltip title="Assignments" arrow>
                                            <AssignmentIcon style={{ fontSize: '1.5rem' }} />
                                        </Tooltip>
                                    </div>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/slots">
                                <span>
                                    <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                        <Tooltip title="Slots" arrow>
                                            <UpcomingIcon style={{ fontSize: '1.5rem' }} />
                                        </Tooltip>
                                    </div>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span>
                                    <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                        <Tooltip title="PDF" arrow>
                                            <PictureAsPdfIcon style={{ fontSize: '1.5rem' }} />
                                        </Tooltip>
                                    </div>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span>
                                    <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                        <Tooltip title="Support" arrow>
                                            <SupportAgentIcon style={{ fontSize: '1.5rem' }} />
                                        </Tooltip>
                                    </div>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span>
                                    <div className='logo-side-menu' style={{ textAlign: 'center', fontSize: '0.625rem' }}>
                                        <Tooltip title="Help" arrow>
                                            <LiveHelpIcon style={{ fontSize: '1.5rem' }} />
                                        </Tooltip>
                                    </div>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
