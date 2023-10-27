import React, {useState } from 'react'
import sample from './sampleimg.jpeg'
import  './ImageGenerator.css';
const ImageGenerator = () => {
    const [imageurl,setimageurl]=useState("/");
    const [value,setValue]=useState("");
    const HandleValue=(e)=>{
    setValue(e.target.value);
    }
    const Generateimage= async()=>{
     if(value==="")
     {
        return 0;
     }
     const response = await fetch(
          "https://api.openai.com/v1/images/generations",
          {
            method:"POST",
            headers:{
              "Content-Type":"application/json",
              Authorization:
              "",
              "User-Agent":"Chrome",
            },
            body:JSON.stringify({
             prompt:`${value}`,
             n:1,
             "size": "512x512",
            }),
          }

     );
     const res=await response.json();
     const array=res.data;
     setimageurl(array[0].url)
        }
  return (
    <div className='image-gene'>
    <div className='header'>AI TEXT TO IMAGE <span>GENERATOR</span></div>
    <div className='img-loading'>
        <div className='image'>
            <img src={imageurl==="/"?sample:imageurl} alt=""/>
        </div>
    </div>
    <div className="search-box">
    <input type='text' onChange={HandleValue} value={value} className='search-text' placeholder='Describe in words which picture you want to see'/>
    <div className="generatebtn" onClick={()=>(Generateimage())}>
        Generate Image
        </div>  
    </div>
    </div>
  )
}

export default ImageGenerator;