import { FaEye } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Education = [
    {
        institution: 'Senator Abiola Ajimobi First Technical University, Ibadan',
        title: 'B.Sc. Software Engineering',
        date: '2019 - 2023',
        start: 'July 2019',
        description: 'I have finished my degree in Software Engineering from Senator Abiola Ajimobi First Technical University, Ibadan, Oyo State. I have a CGPA of 4.25/5.0.'
    },
    {
        institution: 'Lagbulu Memorial High School, Kishi Oyo State',
        title: 'Senior Secondary School',
        date: '2013 - 2019',
        start:'February 2013',
        description: 'I completed my secondary school education at Lagbulu Memorial High School, Kishi, Oyo State. I was the best graduating Student of my set.'
    },
    // {
    //     institution: 'Lagbulu Memorial High School, Kishi Oyo State',
    //     title: ' Junior Secondary School',
    //     date: '2013 - 2016',
    //     description: 'I completed my junior secondary school education at Lagbulu Memorial High School, Kishi, Oyo State.'
    // }
];

const Experiences = [
    {
        title: 'IT Support & Website Maintenance Intern',
        company: 'World Innovators and Education Management Organization (WIEMO) Lagos Nigeria',
        date: 'Dec 2024 - present',
        start: 'December 2024',
        description: 'I am working as IT support and Website Maintenance for WIEMO, World Innovators University and Institute of Business Administration and Knowledge Management (IBAKM'
    },
    {
        title: 'Full stack Developer',
        company: 'Triumphant Faith Heroic Generation Office Ilorin Nigeria',
        date: 'Aug 2023- Oct 2024 ',
        start: 'August 2023',
        description: ' I worked as a freelancer under this organization for Shopify Full stack Website Development and Sales Generation for clients'
    },
    
    {
        title: 'Full Stack Website Developer Intern & Tutor',
        company: 'Alusoft Technologies Limited Akobo Ibadan Nigeria',
        date: 'May 2021 - Dec 2021',
        start: 'May 2021',
        description: 'I learn and worked as a Full stack developer from Alusoft Technology Akobo Ibadan'
    },
    
];

const Resume = () => {

    return(
        AOS.init(),
<section id="resume" className="py-12" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-gray-100" data-aos="fade-up">
            My Resume
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-100" data-aos="fade-down">
            Comprehensive Education and Work Experience
          </p>
       
        </div>
    <div className="mt-16 grid grid-cols-2 gap-8 "> 
        {/* education */}
        <div data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Education</h3>
            {Education.map((education, index) => (
                <ol key={index} >
                    <div className=" mt-6 relative border-s border-gray-200 dark:border-gray-700 hover:shadow transition-shadow hover:bg-teal-50 py-1 round">
                    <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{education.start}</time>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-300">{education.institution}</h2>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">{education.title}</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{education.date}</p>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{education.description}</p>
                    </li>
                  </div>
                </ol>
            ))}


</div>
{/* experience */}
    <div data-aos="" data-aos-offset="500" data-aos-easing="ease-in-sine">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Experiences</h3>
            {Experiences.map((experience, index) => (
                <ol key={index} >
                    <div className=" mt-6 relative border-s border-gray-200 dark:border-gray-700 hover:shadow transition-shadow hover:bg-teal-50 py-1 round ">
                    <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.start}</time>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-300">{experience.company}</h2>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-300">{experience.title}</h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{experience.date}</p>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{experience.description}</p>
                    </li>
                  </div>
                </ol>
            ))}


     </div>
    </div>
    <center>
<div className="rounded-md shadow w-32 mt-2 inline-flex h-16 hover:shadow-lg hover:border-teal-100 hover:bg-teal-300 transition-colors duration-300" data-aos="zoom-out" title='My C'>
    
<a href="https://drive.google.com/file/d/13JlBElT15865LhU7Sx2MJ-K8MnnQHpVl/view?usp=drivesdk" className=" w-28 px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 inline-flex m-2"> 
    <span><FaEye className="h-5 w-5"/></span> <span className="mx-2">CV</span> 
</a>  
</div>
</center>
   
</div>
</section>
)
}

export default Resume;




