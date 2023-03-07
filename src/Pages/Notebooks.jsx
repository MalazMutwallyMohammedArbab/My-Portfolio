import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from "../Components/Images";


export default function Notebooks() {
  return (
    <div className='font-regu container'>
      <div className='text-orange text-4xl font-semibold mt-12 mb-12'>قسم الكراسات</div>
      <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-10'>
        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/living-my-best-life.jpg" alt="img" />
          <p className='px-4 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "living my best life" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <div className='text-orange text-xl font-semibold mt-3 mb-6'></div>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/wake-up-hero2.png" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "Wake up HERO" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/strive-for-progress.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "strive for progress not perfection", كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/reconcile.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/patience.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "patience is the key to success" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/positivity.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "optimism positivity" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/believe-in-yourself.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "believe in yourself" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/2021.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/massive-success2.png" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "the best revenge is massive success", كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/time-focus.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "time and focus are your primary resources", كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/work-hard.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "work hard, dream big, never give up", كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/meditation.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/wake-up2.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "wake up HERO" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/wake-up3.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "Wake up HERO" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/wake-up-hero.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "wake up HERO" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/believe.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "believe in yourself" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/learning.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "learning is fun" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/massive-success.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "the best revenge is massive success", كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/focus.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "focus on the good stuff" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/meditation2.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/the-best-life.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "the best life ever" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/school.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "Welcome back to school" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/notebook.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/2023-b-w.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/work-hard2.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "Work hard, dream big, never give up", كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/reconcile-b-w.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/notebook/tomorrow.jpg" alt="img" />
          <p className='px-4 mb-6 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>
      </div>
    </div>
  )
}
