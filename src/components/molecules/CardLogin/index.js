import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Button } from '../../atoms';

const useStyles = makeStyles({
    root: {
        borderColor:'#fff'
    },
    input : {
        color:'#fff'
    }
});
  
const CardLogin = () => {
    const classes = useStyles()
    return (
        <Box sx={{
            backgroundColor: 'white',
            marginTop:3,
            display: "flex",
            flexDirection: 'column',
            width: '40vw',
            padding:5,
            justifyContent: 'space-between',
            alignItems:'center',
            borderRadius:4
        }}>
            <Box style={{
                translateX:'40%',
                marginBottom:25
            }}>
                <Typography variant="h5" color="primary.main" fontWeight="fontWeightBold">Login here!</Typography>
            </Box>
            <TextField size="small" className={classes.root} id="outlined-basic" sx={{marginBottom:2, width:'100%'}} color='primary' label="Email" variant="outlined" />
            <TextField size="small" id="outlined-basic" sx={{width:'100%'}} color="primary" label="Password" type="password" variant="outlined" />
            <Box  sx={{marginTop:3, width:'100%'}}>
            <Button size="large">Login</Button>
            </Box>
        </Box>
    )
}

export default CardLogin
