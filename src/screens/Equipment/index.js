import React from 'react';
import { connect } from 'react-redux'
import { some} from 'lodash'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';



import SwitchField from '../../components/SwitchField'

const mapStateToProps = state => {
    return {
      skills: state.skillScreen.skills
    }
}
  
const mapDispatchToProps = dispatch => {
      // assume we would handle updating all these possible tool switches
    return {
    }
}

const useStyles = makeStyles(theme => ({
    root:{
        minHeight: `85vh`,
    },
    equipmentText:{
        fontSize: `18px`,
        fontWeight: `bold`,
        textAlign: `center`,
    }
}));

function Equipment(props){

    const theme = useTheme();
    const classes = useStyles();

    const anySkills = () => {
        if(some(props.skills,(skill) => skill.skilled)){
            return true
        } else 
        return false
    }

    const renderEmptyState = () =>{
        return (
            <div className={classes.root}>
                <Typography className={classes.equipmentText}>
                    You currently have no skills
                    <br/>
                    to add equipment under.
                </Typography>
                <br/>
                <Typography className={classes.equipmentText}>
                    Please go back to the skills tab
                    <br/>
                    to add some of your skills
                    <br/>
                    and interests
                </Typography>
            </div>
        )
    }

    const renderGeneralLaborTools = () =>{
        return (
            <>
                <Typography>General Labor Items</Typography>
                <SwitchField label={`Steel Toed Boots`}/>
                <SwitchField label={`Hard Hat`}/>
                <SwitchField label={`Safety Vest`}/>
                <SwitchField label={`Eye Protection`}/>
                <SwitchField label={`Gloves`}/>
            </>
        )
    }

    return (
        <div className={classes.root}>
            {anySkills() ? null : renderEmptyState()}
            {props.skills.generalLabor.skilled ? renderGeneralLaborTools(): null}
        </div>
    )
}


const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Equipment)

export default connectedComponent
