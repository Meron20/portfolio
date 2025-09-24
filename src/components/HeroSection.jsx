import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section 
      id='hero'
      className='relative min-h-screen flex flex-col items-center justify-center px-4'

     >
       <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
            <h1 className='text-4xl md:text-6xl font-bold tracking-tights ' >
                <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
                <span className='text-primary opacity-0 animate-fade-in-delay-1 '>Meron </span>
                <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2 '>Beyene</span>
            </h1>
            
            <p class="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                 Aspiring frontend developer, currently honing my skills in React, JavaScript, and modern web design, eager to grow into a professional role.
            </p>
            <div className='pt-4 opacity-0 animate-fade-in-delay-4' >
                <a href="#projects" className='cosmic-button'>
                    View My Work
                </a>
            </div>
        </div>
       </div>
       <div className='absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce'>
         <span className="text-sm text-muted-foreground mb-2">Scroll</span>
         <ArrowDown className="h-5 w-5 text-primary"/>

       </div>

    </section>
  )
}

export default HeroSection