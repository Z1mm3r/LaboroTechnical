import React from 'react';
import { connect } from 'react-redux'

import { makeStyles, useTheme } from '@material-ui/core/styles';

import helpPic from './images/skillPic.svg'
import SwitchField from '../../components/SwitchField'
import SliderField from '../../components/SliderField'
import { Typography, Slider } from '@material-ui/core';

import { setGeneralLabor } from '../../actions'

const useStyles = makeStyles(theme => ({
    image: {
        display: `block`,
        marginLeft: `auto`,
        marginRight: `auto`,
        width: `50%`,
    },
    skillsText:{
        fontSize: `18px`,
        fontWeight: `bold`,
        textAlign: `center`,
    }
}));

const mapStateToProps = state => {
    return {
      skills: state.skillScreen.skills
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      updateGeneralLabor: value => {
        dispatch(setGeneralLabor(value))
      }
    }
  }

const rendeGeneralLaborExperience = () =>{
    return (
        <>
            <SliderField label={'Construction'} valueText={'Years of experience'}/>
            <SliderField label={'Restoration'} valueText={'Years of experience'}/>
            <SliderField label={'Demolition'} valueText={'Years of experience'}/>
        </>
    )
}

function SkillScreen(props){
    const { skills,
    updateGeneralLabor } = props
    const theme = useTheme();
    const classes = useStyles();

    return (
        <>  
            <div>
                <img className={classes.image} src ={helpPic}/>
                <Typography className={classes.skillsText}>
                    Here you can select your
                    <br/>
                    interests and experiences  
                </Typography>
            </div>
            <SwitchField label={`Warehouse`}/>
            <SwitchField label={`Hospitality`}/>
            <SwitchField label={`General Labor`} handleChange={updateGeneralLabor} value={skills.generalLabor.skilled}/>
            {skills.generalLabor.skilled ? rendeGeneralLaborExperience(): null}
            <SwitchField label={`Office`}/>
            <SwitchField label={`IRelaunch`}/>
        </>
    )
}

const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillScreen)

export default connectedComponent