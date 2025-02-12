import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MeetingItem from '../Meetings/MeetingItem';
import MyMentorsItem from '../Mentors/MyMentorsItem';
import { Button, Stack } from '@mui/joy';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MenteeHomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(store => store.user);
  const profile = useSelector(store => store.profileDetails);
  console.log('Profile', profile);
  const mentorships = useSelector(store => store.mentorships);
  console.log('Mentorships', mentorships);
  const myMentors = mentorships.filter(mentor => mentor.status === 'accepted');
  console.log('My Mentors', myMentors);
  const pending = mentorships.filter(mentor => mentor.status === 'pending');
  console.log('Pending', pending);
  const denied = mentorships.filter(mentor => mentor.status === 'Denied - not available at this time');
  console.log('Denied mentorships', denied);
  const meetings = useSelector(store => store.meetings);
  console.log('Meetings', meetings);
  const pendingMeetings = meetings.filter(meeting => meeting.meeting_status === 'Pending');
  console.log('Pending meetings', pendingMeetings);
  const acceptedMeetings = meetings.filter(meeting => meeting.meeting_status === 'Accepted');
  console.log('Accepted meetings', acceptedMeetings);

  useEffect(() => {
    dispatch({ type: 'FETCH_PROFILE_DETAILS', payload: user.id });
    dispatch({ type: 'FETCH_MENTORSHIPS' });
    dispatch({ type: 'FETCH_MEETINGS' });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h1 align='center'>Welcome, {profile?.profile?.first_name}!</h1>
      {mentorships.length > 0 ? 
      <>
        <h2 align='center'>My Mentors</h2>
        {myMentors.map(mentor => (
          <MyMentorsItem key={mentor.id} mentor={mentor} />
        ))}
      </>
      : 
      <>
        <h3 align='center'>You currently don't have any mentors. Find a mentor now!</h3>
        <Stack alignContent='center'>
          <Button color='neutral' sx={{ fontSize: '1rem'}} onClick={() => history.push('/available-mentors')}>Available Mentors</Button>
        </Stack>
      </>

      }
      {pending.length > 0 ? 
      <>
        <h3 align='center'>Pending Mentorships</h3>
        {pending.map((mentor) => (
          <MyMentorsItem key={mentor.id} mentor={mentor} />
        ))}
        </>
        : 
        <></>
      }
      {denied.length > 0 ? 
      <>
        <h3 align='center'>Denied Mentorships</h3>
        {denied.map((mentor) => (
          <MyMentorsItem key={mentor.id} mentor={mentor} />
        ))}
      </>
      :
      <></>
      }
      <h2 align='center'>Upcoming Meetings</h2>
      {meetings.length === 0 ? 
      <>
        <h3 align='center'>No upcoming meetings. Request a meeting with your mentor to keep learning!</h3> 
      </>
      : 
      <></>
      }
      {acceptedMeetings.length > 0 ? 
      <>
      {acceptedMeetings.map((meeting) => (
        <MeetingItem key={meeting.id} meeting={meeting} />
      ))}
      </>
      :
      <>
      </>
      }
      {pendingMeetings.length > 0 ? 
      <>
      <h3 align='center'>Pending Meetings</h3>
        {pendingMeetings.map((meeting) => (
          <MeetingItem key={meeting.id} meeting={meeting} />
        ))}
      </>
      :
      <></>
      }
    </div>
  );
}

// this allows us to use <App /> in index.js
export default MenteeHomePage;
