
import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, ArrowRight } from "lucide-react";
import { projects } from '@/utils/data';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Extract all unique tags from projects
  const categories = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  const filteredProjects = filter 
    ? projects.filter(project => project.tags.includes(filter))
    : projects;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise in full-stack development
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant={!filter ? "default" : "outline"}
            className={!filter ? "bg-gradient-to-r from-web3-purple to-web3-pink hover:from-web3-purple/90 hover:to-web3-pink/90 hover-lift" : "border-web3-purple/30 hover:border-web3-purple hover-lift"}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          
          {categories.map((category) => (
            <Button 
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-gradient-to-r from-web3-purple to-web3-pink hover:from-web3-purple/90 hover:to-web3-pink/90 hover-lift" : "border-web3-purple/30 hover:border-web3-purple hover-lift"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={item} 
              custom={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="glass hover:shadow-glow transition-all duration-300 group overflow-hidden border-white/5 hover:border-web3-purple/30 h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <div className="w-full h-full bg-gradient-to-br from-web3-purple/20 to-web3-blue/20 absolute z-10"></div>
                  
                  {/* Animated overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-web3-purple/70 to-web3-pink/70 z-20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: hoveredIndex === index ? 1 : 0.8,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" size="sm" className="bg-background/80 backdrop-blur-md mr-2">
                            Live Demo
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      )}
                      
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" size="sm" className="bg-background/80 backdrop-blur-md">
                            View Code
                            <Github className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                  
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Code className="h-4 w-4 text-web3-purple" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-web3-purple/30 bg-web3-purple/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass hover-glow"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass hover-glow"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  
                  <Button size="sm" variant="outline" className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10 hover-lift">
                    Details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
