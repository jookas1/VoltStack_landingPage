"use client"
import React, { useState } from 'react'

export default function Des() {
    const [action,setaction]=useState(false)
    const [first, setfirst] = useState(false)
    const [s, sets] = useState(false)
    const [m, setm] = useState(false)
    const [f,setf]=useState(false)
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
    function minus5(){
        setf(false)
    }
    function plass5(){
        setf(true)
    }
  return (
    <section className='py-6 my-10 ' dir='ltr'>
        <header className='text-center'>
            <h2 className='text-3xl font-bold'>Des questions?</h2>
        </header>
        <div className='my-6 grid grid-cols-12  w-[80%]  mx-auto grid-flow-row-dense items-start gap-3'>
           
            {action? <div onClick={minus} className='cursor-pointer col-span-12  md:col-span-6  bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 1</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer'    alt="" />
                </div>
               </div>

                
            </div>:<div onClick={plass}  className='cursor-pointer  col-span-12 md:col-span-6   py-1  bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto flex mt-3 relative flex-col mb-3 '>
                  <h4>Question 1</h4>
                    
                     <div className='absolute right-0 top-0 '>
                         <img src="./plas.svg" className='cursor-pointer'   alt="" />
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
            
                 {f? <div onClick={minus5} className=' hidden md:flex cursor-pointer col-span-12  md:col-span-6  bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 4</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer'    alt="" />
                </div>
               </div>

                
            </div>:<div onClick={plass5}  className='hidden md:flex cursor-pointer  col-span-12 md:col-span-6  py-1  bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto flex mt-3 relative flex-col mb-3 '>
                  <h4>Question 4</h4>
                    
                     <div className='absolute right-0 top-0 '>
                         <img src="./plas.svg" className='cursor-pointer'   alt="" />
                     </div>
                </div>
             </div>}
            
             
            {first?<div onClick={minus2} className='cursor-pointer col-span-12 md:col-span-6  bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 2</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer'    alt="" />
                </div>
               </div>

                
            </div>:<div onClick={plass2}  className='cursor-pointer  col-span-12 md:col-span-6 py-1 bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto mt-3 relative mb-3'>
                 <h4>Question 2</h4>
                 <div className='absolute right-0 top-0 '>
                                
                    <img src="./plas.svg" className='cursor-pointer'   alt="" />
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
            
                {s?<div onClick={minus3}  className='cursor-pointer col-span-12 md:col-start-1 md:col-span-6  bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 3</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer'   alt="" />
                </div>
               </div>

                
            </div>:<div onClick={plass3} className='cursor-pointer  col-span-12 md:col-start-1 md:col-span-6 py-1 bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto mt-3 relative mb-3'>
                 <h4>Question 3</h4>
                <div className='absolute right-0 top-0 '>
                               
                    <img src="./plas.svg" className='cursor-pointer'    alt="" />
                </div> 
               </div>
            </div>}
                
                 {f? <div onClick={minus5} className=' md:hidden  cursor-pointer col-span-12  md:col-span-6  bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 4</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer'    alt="" />
                </div>
               </div>

                
            </div>:<div onClick={plass5}  className='md:hidden  cursor-pointer  col-span-12 md:col-span-6 py-1  bg-[#E6EDFC] rounded-2xl'>
                <div className='w-[90%] mx-auto flex mt-3 relative flex-col mb-3 '>
                  <h4>Question 4</h4>
                    
                     <div className='absolute right-0 top-0 '>
                         <img src="./plas.svg" className='cursor-pointer'   alt="" />
                     </div>
                </div>
             </div>}

             {m?<div onClick={minus4} className='cursor-pointer col-span-12  md:col-start-7 md:col-span-6  bg-[#E6EDFC] rounded-2xl  '>
               <div className='w-[90%] mx-auto mt-3 relative'>
                 <h4>Question 5</h4>    
                 <p className='md:w-120 felx flex-col items-end'><span className=''>Lorem ipsum dolor sit amet consectetur. Duis magna facilisis ornare</span> <span className='-translate-x-6'>est curabitur posuere adipiscing malesuada varius. Suspendisse</span> varius enim in eros elementum tristique</p>
                <div className='absolute right-0 top-1 '>
                                
                    <img src="./mins.svg" className='cursor-pointer'    alt="" />
                </div>
               </div>

                
            </div>: <div onClick={plass4}  className='cursor-pointer  col-span-12 md:col-start-7  md:col-span-6  bg-[#E6EDFC] rounded-2xl'>
                 <div className='w-[90%] mx-auto py-4 relative'>
                 <h4>Question 5</h4>
                <div className='absolute right-0 top-3 '>
                               
                    <img src="./plas.svg" className='cursor-pointer'   alt="" />
                </div> 
               </div>
            </div>}
           
            
            
           
            
        </div>

    </section>
  )
}
