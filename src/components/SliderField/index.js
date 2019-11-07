import React,  { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root:{
        height: `12vh`,
        marginTop: `8px`,
        marginBottom: `8px`,
    },
    checkbox:{
        color: `#2C7DFA`,
    },
    labelText:{
        display: 'inline-block',
        height: '100%',
        fontSize:'12px',
        fontWeight: `bold`,
        textAlign: `left`,
        padding: `10px`,
    },
    valueText:{
        color:'Grey',
        textAlign: `right`,
        padding: `10px`,
    },
    slider:{
        color: `#468DFB`,
        width: '80%',
    },
    switch:{
        textAlign: `right`,
    }
}));

function SliderField(props) {
    const {label,maxValue = 10,minValue = 1,stepSize = 1} = props;
    const theme = useTheme();
    const classes = useStyles(theme);
    const [checked, setChecked] = useState(false);
    const [sliderValue, setSliderValue] = useState(minValue);

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked)
    }

    const handleSliderChange = (obj,value) => {
        setSliderValue(value)
    }

    return (
    <Card className={classes.root}>
        <Grid container direction={'column'} alignItems={`center`} >
            <Grid container direction={'row'} alignItems={`center`} justify={`space-around`}>
                <Grid item xs>
                    <Checkbox checked={checked} onChange={handleCheckboxChange}/>
                    <Typography className={classes.labelText}>
                        {label}
                    </Typography>
                </Grid>
                <Grid item xs className={classes.switch}>
                    <Typography className={classes.labelText}>
                        {`My Experience: ${checked ? (`${sliderValue}  ${(sliderValue === maxValue) ? '+' : ''} `) : 0 } years`}
                    </Typography>
                </Grid>
            </Grid>
            <Slider 
                className={classes.slider} 
                disabled={!checked} 
                step={stepSize}
                min={minValue} 
                max={maxValue}
                onChange={handleSliderChange}
            />
        </Grid>
    </Card>
    );
  }

  export default  SliderField