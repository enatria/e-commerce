import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

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
            display: "flex",
            flexDirection: 'column',
            width: '40vw',
            padding:5,
            justifyContent: 'space-between',
            alignItems:'center',
            borderRadius:2
        }}>
            <Box style={{
                translateX:'40%',
                marginBottom:25
            }}>
                <Typography variant="h5" color="primary.main" fontWeight="fontWeightBold">Login here!</Typography>
            </Box>
            <TextField className={classes.root} id="outlined-basic" sx={{marginBottom:5, width:'100%'}} color='primary' label="Email" variant="outlined" />
            <TextField id="outlined-basic" sx={{width:'100%'}} color="primary" label="Password" type="password" variant="outlined" />
        </Box>
    )
}

export default CardLogin
