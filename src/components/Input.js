import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { FiSearch } from "react-icons/fi";
import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { ApiService } from '../services/ApiService';
import { apiActions } from '../actions/apiActions';

import { useNavigate } from "react-router-dom";

function Inputs () {
    
  const dispatch = useDispatch();
  const api = useSelector(state => state.apiSubmission.apiData);
  const navigate = useNavigate();

  const [userInput, setUserInput ] = useState()


  const handleOnChange = (e) => {
    setUserInput(e.target.value);


  }

  useEffect(()=> {
    if(api != undefined) {
      let data = JSON.parse(api)["success"]["result"]
      let newData = data.map(item=> {
        return {
          name:item.name,
          spacesTotal:item.spacesTotal,
          address: item.navigationAddress,
          occupancy:item.occupany,
          photos: item.photos
        }
      })
      console.log(`New item ${newData[0].name}`)
    }
      

  }, [])

 

  const submission = () => {

    dispatch(apiActions.apiSubmission(userInput, navigate))
    
  }

    return (
      <div className = "inner-form">
        
        <input onChange = {handleOnChange} type="text" id="ip2" placeholder="Type in your current location to find parking spaces near you" />
        <button onClick = {submission} className = "icon">  <FiSearch className = "SearchIcon" /></button>
      
      
      </div>

    )
}




export default Inputs;
