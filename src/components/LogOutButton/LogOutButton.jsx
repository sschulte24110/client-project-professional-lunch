import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/joy/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      color='neutral'
      variant='outlined'
      className={props.className}
      onClick={() => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
      }}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
