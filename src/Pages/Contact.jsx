import React from 'react';
import Image from "../Components/Images";

export default function Contact() {
  return (
    <div className='container font-regu text-center font-semibold'>
      <div className='mt-20 text-xl tracking-wider'>لطلب كراس<br />أو طلب تصميم موقع الكتروني<br /><br /><span className='text-orange'>يرجى التواصل على أحد وسائل التواصل</span><br /><span className='text-orange'>بالضغط على الأيقونة</span></div>

      <div className='flex justify-center mt-6'>
      <a href='https://wa.me/+249968923996' target='_blank' rel="noreferrer noopener">
        <Image className='ml-6 w-10 h-5' src='images/whats.png' alt='img' />
        <div className='ml-6'>واتساب</div>
      </a>
      <a href='mailto:malazarbab123@gmail.com' target='_blank' rel='noopener noreferrer'>
        <Image className='mr-6 h-5' src='images/mail icon.svg' alt='img' />
        <div className='mr-6'>ايميل</div>
      </a>
      </div>
    </div>
  )
}

/* 
<div className='text-xl mt-12 mb-6'>لتقييم الخدمة أو تقديم اقتراحات يرجى التواصل على الاستبيان</div>
      <a className='text-2xl text-orange' href=''>الاستبيان</a>
*/
