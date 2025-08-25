import React, { useState } from 'react'
import { FaCss3, FaDocker, FaFigma, FaGithub, FaHtml5, FaJava, FaJs, FaLinux, FaNode, FaPython, FaReact } from 'react-icons/fa'
import {  SiExpo, SiExpress, SiMongodb, SiMysql, SiNestjs, SiPostgresql } from 'react-icons/si'
import { cn } from '../lib/utils';

const TechSkills = () => {

    const skillSet = [
        {name:"C/C++", category:"programming",logo:<FaReact className='w-8 h-8' />},
        {name:"JavaScript", category:"programming",logo:<FaJs className='w-8 h-8'/>},
        {name:"Python", category:"programming",logo:<FaPython className='w-8 h-8'/>},
        {name:"Java", category:"programming",logo:<FaJava    className='w-8 h-8'/>},

        {name:"React", category:"frontend",logo:<FaReact className='w-8 h-8'/>},
        {name:"React Native", category:"frontend",logo:<FaReact className='w-8 h-8'/>},
        {name:"HTML", category:"frontend",logo:<FaHtml5 className='w-8 h-8'/>},
         {name:"CSS", category:"frontend",logo:<FaCss3 className='w-8 h-8'/>},
        {name:"Expo", category:"frontend",logo:<SiExpo className='w-8 h-8'/>},

        {name:"NodeJS", category:"backend",logo:<FaNode className='w-8 h-8'/>},
        {name:"Express", category:"backend",logo:<SiExpress className='w-8 h-8'/>},
        {name:"NestJS", category:"backend",logo:<SiNestjs className='w-8 h-8'/>},

        {name:"MySQL", category:"database",logo:<SiMysql className='w-8 h-8'/>},
        {name:"MongoDB", category:"database",logo:<SiMongodb className='w-8 h-8'/>},
        {name:"PostgreSQL", category:"database",logo:<SiPostgresql className='w-8 h-8'/>},

        {name:"Git/GitHub", category:"tools",logo:<FaGithub className='w-8 h-8'/>},
        {name:"Docker", category:"tools",logo:<FaDocker className='w-8 h-8'/>},
        {name:"Figma", category:"tools",logo:<FaFigma className='w-8 h-8'/>},
        {name:"Linux", category:"database",logo:<FaLinux className='w-8 h-8'/>},


    ];
    const categories = ["frontend", "backend", "programming", "database", "tools"]

    const [activeCategory, setActiveCategory] = useState("frontend")
    const filteredSkills = skillSet.filter((skill) => skill.category === activeCategory)
  return (
    <section id="skills" className='py-24 px-4 relative bg-seconday/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                Skills<span className='text-primary'> | Technologies</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-6 mb-12 '>
                {categories.map((category,key)=>(
                    <button 
                    key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                    >{category}</button>

                ))}
            </div>

            <div className='grid grid-cols- sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredSkills.map((skill, index) =>(
                     <div 
                     key={index} className='bg-card p-6 rounded-lg shadow-x5 card-hover'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-left'>{skill.name}</h3>
                            <div>{skill.logo}</div>
                        </div>
                    
                    </div>
                ))}
            </div>
           
        </div>


    </section>
  )
}

export default TechSkills


// activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"