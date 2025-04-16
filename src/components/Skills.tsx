
import { skills } from '@/utils/data';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const categories = Array.from(
    new Set(skills.map(skill => skill.category))
  );
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;
    
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  // Color mapping for categories
  const categoryColors = {
    frontend: 'from-web3-purple to-web3-pink',
    backend: 'from-web3-blue to-web3-teal',
    web3: 'from-web3-yellow to-web3-orange',
    design: 'from-web3-teal to-web3-blue',
    other: 'from-web3-pink to-web3-purple'
  };

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
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
            <span className="text-gradient">Tech Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to create modern web experiences
          </p>
        </motion.div>
        
        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant={!activeCategory ? "default" : "outline"}
            className={!activeCategory ? "bg-gradient-to-r from-web3-purple to-web3-blue hover:from-web3-purple/90 hover:to-web3-blue/90" : "border-web3-purple/30"}
            onClick={() => setActiveCategory(null)}
          >
            All
          </Button>
          
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? 
                `bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} hover:opacity-90` : 
                "border-web3-purple/30"}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              variants={item} 
              custom={index}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className={`glass hover:shadow-glow transition-all duration-300 group h-full border border-white/10 hover:border-${skill.category === 'frontend' ? 'web3-purple' : skill.category === 'backend' ? 'web3-blue' : 'web3-orange'}/30`}>
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <motion.div 
                    className="text-3xl mb-3 p-3 rounded-full bg-secondary/50"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <motion.h3 
                    className="font-medium text-center"
                    whileHover={{ 
                      color: skill.category === 'frontend' ? '#8B5CF6' : 
                             skill.category === 'backend' ? '#3B82F6' : 
                             '#F97316',
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {skill.name}
                  </motion.h3>
                  <motion.span 
                    className="text-xs text-muted-foreground mt-1 capitalize opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {skill.category}
                  </motion.span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
