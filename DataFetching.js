import React, {useState,useEffect}from 'react';
import axios from 'axios';
import { Card ,Button} from 'react-bootstrap';


function DataFetching (){
    
    const [datas,setDatas]=useState([])


    const fetchingApi=()=>{
        
      

        axios.get('https://api.openbrewerydb.org/breweries')
        .then(res=>{
            console.log(res)
            setDatas(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }
  
    return (
        <div>
            <button onClick={fetchingApi} >Fetch</button>
            <button onClick={()=>{setDatas([])}}>Clear</button>
          
<ul>
    {datas.map(data=>(
        
        <Card style={{ width: '18rem' }}>
       
        <Card.Body>
          <Card.Title>ID: {data.id} <br/><hr/>NAME: {data.name} <br/><hr/>BREWER_TYPE:{data.brewery_type} <br/><hr/>
           STREET:{data.street} <br/><hr/></Card.Title>
         
        
        </Card.Body>
      </Card>
        
        
    ))}
</ul>
        </div>
    )
}

export default DataFetching