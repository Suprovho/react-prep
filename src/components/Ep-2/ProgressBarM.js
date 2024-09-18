import React, { useEffect, useState } from 'react'
import ProgressBar from './progressBar'

const ProgressBarM = () => {
  const[value,setValue]=useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
  const timer= setInterval(()=>{
      setValue((val)=>{
        const newVal = val + 1
        if (newVal > 100) {
          clearInterval(timer)
          return 100
        }
        return newVal
      });
   },100)
   return ()=>clearInterval(timer);
  },[])

  return (
    <div className='flex flex-col items-center gap-2 mt-4'>
        <span className='text-lg'>Progress Bar</span>
        <ProgressBar value={value} onComplete={() => setSuccess(true)}/>
        <span className='font-medium'>{success ? "Complete !" : "Loading..."}</span>
    </div>
  )
}

export default ProgressBarM;