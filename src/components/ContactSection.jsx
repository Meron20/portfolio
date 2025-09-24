import { Linkedin, Mail, MapPin, Phone, Send} from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/utils'
import { useToast } from '../hooks/use-toast'

const ContactSection = () => {

    const { toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)

    
    const handelSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true)


        setTimeout(() => {
            toast ({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            })
            setIsSubmitting(false)
            
        }, 1500)

    }

  return (
   <section 
     id='contact'
     className='py-24 px-4 relative bg-secondary'
    >
    <div className='container mx-auto max-w-5xl '>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        Get In <span className='text-primary'>Touch</span>
     </h2>
     <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
        I’m always open to discussing new opportunities, collaborations, or just a chat about web development. Feel free to reach out!
     </p>
    
     <div className='grid grid-cols-1 md:grid-cols-2 gap-11'>
       <div className='space-y-8'>
         <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>


          <div className='flex items-start space-x-4'>
                 <div className='p-3 rounded-full bg-primary/10'>
                    <Mail className='h-6 w-6 text-primary'/>
                </div>
                <div>
                 <h4 className='font-medium'>Email</h4>
                    <a  
                      href="mailto:meronbeyene005@gmail.com" 
                      className='text-muted-foreground hover:text-primary transition-colors'
                      >
                        meronbeyene005@gmail.com
                    </a>
                </div>
             </div>
            <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary'/>
                </div>
                <div>
                 <h4 className='font-medium'>Phone</h4>
                 <a 
                   href="tel:+46737317712" 
                   className='text-muted-foreground hover:text-primary transition-colors'
                   > 
                  +46 737 317 712
                 </a>
            </div>
           </div>
           <div className='flex items-start space-x-4'>
               <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin  className='h-6 w-6 text-primary'/>
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                    <a className='text-muted-foreground hover:text-primary transition-colors' >
                        Stockholm, Sweden
                    </a>
                </div>
            </div>

            <div className='pt-8'>
             <h4 className='font-medium mb-4'> Connect With Me </h4>
             <div className='flex space-x-4 justify-center'>
               <a href="#"><Linkedin/></a>
             </div>
            </div>
         </div>

        
            <div className='bg-card p-8 rounded-lg shadow-xs'>
                <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>

                <form className='space-y-6' onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium mb-2'
                        >
                            Your Name
                        </label>
                        <input 
                          type="text" 
                          id='name' 
                          name='name' 
                          required
                          className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                          placeholder='Meron Beyene...'
                        />
                    </div>
                    <div>
                        <label 
                          htmlFor="email" 
                          className='block text-sm font-medium mb-2'
                        >
                            Your Email
                        </label>
                        <input 
                          type="email" 
                          id='email' 
                          name='email' 
                          required
                          className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                          placeholder='john@gmail.com'
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className='block text-sm font-medium mb-2'
                        >
                            Your Message
                        </label>
                        <textarea 
                          id='message' 
                          name='message' 
                          required
                          className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-nome' 
                          placeholder="Hello, I'd like to talk about ..."
                        />
                    </div>

                    <button 
                      type='submit'
                      disabled={isSubmitting}
                      className={cn(
                        'cosmic-button w-full flex items-center justify-center gap-2'
                        )}
                        >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send size={16}/> Send Message
                    </button>
                </form>
            </div>
         </div>
      </div>
    </section>
  )
}

export default ContactSection