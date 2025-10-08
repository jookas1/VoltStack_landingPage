import React from 'react'

export default function Center() {
  return (
    <section className='py-5'>
        <div className='w-[80%]  mx-auto flex justify-around items-center py-4 '>
             <div className='grid grid-cols-12  md:gap-0 gap-1'>
                <div className='col-span-12 lg:col-span-6 '>
                    <h3 className='text-2xl font-semibold lg:w-100 my-2'>ابنِ متجرك الإلكتروني وتطبيقك مباشرة  وتابع المبيعات والتحليلات بنقرة واحدة</h3>
                    <p className='lg:w-120 my-5 '>أطلق موقعك للتجارة الإلكترونية، وتطبيق الهاتف، ولوحة التحكم القوية  جميعها في باقة واحدة . قم بإدارة مبيعاتك، ومتابعة الأداء، وتنمية عملك بسهولة تامة.</p>
                        <div className='my-5 '>      <button type="button" className="text-white bg-[#537FE7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-8 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"> جرب الان مجاناً </button></div>
                    <img src="./acace9ad77e5d65b5f922ee95ffae7a1f8a5a901.png" className='w-120 rounded-3xl' alt="" />
                </div>
                <div className='col-span-12 md:col-span-6 my-2'>
                    <img src="./07157bb5b3532074aebe23f2e99155ff05c4d046.png" className='w-130 h-full rounded-3xl' alt="" />
                </div>
             </div>
        </div> 
    </section>
  )
}