import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id="aobut" className='py-24 px-4 relative'>
      {" "}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About
          <span className='text-primary'>Me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center '>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer.</h3>
 
           <p className='text-muted-foreground'>
                Hi, I’m Meron Beyene, a frontend development student passionate about building 
                modern, responsive, and user-friendly websites. I’m currently learning 
                HTML, React, JavaScript, Next.js, Typescript and CSS, and I love turning ideas into interactive 
                digital experiences. My goal is to grow into a professional frontend developer 
                and work on projects that make a positive impact. 
              </p>
              <p className='text-muted-foreground'>
                  In addition to my studies, I bring prior job experience that has helped me 
                  develop strong communication and teamwork skills, which I carry into my 
                  development journey. Outside of coding, I enjoy reading books and helping people, 
                  which keep me curious and motivated.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                <a className="cosmic-button" href="#contact">
                  Get In Touch
                </a>
                <a 
                  className= "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transiton-colors duration-300 " 
                  href="/cv/Meron_cv.pdf"
                >
                  Download Cv
                </a>
              </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'> 
                <div className='p-3 rounded-full bg-primary/10'>
                 <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div> 
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'> 
                <div className='p-3 rounded-full bg-primary/10'>
                 <User className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>UI/UX Design</h4>
                  <p className='text-muted-foreground'>Designing intuitive interface and seamless user experience.</p>
                </div>
              </div>
            </div> 
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'> 
                <div className='p-3 rounded-full bg-primary/10'>
                 <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='text-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>Creating responsive websites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div> 
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection