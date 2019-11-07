import React from 'react'
import MuiButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch'
import lines from './images/lines.svg'



function ButtonSwitch(props) {
    const {checked, handleChange} = props

    const onChange = (event) =>{
        // if we dont have a callback defined lets not break the whole app
        handleChange && handleChange(event.target.checked)
    }

    return(
        <>
            <Switch checked={checked} onChange={onChange}>
            </Switch>
        </>
    )

}

export default ButtonSwitch