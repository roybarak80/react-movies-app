import React from 'react';
//import { Link } from 'react-router-dom';

const AlbumsList = (props) => {

        const showlist = ({albumList}) => {
           if(albumList){
             return albumList.map((item, index)=>{
                 return(
                     <img key={index} alt ={index} src={`/images/albums/${item.cover}.jpg`}/>
                 )
             })
           }
            
        }
        
        return (
         
                 <div className ="albums_list">{showlist(props)}</div>
      
        )
    
    

}

export default AlbumsList;