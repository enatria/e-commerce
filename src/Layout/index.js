import React from 'react'
import { NavBar } from '../components/molecules';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

Layout.propTypes = {
    children : PropTypes.node
}

export default Layout
