import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Content from './Content'
import Ingreso from './Ingreso'
import Consulta from './Consulta'
import Infor from './Infor'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faFlipboard} from "@fortawesome/free-brands-svg-icons";
import {faChartBar} from "@fortawesome/free-solid-svg-icons";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";


const Main = () => (
   
  <Tabs>
    <TabList>
    <Tab><FontAwesomeIcon icon={faArrowLeft}/></Tab>
     <Tab><FontAwesomeIcon icon={faHome}/></Tab>
      <Tab><FontAwesomeIcon icon={faFlipboard}/></Tab>
      <Tab><FontAwesomeIcon icon={faChartBar}/></Tab> 
      <Tab><FontAwesomeIcon icon={faInfoCircle}/></Tab>
    
    </TabList>

    <TabPanel>
        <Content/>
    </TabPanel>
    <TabPanel>
        <Content/>
    </TabPanel>
    <TabPanel>
        <Ingreso/>
    </TabPanel>
    <TabPanel>
        <Consulta/>
    </TabPanel>
    <TabPanel>
        <Infor/>
    </TabPanel>
  </Tabs>
);

export default Main;