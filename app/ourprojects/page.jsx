import React from 'react'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section5 from '../Section5/Section5'
import Navbar from '../Navbar/Navbar'

export default function page() {
  return (
    <section className='min-h-screen bg-gradient-to-br from-[#ffffff] via-[#C9D6F5] to-[#ffffff]  py-5'>
      <Navbar/>
      <header>
        
          
          <h2 className='text-3xl font-bold text-center mt-4 relative '>مشاريعنا
            <svg width="470" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg" className=' mx-auto mt-3'>
<path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#537FE7" stroke-width="8" stroke-linecap="round"/>
</svg>

          </h2>

      </header>
      <p className='w-[35%] text-center mx-auto my-6 text-gray-500'>
        نحوّل الأفكار إلى حلول رقمية ناجحة. تصفح مشاريعنا من مواقع إلكترونية، تطبيقات موبايل، منصات مدعومة بالذكاء الاصطناعي، وحلول مؤسسية صنعت لتحقيق نمو الأعمال
      </p>
      <div className='md::w-[70%] bg-[#EFF4FF] mx-auto flex justify-around  gap-5  items-center mt-15 rounded-xl pt-2  pb-50 overflow-hidden  -translate-y-5'>
        <div className='w-[45%] mt-6'>
          <h3 className='text-3xl font-semibold w-90 my-4'>اكتشف حرية تأجير السيارات مع Prestige.</h3>
          <p className='w-[499px]'>يقدّم Prestige تجربة فاخرة وسهلة لتأجير السيارات مدعومة بمنصة Drivewise، المنصة الشاملة التي تُمكّنك من إدارة كل جوانب عملك بسهولة وذكاء.
من خلال أدوات متقدمة لإدارة التسويق، والتواصل، والعمليات المالية، والشحن، تمنحك Drivewise السيطرة الكاملة على كل التفاصيل — من الحجوزات عبر الإنترنت إلى تتبع السيارات وإصدار الفواتير تلقائيًا.</p>
        </div>
       <div className='bg-red-400 w-[45%] relative '> 
          <div className='absolute -bottom-200 rounded-2xl -translate-x-30'>
            
            <img src="./46e1c0cb78f01110ace94698114357ed308cda5a.png"className='h-[880px] w-[343px] rounded-xl'  alt="" />
          </div>
          <div className=' absolute top-8 right-60 overflow-hidden w-[343px] translate-x-70 rounded-2xl '>
            
            <img src="./46e1c0cb78f01110ace94698114357ed308cda5a.png" className=' -translate-y-140 h-[880px] w-full' alt="" />
          </div>
       </div>
          
        
      </div>
      
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
    </section>
    
   
    
  )
}