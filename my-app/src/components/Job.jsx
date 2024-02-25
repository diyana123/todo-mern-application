import React from 'react'
import {FaLocationArrow,FaBriefcase,FaCalendarAlt } from 'react-icons/fa';
import {Link,Form}  from 'react-router-dom';
import Wrapper from '../assets/wrappers/JobsContainer';
import JobInfo from './JobInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

const Job = ({_id,position,company,jobLocation,jobType,createdAt,jobStatus}) => {
  console.log(createdAt,"createdAt");
  return (
    <div>Job</div>
  )
}

export default Job