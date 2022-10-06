import React, {useState, useRef} from 'react';
import FormAttraction from './FormAttraction/FormAttraction';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import { Paper} from "@material-ui/core";
import useStyles from "./styles"

import './styles.css'
import FormAccomadation from './FormAccomadation/FormAccomadation';
import FormCar from './FormCar/FormCar';

const FormMain = () => {

const classes = useStyles();
const user = JSON.parse(localStorage.getItem('profile'));
const[addbar, setAddbar] = useState(true)
const[selected, setSelected] = useState("0")
const showSidebar = () => setAddbar(!addbar)

console.log('usssssssss',selected)

  return (
    <>
    <Paper className={classes.paperMain} elevation={12}>
    <div className="add-bar">
        {!addbar ? (
        <IoIcons.IoIosAddCircle onClick = {showSidebar}/>
        ): 
         < IoIcons.IoIosCloseCircleOutline onClick = {showSidebar}/>
}
    </div>

<Paper elevation={12} className={addbar ? 'add-menu active' : 'add-menu'} onClick={(e)=> setSelected(e.target.getAttribute('value'))}>
        <ol className="add-menu-items"  onClick={showSidebar} >
            <li className='add-text' value="1" >
            <i value="1"><MdIcons.MdCreateNewFolder value="1"/></i>
            <span className='span' value="1">Attractions</span>
            </li>

            <li className='add-text' value="2">
            <i value="2"><MdIcons.MdCreateNewFolder /></i>
            <span className='span' value="2">Transport</span>
            </li>

            <li className='add-text' value="3">
            <i value="3"><MdIcons.MdCreateNewFolder /></i>
            <span className='span' value="3">Accomedation</span>
            </li>
        </ol>
    </Paper>
    {
    selected ==="1" ? <FormAttraction /> :selected === '2' ? <FormCar /> : selected ==='3'? <FormAccomadation />: null
    }
</Paper>
</>
  )
}

export default FormMain