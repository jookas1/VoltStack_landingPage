import React from 'react'
import Navbar from './Navbar/Navbar'
import Image from "next/image";
import About from './Product/Products';
import Products from './Product/Products';
import Center from './Center/Center';
import We from './We/We';
import Des from './Des/Des';
import Footer from './Footer/Footer';
import Animation from './Animation/Animation';
"sue client"

export default function page() {

  return (
    <>
   <div className='md:h-screen bg-[#E0E9FB] py-5 '>
     <Navbar/>

    <section className='pt-5 w-[90%]  md:w-[70%] mx-auto  '>
      <div className='md:flex mt-10 justify-around items-center bg-white pt-20 rounded-3xl '>
        <div className=' lg:w-[50%]  '>
          <h2 className='text-3xl md:mx-0 font-bold w-90 mx-3 '> نُشغّل المستقبل بالذكاء الاصطناعي والابتكار الرقمي</h2>
          <p  className='md:w-105 my-4 text-lg md:mx-0 mx-3 '>في فولتستاك، نحول الأفكار إلى واقع من خلال حلول قائمة على الذكاء الاصطناعي ومنصات تجارة إلكترونية جاهزة للإطلاق – خلال 5 أيام فقط.</p>
            <button type="button" className="md:mx-0 mx-3  my-2 text-white bg-[#537FE7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">احجز اجماعات الان</button>

        </div>
        <div className='lg:w-[40%] flex justify-end '>
          <img src='/862c6ebb249fa03f61b15d3ddda748752913c1ce.png' className='w-80 bg-white rounded-3xl ' alt="" />
        </div>
      </div>
      <div className='  mx-auto flex mt-10 w-[90%] justify-around items-center  '  >
        <div className='bg-[#F2F6FD]'>
          


        </div>
           {/* <div className='hidden md:flex'>
             <svg width="204" height="55" viewBox="0 0 204 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14.0433H31.1776V19.5943H7.43884V31.0809H29.4002V36.6319H7.43884V48.6408H32.3537V54.1917H0V14.0433Z" fill="#537FE7"/>
<path d="M37.0015 23.3583H44.4951L52.2898 47.1012L60.6037 23.3583H68.0972L56.8842 54.1636H47.7771L37.0288 23.3583H37.0015Z" fill="#537FE7"/>
<path d="M83.6332 22.7823C93.6703 22.7823 98.7844 29.6798 98.5109 40.8093H75.7567C76.2763 45.8931 78.3002 49.0808 83.6606 49.0808C87.2706 49.0808 89.513 47.377 90.6344 44.2443L98.128 44.7115C96.4323 51.2517 91.5644 54.6318 83.6606 54.6318C73.6235 54.6318 68.1536 48.751 68.1536 38.6933C68.1536 28.6356 73.6235 22.7548 83.6606 22.7548L83.6332 22.7823ZM83.6332 28.3333C79.2847 28.3333 76.7137 30.834 75.9206 35.2858H91.1268C90.361 30.8065 87.9817 28.3333 83.6332 28.3333Z" fill="#537FE7"/>
<path d="M117.546 27.9194C112.733 27.9194 110.107 31.8216 110.107 38.7191V54.1904H102.723L102.613 23.3852H110.107V27.1225C111.611 24.5669 115.166 22.973 118.64 22.8081C125.039 22.4509 132.123 25.1439 132.123 38.5542V54.1904H124.629V38.5542C124.629 31.6018 122.305 27.9469 117.546 27.9469V27.9194Z" fill="#537FE7"/>
<path d="M149.571 3.27167H142.35V54.1649H149.571V3.27167Z" fill="#537FE7"/>
<path d="M163.792 54.1352L155.942 54.2451L185.042 2.85724H192.535L163.792 54.1352Z" fill="#537FE7"/>
<path d="M190.95 54.1363C190.95 54.1363 146.48 5.24911 64.4607 0.000410633C64.4607 0.000410633 148.887 -0.686563 203.448 54.1363H190.95Z" fill="#537FE7"/>
</svg>
           </div>
           <div>
            <img src="./ff.svg" className='translate-y-3.5' alt="" />
            


           </div>
           <div>
            <img src="./logo.svg" alt="" />
           </div>
           <div>
            <img src="./logo2.svg" className=' hidden md:flex'   alt="" />
           </div> */}
           <div className='mx-auto  '><Animation/></div>



      </div>
    </section>    
</div>



   <Products/>
   <Center/>
   <We/>
   <Des/>
   
   
   
   </> 
  )
}
