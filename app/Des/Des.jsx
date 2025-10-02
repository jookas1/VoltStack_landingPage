"use client"
import React, { useState } from 'react'

export default function Des() {
    const [action,setaction]=useState(false)
    const [first, setfirst] = useState(false)
    const [s, sets] = useState(false)
    const [m, setm] = useState(false)
    function plass(){
        setaction(true)
    }
    function minus(){
        setaction(false)
    }
    function minus2() {
        setfirst(false)
    }
    function plass2() {
        setfirst(true)
    }
    function plass3(){
        sets(true)
    }
    function minus3(){
        sets(false)
    }
    function plass4(){
        setm(true)
    }
    function minus4(){
        setm(false)
    }
  return (
    <section className='py-6 my-10 ' dir='ltr'>
        <header className='text-center'>
            <h2 className='text-3xl font-bold'>Des questions?</h2>
        </header>
        <div className='my-6 grid grid-cols-12 grid-rows-12 w-[80%]  mx-auto gap-3'>
           
            {action? <div className='col-span-12  md:col-span-6 row-span-8 bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 1</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer' onClick={minus}   alt="" />
                </div>
               </div>

                
            </div>:<div className='row-span-6 col-span-12 md:col-span-6 md:row-span-4  bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto flex mt-3 relative flex-col  '>
                  <h4>Question 1</h4>
                    
                     <div className='absolute right-0 top-1 '>
                         <img src="./plas.svg" className='cursor-pointer' onClick={plass}  alt="" />
                     </div>
                </div>
             </div> }
             {/* <div className='col-span-6 row-span-4  bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto flex mt-3 relative flex-col  '>
                  <h4>Question 1</h4>
                    
                     <div className='absolute right-0 top-1 '>
                         <img src="./plas.svg" className='cursor-pointer' onClick={plass}  alt="" />
                     </div>
                </div>
             </div> */}
              <div className='col-span-12 row-span-12 md:col-span-6 md:row-span-8 bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 4</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer'    alt="" />
                </div>
               </div>

                
            </div>
            {first?<div className='col-span-12 md:col-span-6 row-span-8 bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 2</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer' onClick={minus2}   alt="" />
                </div>
               </div>

                
            </div>:<div className='row-span-6  col-span-12 md:col-span-6 md:row-span-4 bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 2</h4>
                 <div className='absolute right-0 top-1 '>
                                
                    <img src="./plas.svg" className='cursor-pointer' onClick={plass2}   alt="" />
                </div>
               </div>
            </div>}
            

            
             {/* <div className='col-span-6 row-span-4 bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 2</h4>
                 <div className='absolute right-0 top-1 '>
                                
                    <img src="./plas.svg" className='cursor-pointer'   alt="" />
                </div>
               </div>
            </div> */}
            
                {s?<div className='col-span-12 md:col-start-1 md:col-span-6 row-span-8 bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 3</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer' onClick={minus3}   alt="" />
                </div>
               </div>

                
            </div>:<div className='row-span-6 col-span-12 md:col-start-1 md:col-span-6 md:row-span-4 bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 3</h4>
                <div className='absolute right-0 top-1 '>
                               
                    <img src="./plas.svg" className='cursor-pointer' onClick={plass3}   alt="" />
                </div> 
               </div>
            </div>}
                


             {m?<div className='col-span-12  md:col-start-7 md:col-span-6 md:row-span-8 bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 5</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer' onClick={minus4}   alt="" />
                </div>
               </div>

                
            </div>: <div className='row-span-6 col-span-12 md:col-start-7  md:col-span-6 md:row-span-4 bg-[#E6EDFC] rounded-2xl'>
                 <div className='w-[90%] mx-auto py-4 relative'>
                 <h4>Question 5</h4>
                <div className='absolute right-0 top-3 '>
                               
                    <img src="./plas.svg" className='cursor-pointer' onClick={plass4}   alt="" />
                </div> 
               </div>
            </div>}
           
            
            
           
            
        </div>

    </section>
  )
}
