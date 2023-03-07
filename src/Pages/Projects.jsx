import React from 'react';
import Image from "../Components/Images";

export default function Projects() {
  return (
    <div className='font-regu container'>
        <div className='text-orange text-3xl font-semibold mt-12 mb-12'>قسم المشاريع العملية</div>
        <div className='text-2xl mb-3'>مشروع TG Academy Website</div>
        <div className='w-[90%] lg:w-[50%] m-auto shadow-xl text-center pb-6 mb-28'>
            <div className='grid grid-cols-3'>
              <Image className="h-20 w-full" src="images/projects2/tg-academy1.jpg" alt="img" />
              <Image className="h-20 w-full" src="images/projects2/tg-academy2.jpg" alt="img" />
              <Image className="h-20 w-full" src="images/projects2/tg-academy3.jpg" alt="img" />
              <Image className="h-20 w-full" src="images/projects2/tg-academy4.jpg" alt="img" />
              <Image className="h-20 w-full" src="images/projects2/tg-academy5.jpg" alt="img" />
              <Image className="h-20 w-full" src="images/projects2/tg-academy6.jpg" alt="img" />
            </div>
            <div className='text-center text-xl my-2 text-semiBlack font-semibold'>موقع أكاديمية اللعبة</div>
            <p className='px-4 mb-6 font-semibold'>المشاركة مع فريق في عمل أكاديمية اللعبة التي تسجل فيها وتأخذ مسارات احترافية من الصفر وحتى مستوى متقدم بشكل مجاني، ويوجد اختبارات وتقييمات ثنائية والكثير من الميزات في الموقع</p>
            <a href="" rel="noreferrer noopener" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>قريبا بإذن الله</a>
        </div>

        <div className='text-2xl mb-3'>مشروع TG Service Prices</div>
        <div className='w-[90%] lg:w-[40%] m-auto shadow-xl text-center pb-6 mb-20'>
            <div className='grid grid-cols-2'>
              <Image className="h-24 w-full" src="images/projects2/tg-price1.png" alt="img" />
              <Image className="h-24 w-full" src="images/projects2/tg-price2.png" alt="img" />
              <Image className="h-24 w-full" src="images/projects2/tg-price5.png" alt="img" />
              <Image className="h-24 w-full" src="images/projects2/tg-price3.png" alt="img" />
            </div>
            <div className='text-center text-xl my-2 text-semiBlack font-semibold'>موقع خدمة اقتراح الأسعار</div>
            <p className='px-4 mb-6 font-semibold'>المشاركة مع فريق في عمل موقع يقدم خدمة اقتراح أسعار للفريلانسرز، بعد أن يقوم باختيار تخصصه والمستوى وبعض الأسئلة البسيطة، ويمكنه أن يقترح سعر معين بناء على تجربته</p>
            <a href="" rel="noreferrer noopener" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>قريبا بإذن الله</a>
        </div>

        <div className='text-2xl mb-3'>مشروع Hematology tests</div>
        <div className='w-[90%] lg:w-[50%] m-auto shadow-xl text-center pb-6 mb-28'>
            <div className='grid grid-cols-6'>
              <Image className='w-40 h-60' src="images/projects2/batch.jpg" alt="img" />
              <Image className='w-40 h-60' src="images/projects2/registration.jpg" alt="img" />
              <Image className='w-40 h-60' src="images/projects2/cbc.jpg" alt="img" />
              <Image className='w-40 h-60' src="images/projects2/abnormal.jpg" alt="img" />
              <Image className='w-40 h-60' src="images/projects2/coagulation.jpg" alt="img" />
              <Image className='w-40 h-60' src="images/projects2/special.jpg" alt="img" />
            </div>
            <div className='text-center text-xl my-2 text-semiBlack font-semibold'>Hematology tests</div>
            <p className='px-4 mb-6 font-semibold'>موقع من عدة صفحات، يشرح بعض الفحوصات المعملية التي تخص قسم الهيماتولوجي، مع إضافة بعض الصور للتوضيح</p>
            <a href="https://hematology-tests.vercel.app/" rel="noreferrer noopener" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>
    </div>
  )
}
