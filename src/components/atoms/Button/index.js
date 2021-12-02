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
            <MuiButton  sx={{textTransform:'none', fontSize:14, fontWeight:600, width:'100%'}} variant={props.variant} color="primary" onClick={props.onClick} size={props.size}>
                {props.children}
            </MuiButton>
            </a>
        )
    } else {
        return (
            <RouteLink 
            style={{textDecoration: 'none'}} 
            to={props.href} target={props.blank ? '_blank' : ''} >
                <MuiButton sx={{textTransform:'none', fontSize:14, fontWeight:600, width:'100%'}} variant={props.variant} color="primary" onClick={props.onClick} size={props.size}>
                    {props.children}
                </MuiButton>
            </RouteLink>
        )
    }
}

Button.defaultProps = {
    variant: buttonVariant.DEFAULT,
    size: 'small',
    href: '/'
};

Button.propTypes = {
    href: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
