import React from 'react';
import { Code, ShoppingBag, Globe, Tag, Braces, Megaphone, Construction, BoomBox } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const services = [
  {
    title: 'Front End Development',
    description: 'Modern front-end development using HTML, CSS, JavaScript and Reactjs to create responsive, user-friendly web applications.',
    icon: Code,
  },
  {
    title: 'Shopify Development',
    description: 'Custom Shopify theme development, app integration, and store optimization for maximum conversion.',
    icon: ShoppingBag,
  },
  {
    title: 'Website Performance',
    description: 'Optimization of web applications for speed, accessibility, and search engine visibility.',
    icon: Globe,
  },
  {
    title: 'Backend Development',
    description: "Robust backend development using Node.js, Express, and databases like MySQL to build scalable and secure server-side applications.",
    icon: Braces,
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Comprehensive SEO and digital marketing services to enhance online visibility, drive organic traffic, and boost conversions through strategic planning and execution.',
    icon: Tag,
  },
  {
    title: 'Social Media Management',
    description: 'Engaging social media management services to build brand awareness, drive engagement, and foster meaningful connections with your audience.',
    icon: Megaphone,
  },
  {
    title: 'Website Maintenance',
    description: 'Ongoing website maintenance and support services to ensure your web applications are up-to-date, secure, and performing optimally.',
    icon: Construction,
  },
  {
    title: 'Content Marketing',
    description: 'Strategic content marketing services to create and distribute valuable, relevant, and consistent content that attracts and retains a clearly defined audience.',
    icon: BoomBox,
  },
];

const Services = () => {
  return (
    AOS.init(),
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-aos="flip-left"data-aos-easing="ease-out-cubic" data-aos-duration="500" >
            Services I Offer
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4  ">
          {services.map((service, index) => (
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-inherit hover:bg-teal-100 text-slate-800"
            >
              <div className='' >
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8" >
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;