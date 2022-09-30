import React from 'react'
import PropTypes from 'prop-types'

//component
const Icon = (props) => {
    const { children, size, ...other } = props
    return (
        <i className='material-icons' {...other}>
            {children}
            <style jsx>
                {`
                    i{
                        font-size: ${size}em;
                        line-height: inherit;
                        vertical-align: middle;
                    }
                `}
            </style>
        </i>
    )
}
//Propstypes
Icon.propTypes = {
    size: PropTypes.number,
}
Icon.DefaultPropTypes = {
    size: 1,
}
export default Icon