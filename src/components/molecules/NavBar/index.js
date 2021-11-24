import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Brand from '../../atoms/Brand';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none !important',
  }
})


export default function Navbar() {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root} color="info">
        <Container>
          <Brand/>
          <Toolbar>
              <div className="nav-link">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                </Box>
              </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
