import React from 'react'

const HeroSection = () => {
  return (
   <section id="hero" className='realtive min-h-screen flex flex-col items-center justify-center px-4'>

    <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                <span className='text-primary opacity-0 animate-fade-in-delay-1'> Sineth</span>
                <span className='text-gradient opacity-2 ml-2 animate-fade-in-delay-2'> Hansaja</span>
            </h1>

            <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                I enjoy building digital solutions that are simple, effective, and user-friendly. 
                Along with full stack development, I love tackling challenges through problem-solving and creative thinking
            </p>

            <div className='pt-4 animate-fade-in-delay-4 opacity-0'>
                <button className='cosmic-button '>
                    <a href="#projects">View my work</a>
                </button>
            </div>
        </div>
    </div>

   </section>
  )
}

export default HeroSection
