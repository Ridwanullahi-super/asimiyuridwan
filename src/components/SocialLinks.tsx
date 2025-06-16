import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href="https://www.fiverr.com/readwyn"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Fiverr Profile
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01d94ac8938d6374bf?"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-[#6FDA44] text-white rounded-md hover:bg-[#5ec934] transition-colors"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Upwork Profile
      </a>
      <div className="flex items-center space-x-3">
        <a
          href="https://github.com/Ridwanullahi-super"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/ridwan-asimiyu-87430b231?"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;