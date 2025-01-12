//import all necessary modules
import React from 'react';
import {  Grid } from '@material-ui/core';
import './course/CourseList.css'
import './Css/Icon.css'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from '../components/SideMenu';


function CardItem({ }) {
    return (
        <Grid item md={3} xs={8} className="course-item" style={{ zIndex: '9999', marginBottom: '20px' }}>
            <div className='wrap-course-item'>
                <div className='course-info'>
                    <h3 class="course-title mg-b-15 fs-18">
                        <a href="#">
                            <span class="title">Học lập trình</span>
                        </a>
                    </h3>

                    <ul className='bottom-course-sum none-list'>
                        <li>
                            <i class="las la-chalkboard-teacher"></i>
                            <span title="SE1707-NET" className="text-ellipsis" value="SE1707-NET">SE1707-NET</span>
                        </li>
                        <li>
                            <i class="las la-user-circle"></i>
                            <span title="SE1707-NET" className="text-ellipsis" value="SE1707-NET">SE1707-NETda</span>
                        </li>
                        <li>
                            <i class="las la-id-card"></i>
                            <span title="SE1707-NET" className="text-ellipsis" value="SE1707-NET">SE1707-Nsdasdasdasd</span>
                        </li>
                    </ul>

                    <a class="view-detail text-decoration-none" title="Go to course">
                        <span title="Go to course" value="Go to course">Go to course</span>
                        <i class="las la-arrow-right"></i>
                    </a>
                </div>
            </div>
        </Grid>
    )
}


export default function SlotList() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <div className="wrapper">
                <SideMenu />

                <div className="main-content">
                    <div className='site-main' style={{ padding: '20px', flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='container'>
                            <div className='lesson-detail-tab edu-tabs'>
                                <TabContext value={value}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        textColor="primary"
                                        indicatorColor="primary"
                                        aria-label="secondary tabs example"
                                        className='edu-tabs-header'
                                    >
                                        <Tab value="course" label="Course" />
                                        <Tab value="project" label="Project" />
                                    </Tabs>
                                    <TabPanel value="course" style={{ padding: '0px' }}>
                                        <Grid container spacing={2}>
                                            <div className='list-course row' style={{ margin: 'auto' }}>
                                                <CardItem />
                                                <CardItem />
                                                <CardItem />
                                                <CardItem />
                                            </div>
                                        </Grid>
                                    </TabPanel>
                                </TabContext>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
};