// import Job from './Job';
// import Wrapper from '../assets/wrappers/JobsContainer';
// import { useAllJobsContext } from '../pages/AllJobs';

// const JobsContainer  = () => {
  


//     const data = useAllJobsContext();
//     // const jobs = data.jobs;
//     // console.log(data,"jobsdd")

//     if (data && data.jobs) {
//         const arrayLength = data.jobs.length;
//         console.log(arrayLength); // This will output the length of the 'jobs' array
//       } else {
//         console.log("The 'jobs' property is not present in the data or is undefined.");
//       }

      

    // console.log(data,"jobsdd");
    // console.log(data.jobs.length,"length");
   


//    if (data.jobs.length === 0) {
//        return (
//            <Wrapper>
//                <h2>No jobs to display...</h2>
//            </Wrapper>
//        )
//    }


    // return(
    //     <div>
    //         ggg
    //     </div>
       

    //    <Wrapper>
    //     <h1>ffff</h1>
    //     <div className='jobs'>
    //         {data.jobs.map((job) => {
    //             return (
    //                 <Job key = {job._id} {...job} />
    //             )
    //         })}
    //     </div>
    //    </Wrapper>
//     )
// }

// export default JobsContainer;


import React from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllJobs';


const JobsContainer = () => {
  const data = useAllJobsContext();

  if (data && data.jobs) {
    const jobsArray = data.jobs;

    if (jobsArray.length === 0) {
      return <p>No jobs</p>;
    } else {
      return (
        <div>
          {/* Map and render your jobs here */}
          {jobsArray.map((job) => (
            <div key={job._id}>
              {/* Your job data rendering logic */}
              <p>{job.position}</p>
            </div>
          ))}
        </div>
      );
    }
  } else {
    return <p>The 'jobs' property is not present in the data or is undefined.</p>;
  }
};

export default JobsContainer;
