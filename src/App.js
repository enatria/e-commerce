import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Routes } from './routes';

const Layout = React.lazy(() => import('./Layout'));
// Custom Themes Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#345B63',
      light: '#d4ecdd',
      dark: '#112031',
      contrastText: '#fff',
    },
    secondary: {
      main: '#152D35',
    },
    info: {
      main: '#e6fceeee',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 200,
    fontWeightSemiBold: 400,
    fontWeightBold: 600,
    h1:{
      fontSize: 35,
      color:'#112031',
    },
    h5 : {
      fontSize: 23,
      color:'#152D35',
    },
    span : {
      fontSize: 15,
      color:'#345B63',
    }
  },
});

const App = function () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {
              Routes.map((route) => {
                const { component: Component, path, exact } = route;
                return (
                  <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={(props) => (
                      <Layout>
                        <Component {...props} />
                      </Layout>
                    )}
                  />
                );
              })
            }
          </Switch>
        </Suspense>
      </Router>
      gfg
    </ThemeProvider>
  );
};

export default App;
