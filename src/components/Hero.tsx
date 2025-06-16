import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import 'aos/dist/aos.css';
import AOS from 'aos';



const Hero = () => {
  return (
    AOS.init(),
    <section id="home" className="pt-20 lg:pt-28 py-5" data-aos="fade-up"  data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"data-aos-anchor-placement="top-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-down">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
       
          <div className="mt-12
           relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-80 rounded-lg  lg:max-w-md py-2">
              <img
                className="w-full rounded-full"
                src="/images/super_digital.png"
                alt="Ridwan Asimiyu Picture"
              />
            </div>
          </div>
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-blue-600 uppercase" data-aos="zoom-in">
                Full Stack Developer & Shopify Expert
              </span>
              <span className="mt-1 block text-2xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <TypeAnimation
                  sequence={[
                    'Hi, I\'m Asimiyu Ridwan',
                    1000,
                    'I Build Web Apps',
                    1000,
                    'I Create Shopify Stores',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" data-aos="zoom-out">
            I am passionate about creating exceptional digital experiences, from custom web applications
             to high-converting Shopify stores, all designed with care and precision. With a dedication
              to excellence and a genuine commitment to your success, I’ll work tirelessly to bring your
               vision to life. Let’s collaborate and create something truly amazing together!
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;