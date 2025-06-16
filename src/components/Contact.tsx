import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';
// import Contact from '/images/contact.png';

const Contact = () => {
  return (
    AOS.init(),
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" >
            Let's Work Together
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500" >
            Have a project in mind? Get in touch and let's create something amazing.
          </p>
        </div>
  
        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-3 align-baseline grid-cols-2 lg:gap-8">
          <div data-aos="flip-left">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
              <Mail className="h-6 w-6" />
            </div>
            <div className="mt-4 text-center" >
              <h3 className="text-lg font-medium text-gray-900" >Email</h3>
              <p className="mt-2 text-base text-gray-500">
                <a href="mailto:asimiyuridwan50.com" className="text-blue-600 hover:text-blue-500">
                  asimiyuridwan50@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="" data-aos='flip-right'>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
              <Phone className="h-6 w-6" />
            </div>
            <div className="mt-4 text-center" >
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-500">
                <a href="tel:+2348164622387" className="text-blue-600 hover:text-blue-500">
                  +234 (805) 115-2973
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-0" data-aos="flip-left">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Location</h3>
              <p className="mt-2 text-base text-gray-500">
                Abuja, Nigeria
              </p>
            </div>
          </div>
        </div>

  <div className="grid grid-cols-2 gap-8">
  <div className="mt-16 bg-slate-100 py-2 px-4 sm:px-6 l lg:py-2 lg:px-4 xl:pl-12">
    <img src='images/contact.png' alt="" className='hover:bg-'/>
  </div>

      <div className="mt-16 bg-slate-200 py-16 px-4 sm:px-8 l lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  placeholder="Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
  
      </div>

   </div>
</div>
  
      
    </section>
  );
};

export default Contact;