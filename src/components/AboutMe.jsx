import { Book, Code, GraduationCap, Lectern, Notebook } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
  return (
   <section id="about" className='py-10 px-4 relative'>
    {" "}
    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'> 
                <h3 className='text-xl font-semibold'>Aspiring Full Stack Developer</h3>
                <p className='text-muted-foreground'>As a fresh undergraduate, I do what I love most — creating and solving. 
                    I’m passionate about full stack web development and problem-solving, always exploring new ideas and learning along the way. </p>
                <p className='text-muted-foreground'>
                I’ve gained hands-on experience through a couple of projects and enjoy diving into new technologies 
                    to keep improving my skills. My goal is to keep growing as a developer while contributing to projects 
                    that make a real impact
                </p>
                    
                <div className='flex flex-col sm:flex-row gap-4 justify-center mt-10'>

                    <a href="#contact" className='cosmic-button'> Get In Touch</a>

                    <a href="/Sineth Hansaja.pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300' download>
                    Download CV
                    </a>
                </div>

            </div>

            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover rounded-xl'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <GraduationCap className='text-primary h-6 w-6'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Bachelor of Computer Science</h4>
                            <p className='text-muted-foreground'>University of Colombo School of Computing</p>
                            <p className='text-muted-foreground  '>2022 - Preset</p>
                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover rounded-xl'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Notebook className='text-primary h-6 w-6'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Isipathana College</h4>
                            <p className='text-muted-foreground'>Colombo</p>
                            <p className='text-muted-foreground'>2008 - 2022</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>

   </section>
  )
}

export default AboutMe
