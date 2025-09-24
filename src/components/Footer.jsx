import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col tems-center gap-4'>
        <p className='text-muted-foreground text-sm text-center '> 
          &copy; {new Date().getFullYear()} MeronBey.co. All rights reserved.
        </p>
        <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
            <ArrowUp size={20}/>
        </a>

    </footer>
  )
}

export default Footer