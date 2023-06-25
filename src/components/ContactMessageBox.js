//? REACT
import React, { useState } from 'react'

//? AXIOS
import axios from 'axios';

//? MATERIAL UI
import { Button, FormControl, TextField } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

//? FUNCTIONS
import emailValidator from '../validator/verifyEmail';

let payload = {};

const ContactMessageBox = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFail, setShowFail] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    
    const handleMessageChange = (e) => {
        setMessageError(false);
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
        if(emailError || email === ''){
            setEmailError(true);
            setEmailHelperText("Please enter a valid email address");
            return;
        }
        if(message === ''){
            setMessageError(true);
            return;
        }
        
        setMessageError(false);
        setLoading(true);
        setShowSuccess(false);
        setShowFail(false);

        payload.name = name;
        payload.email = email;
        payload.message = message;

        //! try doing local IPAddress:5000 (5000 or whatever port server.js is running on) in place of localhost
        //! make sure `server.js` is running on PM2
        try {
            await axios.post(process.env.REACT_APP_WEB_URL, payload);
            // const response = await axios.post('http://localhost:50000/', payload);
            // const result = response.data.result;
            // console.log('result', response);
            
            setLoading(false);
            setShowSuccess(true);
            setMessageError(false);
        } catch (error) {
            console.error("Error sending request:", error);
            setLoading(false);
            setShowSuccess(false);
            setShowFail(true);
            setMessageError(false);
        }
    };

  return (
    // backgroundImage: 'linear-gradient(45deg, #FFAA80, #FFC66E)'
    <>
        <form onSubmit={handleSubmit}>
            <FormControl sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid rgba(0, 0, 0, 0.5)',
                        backgroundColor: 'rgba(0, 12, 41, 0.5)',
                        backgroundSize: 'cover',
                        borderRadius: '3px',
                        paddingTop: 2,
                        paddingBottom: 2,
                        marginBottom: 10,
            }}>
                <div style={{width: '75%', textAlign: 'left', color: '#ffffff', fontSize: 20, marginBottom: 5}}>Your Name</div>
                <TextField
                    id="filled-required"
                    label="Name"
                    variant="filled"
                    onChange={handleNameChange}
                    sx={{
                        width: '75%',
                        backgroundColor: 'lightgray',
                        marginBottom: 2,
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                    }}
                />

                <div style={{width: '75%', textAlign: 'left', color: '#ffffff', fontSize: 20, marginBottom: 5}}>Email*</div>
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

                <div style={{width: '77%', textAlign: 'left', color: '#ffffff', fontSize: 20, marginBottom: 5, marginTop: 15}}>Message*</div>
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
                        borderColor: 'red',
                        borderWidth: messageError ? '2px' : '0px',
                    }}
                    placeholder={messageError ? "The message body cannot be blank" : "Hey, how's it going?"} />
                {
                    //* if loading is true show CircularProgress
                    //* else just show the button
                    loading ? 
                    <CircularProgress sx={{color: '#2c66ce'}} />
                    :
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{
                            textAlign: 'center',
                            width: '79%',
                            textTransform: 'none',
                            fontSize: '1.5em',
                            backgroundColor: 'rgb(109 33 79)',
                            '&:hover': {
                              backgroundColor: '#016d01',
                            }
                          }}
                    >
                            Submit
                    </Button>
                }
                {
                    showSuccess ?
                    <Alert onClose={() => {setShowSuccess(false)}} severity="success" sx={{marginTop: 2}}>Success! Thank you for your time. I will get back to you as soon as I can.</Alert>
                    :
                    null
                }
                {
                    showFail ?
                    <Alert onClose={() => {setShowFail(false)}} severity="error" sx={{marginTop: 2}}>There was a problem sending your message. Please try again later.</Alert>
                    :
                    null
                }
            <footer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'whitesmoke', marginTop: 12}}>Powered by <a href='https://www.brevo.com/' rel='noopener noreferrer' target='_blank'><img id='brevo' src='https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_2a64c49507c1e14f466e2e2c9559dd7f/sendinblue.png' alt='Brevo' style={{marginLeft: 15}} /></a></footer>
            </FormControl>
        </form>
    </>
  )
}

export default ContactMessageBox