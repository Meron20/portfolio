import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import React from 'react'

const projects = [
    {
      id: 1,
      title: "E-commerce",
      description: "Full React project with product browsing, cart, authentication, and simulated checkout.",
      image:"/projects/project1.jpeg",
      tags: ["React, HTML, CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/Meron20/E-commerce"
        
    },
    {
      id: 2,
      title: "Silicon – Manage All Your Money in One App",
      description: "Responsive landing page built with HTML & CSS, featuring Dark Mode and a modern clean UI.",
      image:"/projects/project2a.jpeg",
      tags: ["HTML, CSS"],
      demoUrl: "https://silicon-manage-all-your-money-in-one-f2h2nrz11.vercel.app",
      githubUrl: "https://github.com/Meron20/Sol-ventyr"
        
    },
    {
      id: 3,
      title: "Accordion",
      description: "Interactive accordion widget that t enables users to expand/collapse sections for better content organization, improving readability and user experience.",
      image:"/projects/project3.jpeg",
      tags: ["HTML, CSS, Javascript"],
      demoUrl: "https://accordion-roan-three.vercel.app",
      githubUrl: "https://github.com/Meron20/Accordion"
        
    },
    {
      id: 4,
      title: "Event-Page",
      description: "Dynamic event listing platform built with Next.js + Sanity CMS, enabling easy content management.",
      image:"/projects/project4.jpeg",
      tags: ["Next.js", "Sanity.io", "Headless CMS", "React", "JavaScript", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/Meron20/event-page"
        
    },
    {
      id: 5,
      title: "Task-Portal",
      description: "Full-stack assignment management system using Next.js + BaaS (Firebase/Convex), featuring authentication and persistent storage.",
      image:"/projects/project5.jpeg",
      tags:["Next.js", "Sanity.io", "Headless CMS", "React", "JavaScript", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/Meron20/task-portal"
        
    },
    {
      id: 6,
      title: "Laundry booking",
      description: "UX/UI clickable prototype in Figma, designed for booking, tracking, and managing appointments.",
      image:"/projects/project6.jpeg",
      tags:["Figma", "UI/UX Design", "Prototyping"],
     
      demoUrl: "https://www.figma.com/proto/HYRnu28TzyP62S2XhhTTOd/Launary-booking-system?node-id=561-713&p=f&t=JwmtHNGh6H0bP2JP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=561%3A713"
        
    },
]

const ProjectSection = () => {
  return (
    <section id="projects" className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'> 
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
           
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className='h-48 overflow-hidden'>
                 <img src= {project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                </div>
                <div className='p-6'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag) => (
                      <span className='px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border'>
                        {tag}
                      </span>
                    ))}
                  </div>
               

                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>
                  {project.description}
                </p>
                <div  className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    {project.demoUrl && (
                    <a 
                     href={project.demoUrl}
                     target='_blank' 
                     className='text-foreground/80 hover:text-primary transition-colors duration-300' 
                     >

                      <ExternalLink size={20}/>
                    </a>
                    )}

                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target='_blank' 
                        className='text-foreground/80 hover:text-primary transition-colors duration-300' 
                      >

                      <Github size={20}/>
                    </a>
                    )}
                  </div>
                </div> 
              </div>
              
            </div>
          ) )}
        </div>
        <div className='text-center mt-12'>
          <a 
            href="http://github.com/Meron20" 
            className='cosmic-button w-fit flex items-center mx-auto gap-2' 
            target='_blank'
            >
            Check My Github  <ArrowRight size={16}/>
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProjectSection