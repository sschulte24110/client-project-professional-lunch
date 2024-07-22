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
      color='danger'
      className={props.className}
      onClick={() => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
        alert('should not see this?');
      }}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
