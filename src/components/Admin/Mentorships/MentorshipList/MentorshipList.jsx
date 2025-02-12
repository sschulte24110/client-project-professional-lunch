import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import MentorshipGrid from './MentorshipGrid';

export default function MentorshipList() {
  const dispatch = useDispatch();

  const mentorships = useSelector((store) => store.mentorships);
  console.log('Mentorships', mentorships);

  const [stripe, setStripe] = useState('odd');

  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_MENTORSHIPS'});
  }, [])

  return (
    <>
      {/* <Sheet>
        <Table stripe={stripe}>
          <thead>
            <tr>
              <th style={{width: '15%' }}>Mentor Name</th>
              <th style={{width: '15%' }}>Mentee Name</th>
              <th style={{width: '20%' }}>Mentor Email</th>
              <th style={{width: '20%' }}>Mentee Email</th>
              <th style={{width: '15%' }}>Mentee School</th>
              <th style={{width: '10%' }}>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {mentorships.map((mentorship) => (
            <tr key={mentorship.id}>
              <td>{mentorship.mentor_last_name}, {mentorship.mentor_first_name}</td>
              <td>{mentorship.mentee_last_name}, {mentorship.mentee_first_name}</td>
              <td>{mentorship.mentor_email}</td>
              <td>{mentorship.mentee_email}</td>
              <td>{mentorship.school}</td>
              <td>{mentorship.status}</td>
              
            </tr>
            ))}
          </tbody>
        </Table>
      </Sheet> */}
      <MentorshipGrid />
    </>
  )
}