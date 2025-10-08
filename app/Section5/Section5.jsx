import React from 'react'

export default function Section5() {
  return (
    <section className='py-5'>
        <div className='md:w-[70%] bg-[#EFF4FF] mx-auto flex justify-around  gap-5  items-center mt-15 rounded-xl pt-2  pb-50 overflow-hidden  -translate-y-5'>
        <div className='w-[45%] mt-6'>
          <h3 className='text-3xl font-semibold w-90 my-4'>ضامن نحو مستقبل رقمي أكثر ذكاءً وسهولة في الدفع.</h3>
          <p className='w-[460px]'>امن هي شركة مصرية رائدة في خدمات الدفع الإلكتروني، تأسست عام 2018 وتوفر أكثر من 500 خدمة دفع متنوعة مثل فواتير الكهرباء والغاز والمياه والاتصالات والمدارس والجامعات وحجوزات السفر.
            </p>       <p className='mt-1'>بالتعاون مع VoltStack، تم تطوير نظام ذكاء اصطناعي ذكي لتحليل البيانات وتحسين تجربة المستخدم وأتمتة العمليات، مما يجعل خدمات ضامن أسرع وأكثر ذكاءً وانتشارًا في جميع محافظات مصر.</p>
           </div> 
       <div className='bg-red-400 w-[45%] relative '> 
          <div className='absolute -bottom-200 rounded-2xl translate-y-20 -translate-x-30 h-[880px] w-[343px]'>
            
            <img src="./af15a3fecbb9db5c29d674255b097bdd09de8c73.png"className=' rounded-xl'  alt="" />
          </div>
          <div className=' absolute top-8 right-60 overflow-hidden w-[343px] translate-x-70 rounded-2xl  translate-y-12'>
            
            <img src="./af15a3fecbb9db5c29d674255b097bdd09de8c73.png" className=' -translate-y-125 h-[880px] w-full' alt="" />
          </div>
       </div>
          
        
      </div>
    </section>
  )
}
