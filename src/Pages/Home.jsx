import React from 'react'
import Image from "../Components/Images";
import "./Home.css"

export default function Home() {
  return (
    <div className='font-regu'>
        <div className='section-one text-center'>
            <div className=' text-3xl font-semibold md:text-5xl lg:text-6xl tracking-wider text-orange pt-40 lg:pt-32'>Malaz Arbab</div>
            <div className='text-xl text-semiBlack font-semibold md:text-2xl lg:text-3xl pt-3'>Front-end Developer</div>
            <div className='text-md lg:text-xl w-[80%] md:w-[50%] m-auto pt-2'>I am a front-end web developer creating modern and responsive designs to web and mobile. Let us work together. Thank you</div>
        </div>

        <div className='section-two'>
            <div className='container'>
            <div className='text-[30px] md:text-[40px] text-center pt-20'>My Portfolio</div>
            <hr className='w-[30%] md:w-[15%] m-auto mt-3' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16 pb-9'>
                <div className='box shadow'>
                  <Image className="h-56 w-full border-b-2 border-lightgray" src="images/projects/card.jpg" alt="img" />
                  <div class="bg-white p-4 w-[100%] text-left pl-6">
                    <h4 className='font-semibold mb-3'>Preview card</h4>
                    <a href="https://4-preview-card.vercel.app/" rel="noreferrer noopener" target="_blank" className='text-orange'>visit website</a>
                  </div>
                </div>
                <div className='box shadow'>
                  <Image className="h-56 w-full border-b-2 border-lightgray" src="images/projects/pricing-component.png" alt="img" />
                  <div class="bg-white p-4 w-[100%] text-left pl-6">
                    <h4 className='font-semibold mb-3'>Pricing component</h4>
                    <a href="https://4-preview-card.vercel.app/" rel="noreferrer noopener" target="_blank" className='text-orange'>visit website</a>
                  </div>
                </div>
                <div className='box shadow'>
                  <Image className="h-56 w-full border-b-2 border-lightgray" src="images/projects/e-commerce.jpg" alt="img" />
                  <div class="bg-white p-4 w-[100%] text-left pl-6">
                    <h4 className='font-semibold mb-3'>eCommerce</h4>
                    <a href="https://4-preview-card.vercel.app/" rel="noreferrer noopener" target="_blank" className='text-orange'>visit website</a>
                  </div>
                </div>
                <div className='box shadow'>
                  <Image className="h-56 w-full border-b-2 border-lightgray" src="images/projects/easybank.jpg" alt="img" />
                  <div class="bg-white p-4 w-[100%] text-left pl-6">
                    <h4 className='font-semibold mb-3'>Easybank</h4>
                    <a href="https://4-preview-card.vercel.app/" rel="noreferrer noopener" target="_blank" className='text-orange'>visit website</a>
                  </div>
                </div>
            </div>
            </div>
        </div>

        <div className='section-three bg-[#777]'>
            <div className='container'>
              <div className='text-[30px] md:text-[40px] text-center pt-20 text-white'>My Work</div>
              <hr className='w-[30%] md:w-[15%] m-auto mt-3 text-white' />
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16 pb-9'>
                <div className='box shadow'>
                  <div className='grid grid-cols-2'>
                    <Image className="h-28 w-full" src="images/projects2/tg-academy1.jpg" alt="img" />
                    <Image className="h-28 w-full" src="images/projects2/tg-academy2.jpg" alt="img" />
                    <Image className="h-28 w-full" src="images/projects2/tg-academy5.jpg" alt="img" />
                    <Image className="h-28 w-full" src="images/projects2/tg-academy6.jpg" alt="img" />
                  </div>
                  <div class="bg-white p-2 w-[100%] text-left pl-6">
                    <div className='mb-1 text-sm text-semiBlack'>Participated in</div>
                    <h4 className='font-semibold mb-1'>TG_Academy Website</h4>
                    <a href="" rel="noreferrer noopener" target="_blank" className='text-orange'>...Soon</a>
                  </div>
                </div>

                <div className='box shadow'>
                  <div className='grid grid-cols-2'>
                    <Image className="h-28 w-full" src="images/projects2/tg-price1.png" alt="img" />
                    <Image className="h-28 w-full" src="images/projects2/tg-price2.png" alt="img" />
                    <Image className="h-28 w-full" src="images/projects2/tg-price5.png" alt="img" />
                    <Image className="h-28 w-full" src="images/projects2/tg-price3.png" alt="img" />
                  </div>
                  <div class="bg-white p-2 w-[100%] text-left pl-6">
                    <div className='mb-1 text-sm text-semiBlack'>Participated in</div>
                    <h4 className='font-semibold mb-1'>TG_Services Pricing</h4>
                    <a href="" rel="noreferrer noopener" target="_blank" className='text-orange'>...Soon</a>
                  </div>
                </div>

                <div className='box shadow'>
                  <div className='grid grid-cols-4'>
                    <Image className='w-full h-56' src="images/projects2/batch2.jpg" alt="img" />
                    <Image className='w-full h-56' src="images/projects2/cbc2.jpg" alt="img" />
                    <Image className='w-full h-56' src="images/projects2/abnormal4.png" alt="img" />
                    <Image className='w-full h-56' src="images/projects2/coagulation4.png" alt="img" />
                  </div>
                  <div class="bg-white p-4 w-[100%] text-left pl-6">
                    <h4 className='font-semibold mb-3'>Hematology Tests</h4>
                    <a href="https://hematology-tests.vercel.app/" rel="noreferrer noopener" target="_blank" className='text-orange'>visit website</a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div dir='ltr' class="section-four profile_skills text-left">
            <div class="container">
                <div class="profile">
                    <h2 class="profile-title"><span>My </span>Profile</h2>
                    <ul class="profile-list">
                        <li class="profile-item">
                            <span>Name</span>
                            Malaz Arbab
                        </li>
                        <li class="profile-item">
                            <span>Birthday</span>
                            18/10/1996
                        </li>
                        <li class="profile-item">
                            <span>Address</span>
                            Khartoum, Sudan
                        </li>
                        <li class="profile-item">
                            <span>Phone</span>
                            +249 968 923 996
                        </li>
                        <li class="profile-item">
                            <span>Email</span>
                            malazarbab870@gmail.com
                        </li>
                        <li class="profile-item">
                            <span>Website</span>
                            <a href="https://my-portfolio-gilt-ten-26.vercel.app/" class="web">my website</a>
                        </li>
                    </ul>
                </div>
                
                <div class="skills">
                    <h2 class="skills-title">Some <span>skills</span></h2>
                    <div class="bar">
                        <span class="title">HTML</span>
                        <span class="perc">90%</span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc">85%</span>
                        <div class="parent">
                            <span class="sp2"></span>
                        </div>
                    </div>

                    <div class="bar">
                        <span class="title">Javascript</span>
                        <span class="perc">75%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">React</span>
                        <span class="perc">75%</span>
                        <div class="parent">
                            <span class="sp3"></span>
                        </div>
                    </div>
                </div>            
            </div>
        </div>

        <div className='section-five bg-[#999]'>
          <div className='container'>
            <div className='text-[30px] md:text-[40px] text-center pt-20 text-white'>Contact</div>
            <hr className='w-[30%] md:w-[15%] m-auto mt-1 text-white' />
            <div className='text-white text-center text-lg mt-7'>Let us work together, send me a message</div>
            <div className='flex justify-center pt-20 pb-36'>
              <a href='https://wa.me/+249968923996' target='_blank' rel="noreferrer noopener">
                <Image className='ml-6 w-12 h-12 rounded-full' src='images/whats.png' alt='img' />
                <div className='ml-9 text-white'>Whatsapp</div>
              </a>
              <a href='mailto:malazarbab123@gmail.com' target='_blank' rel='noopener noreferrer'>
                <Image className='mr-6 w-12 h-12' src='images/mail icon.svg' alt='img' />
                <div className='mr-8 text-white'>Email</div>
              </a>
            </div>
          </div>
        </div>

        <div className='footer bg-black py-4'>
          <div className='text-center text-white'>Copyright 2023</div>
        </div>
    </div>
  )
}
