// import React, { useState, useEffect } from 'react';
// import './Register.css'
// import { Grid,  TextField, Button, Avatar } from '@mui/material';
// import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
// import axios from 'axios';

// const Register = () => {

//   const btstyle = { margin: '8px 0', marginRight: '70px'};
//   const avatarStyle={backgroundColor: 'primary', marginLeft: 'auto', marginRight: '100px' }

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');


//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form submitted:', { username, email, password, confirmpassword });
//   };

      


//   return (

//     <form onSubmit={handleSubmit}>
//     <Grid className='register-container'>
//      <Avatar style={avatarStyle}> <PeopleAltSharpIcon/> </Avatar> 
//        <h1 style={{ marginRight: '60px' }}>Register</h1>
//         <div>
//           <TextField label="username" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />
//         </div>
//         <br></br>
//         <div>
//           <TextField label="email" placeholder="Enter Email" value={email} onChange={handleEmailChange} required />
//         </div>
//         <br></br>
//         <div>
//           <TextField label="password" placeholder="Enter password" type="password" value={password} onChange={handlePasswordChange} required />
//         </div>
//         <br></br>
//         <div>
//           <TextField label="confirm password" placeholder="Enter Confirm password" type="password" value={confirmpassword} onChange={handleConfirmPasswordChange} required />
//         </div>
//         <br></br>
//         <Button type="submit" color="primary" variant="contained" style={btstyle} onClick={handleSubmit}>Submit</Button>

//     </Grid>
//     </form>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import './Register.css';
import { Grid, TextField, Button, Avatar } from '@mui/material';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import axios from 'axios';

const Register = () => {
  const btstyle = { margin: '8px 0', marginRight: '70px' };
  const avatarStyle = { backgroundColor: 'primary', marginLeft: 'auto', marginRight: '100px' };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async () => {
   
    console.log('Form submitted:', { username, email, password, confirmpassword });

    try {
      const response = await axios.post('https://659526df04335332df820ff0.mockapi.io/author', {
        username,
        email,
        password,
        confirmpassword,
      });

      console.log('Server response:', response.data);
    } catch (error) {
      
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid className="register-container">
        <Avatar style={avatarStyle}>
          <PeopleAltSharpIcon />
        </Avatar>
        <h1 style={{ marginRight: '60px' }}>Register</h1>
        <div>
          <TextField label="username" placeholder="Enter Username" value={username} onChange={handleUsernameChange} required />
        </div>
        <br></br>
        <div>
          <TextField label="email" placeholder="Enter Email" value={email} onChange={handleEmailChange} required />
        </div>
        <br></br>
        <div>
          <TextField label="password" placeholder="Enter password" type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <br></br>
        <div>
          <TextField label="confirm password" placeholder="Enter Confirm password" type="password" value={confirmpassword} onChange={handleConfirmPasswordChange} required />
        </div>
        <br></br>
        <Button type="submit" color="primary" variant="contained" style={btstyle}>
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default Register;
