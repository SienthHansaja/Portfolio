import { Linkedin, Phone } from 'lucide-react'
import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { SiMailboxdotorg, SiMailchimp } from 'react-icons/si'

const Contact = () => {
  return (
    <section id="contact" className='py-24 px-4 relative bg-secondary'>

         <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                Get In <span className='text-primary'>Touch</span>
                <h4 className='text-xl font-semibold text-center mt-3 text-foreground/80' >Let's Connect</h4>
            </h2>
            

            <p className='text-center text-muted-foreground mb-12 max-w02xl mx-auto mr-40 ml-40'>I’m always open to new opportunities and collaborations.
                 Feel free to reach out via email, LinkedIn for
                  any project inquiries or professional connections</p>

                  <div className='flex flex-wrap justify-center gap-12'>
                    <div className='space-y-8'>
                        

                         <div className='flex flex-wrap gap-12 mb-4'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <FaMailBulk className='h-6 w-6 text-primary'/>
                                </div>
                                <div >
                                    <h4 className='font-medium text-left'>Email</h4>
                                    <a href="#" 
                                    className='text-foreground/80 hover:primary transition-colors duration-300'>
                                        sgamage149@gmail.com</a>

                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary'/>
                                </div>
                                <div >
                                    <h4 className='font-medium text-left'>Phone</h4>
                                    <a href="mailto:sgamage149@gmail.com" 
                                    className='text-foreground/80 hover:primary transition-colors duration-300'>
                                        +94 717 331 441</a>

                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Linkedin className='h-6 w-6 text-primary'/>
                                </div>
                                <div >
                                    <h4 className='font-medium text-left'>LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/sineth-hansaja-gamage-8b7b022a8/" 
                                    className='text-foreground/80 hover:primary transition-colors duration-300'>
                                       in/sinethgamage </a>

                                </div>
                            </div>
                        </div>  
                    </div>

                   


                  </div>
        </div>


    </section>
  )
}

export default Contact
