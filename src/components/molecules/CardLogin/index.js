import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Button } from '../../atoms';
import { isAuthenticated, authenticate  } from '../../../config/authService';
import { setTokens } from '../../../config/tokenCreator';
import { start, success, error } from '../../../redux/authenticationSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        borderColor:'#fff'
    },
    input : {
        color:'#fff'
    }
});


  
const CardLogin = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const dispatch = useDispatch();

    

    if (isAuthenticated()) {
        history.push('/')
    }

    const classes = useStyles()

    const userData = { email: email, password: password };
        

    const handleSubmit = async (e) => {
        e.preventDefault();
            if(!email || !password){
                return alert("fill up all the form!");
        }
        
        try {
            const authData = await authenticate(
             userData
            );
                if (authData.status === true) {
                setTokens(authData.data);
                    dispatch(success(authData));
                    history.push('/')
                } else {
                    dispatch(error(authData))
                    alert(authData.data)
                }
        } catch (err) {
            dispatch(error("Something went wrong"));
        }
    }

    return (
        <Box sx={{
            backgroundColor: 'white',
            marginTop:3,
            display: "flex",
            flexDirection: 'column',
            width: '35vw',
            padding:5,
            justifyContent: 'space-between',
            alignItems:'center',
            borderRadius:4
        }}>
            <Box style={{
                marginBottom:25
            }}>
                <Typography variant="h5" color="primary.main" fontWeight="fontWeightBold">Login here!</Typography>
            </Box>
            <form  onSubmit={handleSubmit}>
                <TextField size="small" className={classes.root} id="outlined-basic" sx={{ marginBottom: 2, width: '100%' }} color='primary' label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField size="small" id="outlined-basic" sx={{ width: '100%' }} color="primary" label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Box  sx={{marginTop:3, width:'100%'}}>
                    <button type="submit">Login</button>
                </Box>
                </form>
        </Box>
    )
}

export default CardLogin
