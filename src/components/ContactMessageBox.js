//? REACT
import React, { useEffect, useState } from 'react'

//? AXIOS
import axios from 'axios';

//? MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, FormControl, TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

//? FUNCTIONS
import emailValidator from '../validator/verifyEmail';

let payload = {};

const ContactMessageBox = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState("");
    const [message, setMessage] = useState("");

    const sendGETRequest = async () => {
        try {
          const response = await axios.post('http://localhost:5000/');
          const result = response.data.result;
          
          console.log('result', result);
        } catch (error) {
          console.error(error);
        }
      };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailValidator(e.target.value)) {
          setEmailError(false);
          setEmailHelperText("");
        } else {
          setEmailError(true);
          setEmailHelperText("Please enter a valid email address");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(emailError || email === '') return;
        payload.name = name;
        payload.email = email;
        payload.message = message;
        console.log(payload)
        alert("submitted");
    };

    useEffect(() => {
        console.log("this is message", message)
    }, [message])

  return (
    <>
        <form onSubmit={handleSubmit}>
            <FormControl sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid black', backgroundImage: 'linear-gradient(45deg, #FFAA80, #FFC66E)', borderRadius: '15px', paddingTop: 2, paddingBottom: 2}}>
                <TextField
                    id="filled-required"
                    label="Name"
                    variant="filled"
                    onChange={handleNameChange}
                    sx={{
                        width: '75%',
                        backgroundColor: 'lightgray',
                        marginBottom: 1,
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                    }}
                />
                <TextField
                    id="filled-required"
                    label="Email Address"
                    variant="filled"
                    onChange={handleEmailChange}
                    error={emailError}
                    helperText={emailHelperText}
                    sx={{
                        width: '75%',
                        backgroundColor: 'lightgray',
                        marginBottom: 1,
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                    }}
                />
                <TextareaAutosize
                    onChange={handleMessageChange}
                    style={{
                        resize: 'vertical',
                        minHeight: 150,
                        maxHeight: '1000px',
                        minWidth: '75%',
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                        borderBottomLeftRadius: '5px',
                        marginBottom: 10,
                        fontSize: '16px',
                        fontFamily: 'Arial, sans-serif',
                        padding: 10,
                    }}
                    placeholder="Your message here..." />

                <Button
                    type='submit'
                    variant='contained'
                    // onClick={sendGETRequest}
                    sx={{textAlign: 'center', width: '250px'}}
                    >
                        Send me a message
                </Button>
            </FormControl>
        </form>
    </>
  )
}

export default ContactMessageBox