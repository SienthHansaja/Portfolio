import { ArrowRight, Github } from 'lucide-react'
import React from 'react'

const Projects = () => {

    const projects = [
        {
            id:1,
            title:"Daycare Service Management System",
            Description:"A web app that helps parents track their child’s activities and daycare staff manage daily tasks efficiently",
            image:"/projects/daycare.png",
            githubUrl:"https://github.com/SinethHansaja/KiddoVille-UI_UX",
            tags:["html","javaScript","php"]
        },
        {
            id:1,
            title:"Resturant Food Ordering System",
            Description:"A full-stack system for placing and managing food orders, with roles for users, chefs, receptionist and staff",
            image:"/projects/foody.png",
            githubUrl:"https://github.com/SinethHansaja/Food-Ordering-System-MERN",
            tags:["react","node","express","mongodb"]
        },
        {
            id:1,
            title:"Simple Spring Boot User Management Application",
            Description:"A lightweight application for managing user accounts with CRUD operations, built using Spring Boot.",
            image:"/projects/user.png",
            githubUrl:"https://github.com/SinethHansaja/-Java-React-REST-API-User-Management-",
            tags:["springboot","java","react"]
        }

    ]
  return (
    <section id="projects" className='py-24 px-24 relative'>

        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            My <span className='text-primary'>Projects</span></h2>
            <p className='text-muted-foreground mb-14 pl-40 pr-40'>Here are a few of the projects I’ve built to sharpen my skills 
                and explore real-world applications of web and software development.</p>

            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {projects.map((project,key) => (
                    <div key ={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        </div>

                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tags.map((tag,key) => (
                                    <div className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground' key={key}> {tag}</div>

                                ))}
                            </div>
                        

                        <h4 className='text-xl font-semibold mb-2' >{project.title}</h4>
                        <p className='text-muted-foreground text-sm mb-4'>{project.Description}</p>
                        <div className='flex justify-center '>
                            <a href={project.githubUrl}
                            target='_blank'
                            className='text-foreground/80 hover"text-primary transition-colors duration-300'><Github size={20}/></a>
                        </div>
                         </div>           
                    </div>

                ))}
            </div>

            <div className='text-center mt-12'>
                <a href="https://github.com/SienthHansaja" className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank'>
                    Visit My Github <ArrowRight size={16}/></a>
            </div>

        </div>

    </section>
  )
}

export default Projects
