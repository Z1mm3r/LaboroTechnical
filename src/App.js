import React from 'react';
import './App.css';
import TabBar from './components/TabBar'
import NavBar from './components/NavBar'

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import store from './store'

import Equipment from './screens/Equipment'
import SkillScreen from './screens/SkillScreen'

const tabLabels = ["Skills","Equipment","Certifications"]
const panels = [(<SkillScreen/>),(<Equipment/>)]

function App() {
  return (
  <Provider store={store}>
      <NavBar/>
      <TabBar 
        tabLabels={tabLabels} 
        panels={panels}
      />
  </Provider>
  );
}

export default App;
