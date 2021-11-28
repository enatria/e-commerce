import React from 'react'
// import { color } from '../_global-conf'
import { Link as RouteLink } from 'react-router-dom'
import MuiButton from '@mui/material/Button'
import PropTypes from 'prop-types'

export const buttonVariant = {
    DEFAULT: "contained",
    OUTLINED: "outlined",
};

function Button(props) {
    if (props.blank && props.link) {
        return (
            <a href={props.link} target="_blank" rel="noreferrer">
            <MuiButton variant={props.variant} color="primary" onClick={props.onClick}>
                {props.children}
            </MuiButton>
            </a>
        )
    } else {
        return (
            <RouteLink 
            style={{textDecoration: 'none'}} 
            to={props.href} target={props.blank ? '_blank' : ''} >
                <MuiButton variant={props.variant} color="primary" onClick={props.onClick}>
                    {props.children}
                </MuiButton>
            </RouteLink>
        )
    }
}

Button.defaultProps = {
    variant: buttonVariant.DEFAULT,
    href: '/'
};

Button.propTypes = {
    href: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
