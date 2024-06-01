  import React,{useEffect} from 'react'

  import Card from '../../../../components/UIelements/Card';
  import Students from '../../../Images/students.avif';
  import Teachers from '../../../Images/Teachers.jpg';
  import classroom from '../../../Images/classroom.avif';
  import { Container } from 'react-bootstrap';
  import { getAllNotices } from '../../../Redux/noticerelated/noticeHandle';
  import {useDispatch, useSelector} from "react-redux";
  import SeeNotice from './noticerelated/SeeNotice';
  import { Grid,Paper } from '@mui/material';

  export default function AdminHome() {
    const dispatch=useDispatch();
    const {noticeList:notices,loading,error}=useSelector(state=>state.notice);

    useEffect(()=>{
      dispatch(getAllNotices());
    },[dispatch])
    return (
      <>
      <div className='adminhome'>
      
          <Container className='adminhomecol'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
            <Card className='adminhomecard'>
              <img src={Students} alt='students'/>
              <p>Total Students</p>
            </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
            <Card className='adminhomecard'>
              <img src={classroom} alt='classroom'/>
              <p>Total Classes</p>
            </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
            <Card className='adminhomecard'>
              <img src={Teachers} alt='Teachers'/>
              <p>Total Teachers</p>
            </Card>
            </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Paper>
              <SeeNotice notices={notices} loading={loading} error={error}/>
            </Paper>
          </Grid>
          </Grid>   
          </Container>
          
      </div>
      </>
    );
  }


