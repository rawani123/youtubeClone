import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Context} from '../context/contextApi'
import { useEffect } from 'react';
import { fetchDataFromAPi } from '../utils/api';
import LeftNav from "./LeftNav"
import SearchResultVideoCard from "./SearchResultVideoCard"



const searchResult = () => {
  const [result,setResult]=useState();
  const {searchQuery}=useParams();
  const {setLoading}=useContext(Context);

  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h")
   fetchSearchResult() 
  },[searchQuery])

  const fetchSearchResult=()=>{
    setLoading(true);
    fetchDataFromAPi(`search/?q=${searchQuery}`).then((res)=>{
       console.log(res);
       setResult(res?.contents);
       setLoading(false);
    })
  }

  return (
    <div className='flex flex-row h-[calc(100%-56px)] '>
      <LeftNav/>
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 gap-2 p-5">
            
          </div>
        </div>
    </div>
  )
}

export default searchResult
