import React from 'react';
import { map } from 'lodash'
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';
import TabPanel from '../TabPanel'
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#F5F5F5',
    },
}));

function TabBar(props){

    const theme = useTheme();
    const classes = useStyles();
    

    const [activeTab, setActiveTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleChangeIndex = index => {
        setActiveTab(index);
    };

    const renderTabs = (labels) => {
        return labels && map(labels,renderTab)
    }

    const renderTab = (label) => {
        return (
            <MuiTab label={label} />
        )
    }

    const renderTabPanels = nodes => {
        return nodes && map(nodes, renderTabPanel)
    }

    const renderTabPanel = (node,index) => {
        return(
        <TabPanel value={activeTab} index={index} dir={theme.direction}>
            {node}
        </TabPanel>
        )
    }

    return(
    <div className={classes.root}>
        <MuiTabs  value={activeTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
        >
            {renderTabs(props.tabLabels)}
        </MuiTabs>
        <Divider/>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeTab}
        onChangeIndex={handleChangeIndex}
        >
            {renderTabPanels(props.panels)}
        </SwipeableViews>
    </div>
    )
}

export default TabBar