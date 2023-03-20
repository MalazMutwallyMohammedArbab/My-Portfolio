import React from 'react';
import Image from "../Components/Images";
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function Contact() {
  const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const serviceId = 'service_k3vaqtq';
        const templateId = 'template_vtf3lerr';
        const userId = 'WDgii8xhk7GJ6Mr1a'

        emailjs.send(serviceId, templateId, data, userId)
          .then(response => console.log(response))
          .then(error => console.log(error));
    }
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

      <form onSubmit={handleSubmit(onSubmit)} className='mt-12 mb-20'>
        <div className='border border-orange rounded-[10px] py-12 text-black text-lg md:text-xl'>
          <div className='text-center text-2xl text-orange'>أرسل طلبك أو اقتراحك</div>
          <div className='flex justify-center mt-6'>
            <label className='w-[20%]'>الاسم</label>
            <input type='text' className='border border-orange mr-4 rounded w-[60%] outline-none' name='name' {...register("name")} />
          </div>
          <div className='flex justify-center mt-6'>
            <label className='w-[20%]'>الايميل</label>
            <input type='email' className='border border-orange mr-4 rounded w-[60%] outline-none' name='email' {...register("email", {required: true})} />
          </div>
          <div className='flex justify-center mt-6'>
            <label className='w-[20%]'>الطلب</label>
            <input type='text' className='border border-orange mr-4 rounded w-[60%] outline-none' name='order' {...register("order")} />
          </div>
          <div className='flex justify-center mt-6'>
            <label className='w-[20%]'>الاقتراح</label>
            <input type='text' className='border border-orange mr-4 rounded w-[60%] outline-none' name='suggest' {...register("suggest")} />
          </div>
          <div className='flex justify-center mt-6'>
            <label className='w-[20%]'>الرسالة</label>
            <textarea className='border border-orange mr-4 rounded w-[60%] outline-none' name='message' {...register("message")}></textarea>
          </div>

          <button type='submit' className='rounded-xl px-6 py-2 bg-orange text-[#ffffff] mt-9'>إرسال</button>
        </div>   
        
      </form>
    </div>
  )
}

/* 
<div className='text-xl mt-12 mb-6'>لتقييم الخدمة أو تقديم اقتراحات يرجى التواصل على الاستبيان</div>
      <a className='text-2xl text-orange' href=''>الاستبيان</a>
*/
