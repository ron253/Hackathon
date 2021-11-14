import { useEffect, useRef , useState} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useDispatch, useSelector} from 'react-redux';

import {Col, Row} from "react-bootstrap"

function Card() {
    const ref = useRef();
    const api = useSelector(state => state.apiSubmission.apiData);
    const [items, setItems] = useState([]);

    // useEffect(()=> {
    //     if(api) {
    //         let parkingData = api.result.map(item=> {
    //             return {
    //                 name:item.name,
    //                 spacesTotal:item.spacesTotal,
    //                 address: item.navigationAddress,
    //                 occupancy:item.occupany,
    //                 photos: item.photos
    //             }
    //         })
    //         console.log(`Card data ${parkingData}`)
    //     }

       
    // }, [])
    const chunk = (arr, chunkSize = 3, cache = []) => {
        const tmp = [...arr]
        if (chunkSize <= 0) return cache
        while (tmp.length) cache.push(tmp.splice(0, chunkSize))
        return cache
    }

    useEffect(()=> {
        if(api != undefined) {
            let apiData = JSON.parse(api)["success"]["result"]
            const productsChunks = chunk(apiData, 3);
            setItems(productsChunks)
        }

    }, [])
   

   
   
    return (
        <div align = "center" className="col-md-3">
        <h1  align = "center">All Available Parking Spaces Near Your Selected Location</h1>
        {
            items.map((productChunk, index) => {
                let count = 0;
                const productsCols = productChunk.map((item, index) => {
                    
                return (
                <Col  className="col-sm-4"> 
                <Flippy
className = "card"
flipOnHover={false} // default false
flipOnClick={true} // default false
flipDirection="horizontal" // horizontal or vertical
ref={ref} // to use toggle method like ref.curret.toggle()
// if you pass isFlipped prop component will be controlled component.
// and other props, which will go to div
style={{ width: '300px', height: '200px',  paddingLeft: '100px', paddingTop:"100px"}} /// these are optional style, it is not necessary
>

<FrontSide style={{ backgroundColor: '#C6EBBE', borderRadius:'25px'}} >
<img className="imgs" src = {item.photos[0].thumbnail}/>
<br />
<h5 className = "center">{item.name}</h5>
<h6 className = "center">{item.navigationAddress.street + ", " + 
item.navigationAddress.state + ", " + 
item.navigationAddress.postal + ", " 
+
item.navigationAddress.country
}</h6>
</FrontSide>
<BackSide style={{ backgroundColor: '#C6EBBE',  borderRadius:'25px'}}>
<h6> Total Parking Spaces : {item.spacesTotal} </h6>
<h6> Available Parking Spaces : {item.occupancy.available}</h6>
<h6> Probability of Securing A Parking Space : {item.occupancy.probability}%</h6>
</BackSide>
</Flippy> 
                </Col>
                  
                )
            });
            return <Row key={index}>{productsCols}</Row>
            })
        }
        </div>
       
      
    )
  }


export default Card;
