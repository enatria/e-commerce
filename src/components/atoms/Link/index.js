import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import MuiLink from '@mui/material/Link'

function Link(props) {
    return (
        <RouteLink style={{textDecoration: 'none', fontSize:18, fontWeight:500}} to={props.href}>
            <MuiLink underline="none" color="primary">
                {props.children}
            </MuiLink>
        </RouteLink>
    )
}

Link.defaultProps = {
    href: '/'
}

export default Link
