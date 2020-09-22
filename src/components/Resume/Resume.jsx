import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';



function Resume({ cv }) {

  let craftAcademyName,
    craftAcademyPeriod,
    craftAcademyInfo,
    universityName,
    universityPeriod,
    universityInfo,
    highSchoolName,
    highSchoolPeriod,
    collegeName,
    collegeInfo,
    collegePeriod;
  
  if (cv) {
    console.log(cv.education.highSchool.name)
    craftAcademyName = cv.education.CraftAcademy.name
    craftAcademyPeriod = cv.education.CraftAcademy.period
    craftAcademyInfo = cv.education.CraftAcademy.info
    universityName = cv.education.university.name
    universityPeriod = cv.education.university.period
    universityInfo = cv.education.university.info
    collegeName = cv.education.PortmoreCommunityCollege.name
    collegeInfo = cv.education.PortmoreCommunityCollege.info
    collegePeriod = cv.education.PortmoreCommunityCollege.period
    highSchoolName = cv.education.highSchool.name
    highSchoolPeriod = cv.education.highSchool.period
  }

  return (
    <div className='resume__heading'>
      <h1 className='header__text'>Resume</h1>
      <div className="education__history">
        <React.Fragment>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <div className="period">
                  <Typography color="textSecondary">{craftAcademyPeriod}</Typography>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="school">
                  <Typography>{craftAcademyName}</Typography>
                </div>
                <p>{craftAcademyInfo}</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <div className="period">
                <Typography color="textSecondary">{universityPeriod}</Typography>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="school">
                  <Typography>{universityName}</Typography>
                </div>
                <p>{universityInfo}</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">{collegePeriod}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="school">
                <Typography>{collegeName}</Typography>
                </div>
                <p>{collegeInfo}</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">{highSchoolPeriod}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="school">
                <Typography>{highSchoolName}</Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </React.Fragment>
      </div>
    </div>
  )
}

export default Resume
