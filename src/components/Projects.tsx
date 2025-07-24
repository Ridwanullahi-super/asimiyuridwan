import { ExternalLink, Github } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const projects = [
  {
    title: 'Fixed Asset Management System (Mi-assets)',
    description: 'A web-based fixed asset management system for tracking and managing individual and company properties and depreciation calculation.',
    image: 'https://mi-assets.onrender.com/img/fixed-assets/car_2.jpg',
    tags: ['HTML5', 'CSS5', 'JavaScript', 'Node.js', 'Expressjs', 'MySQL'],
    liveLink: 'https://mi-assets.onrender.com/',
    githubLink: 'https://github.com/Ridwanullahi-super/miasset',
  },
  {
    title: 'CoverCraftAI',
    description: 'An AI Generator Software to generate a job cover letter and Job Proposal by providing a job description and your CV.',
    image: 'https://i.ibb.co/F4wy3k6G/Chat-GPT-Image-Jun-15-2025-12-15-24-PM-removebg-preview.png',
    tags: ['React', 'Typescript', 'GenAI', 'Node.js',],
    liveLink: 'https://cover-craft-ai-omega.vercel.app/',
    githubLink: 'https://github.com/Ridwanullahi-super/CoverCraftAi.git',
  },
  {
    title: 'Chimbo Helping Hands', 
    description: 'A Non government organization website that support people who needs of assistance over the world community-driven platform connecting volunteers with local organizations in need of assistance.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    tags: ['TypeScript','React', 'Node.js', 'MySQL', 'Express'],
    liveLink: 'https://chimbo-helping-hands-front-end-next.vercel.app/'  ,
    githubLink: 'https://github.com/Ridwanullahi-super/chimbo_helping_hands_front_end_nextjs.git',
  },
  {
    title: 'Jewelries E-commerce Store',
    description: 'A Shopify jewelry store crafted with a bespoke theme and enhanced by sophisticated product filtering features.  ',
    image: 'https://jewelparade.com/cdn/shop/files/small-tools-and-brushes-in-holder.jpg?v=1712321854&width=2000',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'Custom Theme', "CRM", 'Content Marketing'],
    liveLink: 'https://jewelparade.com/',
    githubLink: 'https://github.com/asimiyuridwan/',
  },
  {
    title: 'Electronic Learning, Mentorship, Training & Event Management System',
    description: 'A full-stack electronic learning platform with specialized training from field experts and integrated event (conference) management system',
    image: 'https://res.cloudinary.com/do1ato3qq/image/upload/v1752560631/WhatsApp_Image_2025-07-14_at_12.20.48_f7d70f43_yqegqi.jpg',
    tags: ['TypeScript', "Nextjs", 'React', 'Node.js', 'ProgreSQL', 'SQL'],
    liveLink: 'https://emconsulttech.com',
    githubLink: 'https://github.com/Ridwanullahi-super/emconsulttech.com.git',
  },
  {
    title: 'Restaurant Ordering System',
    description: 'Online food ordering system with real-time order tracking and payment integration.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Firebase', 'Stripe', 'TypeScript'],
    liveLink: 'https://food-order.example.com',
    githubLink: 'https://github.com/asimiyuridwan/food-order',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-responsive fitness tracking application with workout plans and progress monitoring.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    liveLink: 'https://fitness-app.example.com',
    githubLink: 'https://github.com/asimiyuridwan/fitness-app',
  }
];

const Projects = () => {
  return (
    AOS.init(),
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-slate-200" data-aos="fade-up">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A selection of my recent work showcasing my expertise in web development and Shopify
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <a
                    href={project.liveLink}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;