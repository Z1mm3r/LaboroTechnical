import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ButtonSwitch from './ButtonSwitch';


const useStyles = makeStyles(theme => ({
    root:{
        height: `8vh`,
        marginTop: `8px`,
        marginBottom: `8px`,
    },
    content:{
        height: `100%`,
        paddingLeft: `20px`,
        paddingRight: `20px`,
    },
    labelText:{
        fontSize: `14px`,
        fontWeight: `Bold`,
        lineHeight: `100%`,
        textAlign: `left`,
    },
    switch:{
        textAlign: `right`,
    }
}));

function SwitchField(props) {
    const {label, handleChange, value} = props;
    const theme = useTheme();
    const classes = useStyles();
    return (
    <Card  className={classes.root} square>
        <Grid container className={classes.content} alignItems={`center`} justify={`space-around`}>
            <Grid item xs>
                <Typography className={classes.labelText}>
                    {label}
                </Typography>
            </Grid>
            <Grid item xs className={classes.switch}>
                <ButtonSwitch checked={value} handleChange={!!handleChange && handleChange}/>
            </Grid>
        </Grid>
    </Card>
    );
  }

  export default  SwitchField