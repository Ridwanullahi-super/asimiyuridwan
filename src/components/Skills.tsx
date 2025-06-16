import React from 'react';
import { Code, Layout, ShoppingBag, Search, Share2, Zap, Bug, Users, } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: '/images/icons/html5.png' },
      { name: 'CSS3', icon: '/images/icons/css3.png' },
      { name: 'JavaScript', icon: '/images/icons/Javascript.png' },
      { name: 'TypeScript', icon: '/images/iconscout/typescrit.webp' },
      { name: 'React.js', icon: '/images/iconscout/reactjs.webp'},
      { name: 'FontAwesome', icon: '/images/iconscout/fontawesome.webp' },
      { name: 'Tailwind CSS', icon: '/images/iconscout/tailwindcss.webp' },
      { name: 'Bootstrap', icon: '/images/iconscout/bootstrap.webp' },
    ],
    icon: Code,
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'NodeJS', icon:  "/images/iconscout/nodejs.webp"},
      { name: 'SQL', icon: '/images/iconscout/sql.webp' },
      { name: 'MySQL', icon: '/images/iconscout/mysql.webp'},
      { name: 'ExpressJS', icon:  '/images/iconscout/expressjs.png'},
      { name: 'EJS', icon:  '/images/iconscout/ejs.webp'},
      // { name: 'NPM Packages', icon:  '/images/iconscout/Javascript.png'},
    ],
    icon: Share2,
  },
  {
    title: 'Shopify Development',
    skills: [
      { name: 'Theme Installation', icon: '/images/iconscout/theme_installation.png' },
      { name: 'Store Customization', icon: '/images/iconscout/website_custome.png'  },
      { name: 'App Integration', icon: '/images/iconscout/app_integration.png'},
      { name: 'Liquid Templates', icon: '/images/iconscout/liquid.webp' },
      { name: 'Product Dropshipping', icon: '/images/iconscout/dropship.webp' },
      { name: 'Product SEO', icon: '/images/iconscout/product_seo.webp' },
      { name: 'Store Sales Funnel', icon: '/images/iconscout/sales_funnel.webp' },
      { name: 'Traffic Generation', icon: '/images/iconscout/website_traffic.webp' },
    ],
    icon: ShoppingBag,
  },
  {
    title: 'Digital Marketing',
    skills: [
      { name: 'SEO', icon:  "/images/iconscout/seo.webp"},
      { name: 'Social Media Marketing', icon: '/images/iconscout/socia_media_marketing.webp' },
      { name: 'Potential Client Generation', icon: '/images/iconscout/potential_client.webp'},
      { name: 'CRM', icon:  '/images/iconscout/crm.webp'},
      { name: 'Campaign', icon:  "/images/iconscout/campaign.webp"},
      { name: 'Marketing Strategies', icon: '/images/iconscout/marketing_strategy.webp' },
      { name: 'SEM', icon: '/images/iconscout/sem.webp'},
      { name: 'Content Marketing', icon:  '/images/iconscout/content_marketing.webp'},
    ],
    icon: Zap,
  },
  {
    title: 'Technical Services',
    skills: [
      { name: 'Website Speed Optimization', icon:  '/images/iconscout/web_speed_optimization.webp'},
      { name: 'Bug Fixing', icon: '/images/iconscout/bug_fixing.webp' },
      { name: 'Performance Tuning', icon: '/images/iconscout/performance.webp' },
      { name: 'Technical Support', icon: '/images/iconscout/technical_support.webp' },
      { name: 'Website Troubleshooting', icon: '/images/iconscout/troubleshooting.webp' },
      { name: 'Website Backup', icon: '/images/iconscout/backup.webp' },
    ],
    icon: Bug,
  },
];

const Skills = () => {
  return (
    AOS.init(),
    <section id="skills" className="py-20 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-aos="fade-right">
            Professional Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500" data-aos="fade-right">
            Comprehensive expertise in web development, Shopify, Digital marketing and Website maintenance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 " data-aos="fade-down"   data-aos-easing="ease-out-in" data-aos-anchor-placement="top-center">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-100 py-5 px-8 rounded-lg">
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 grid-cols-2 lg:gap-4 lg:space-y-4 align-center justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                    <span className=' flex justify-center'><img src={skill.icon} alt="" className='w-24 h-18 '  data-aos="flip-left" data-aos-easing="ease-out-cubic" /></span>
                    </div>
                    <div className="ml-3">
                 <span className=" font-medium text-gray-700 justify-center">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;