
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BriefcaseBusiness, Calendar, GraduationCap, Award, Star, Coffee, Sparkles, Medal } from "lucide-react";
import { education, certificates, awards } from "@/utils/data";

const experiences = [
  {
    title: "Bachelor In Computer Application",
    company: "SavitriBai Phule University, Pune",
    date: "2021 - 2024",
    description: "CGPA - 9.1",
    icon: GraduationCap,
    type: "education",
    achievements: ["Focused on Computer Science and Applications", "Developed strong foundation in programming and software development"]
  },
  {
    title: "AWS Academy Graduate",
    company: "AWS Academy Cloud Foundations",
    date: "2023",
    description: "Comprehensive cloud computing certification focusing on AWS services and cloud architecture.",
    icon: Medal,
    type: "certificate",
    achievements: ["Cloud infrastructure management", "Understanding AWS services ecosystem", "Deployment strategies"]
  },
  {
    title: "Machine Learning Programme",
    company: "Barclays (Citizenship Cohort –1)",
    date: "2022",
    description: "In-depth training on machine learning concepts, algorithms, and applications in finance.",
    icon: Medal,
    type: "certificate",
    achievements: ["Algorithm implementation", "Data analysis", "Predictive modeling"]
  },
  {
    title: "Python for Data Science",
    company: "Infosys | SpringBoard",
    date: "2022",
    description: "Specialized course on utilizing Python for data manipulation, visualization, and analysis.",
    icon: Medal,
    type: "certificate",
    achievements: ["Data visualization", "Statistical analysis", "Data pipelines"]
  },
  {
    title: "AI Python Programming",
    company: "Hope Foundation",
    date: "2022",
    description: "Training program focused on implementing AI algorithms using Python.",
    icon: Medal,
    type: "certificate",
    achievements: ["Neural networks", "Natural language processing", "Computer vision basics"]
  },
];

const Achievement = ({ achievement }: { achievement: string }) => (
  <div className="flex items-center text-xs text-muted-foreground mt-1.5">
    <Sparkles className="h-3 w-3 text-web3-yellow mr-1.5" />
    <span>{achievement}</span>
  </div>
);

const TimelineItem = ({ experience, index }: { experience: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;
  
  // More dynamic animations
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  // Determine the color based on the type
  const getTypeColor = (type: string) => {
    switch(type) {
      case 'education': return 'from-web3-blue to-web3-teal';
      case 'certificate': return 'from-web3-purple to-web3-pink';
      case 'award': return 'from-web3-orange to-web3-yellow';
      default: return 'from-web3-purple to-web3-pink';
    }
  };

  return (
    <motion.div 
      ref={ref}
      className={`timeline-item mb-16 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="timeline-marker">
        <motion.div 
          className={`absolute w-full h-full bg-gradient-to-r ${getTypeColor(experience.type)} rounded-full`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
        />
      </div>
      
      <motion.div 
        ref={itemRef}
        className={`w-full md:w-5/12 pl-6 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
        style={{ scale, opacity }}
      >
        <motion.div 
          className="glass p-6 rounded-lg card-hover relative overflow-hidden"
          whileHover={{ 
            y: -5, 
            boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)"
          }}
        >
          {/* Background glow effect */}
          <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r ${getTypeColor(experience.type)} rounded-full blur-3xl opacity-20`}></div>
          
          <div className="flex items-center mb-3">
            <div className={`p-2 rounded-full bg-gradient-to-r ${getTypeColor(experience.type)} bg-opacity-10 mr-3`}>
              <experience.icon className={`h-5 w-5 ${experience.type === 'education' ? 'text-web3-blue' : experience.type === 'certificate' ? 'text-web3-purple' : 'text-web3-orange'}`} />
            </div>
            <h3 className="font-bold text-lg">{experience.title}</h3>
          </div>
          
          <div className="mb-3">
            <div className="text-sm text-muted-foreground flex items-center">
              <span className={`font-medium ${experience.type === 'education' ? 'text-web3-blue' : experience.type === 'certificate' ? 'text-web3-purple' : 'text-web3-orange'}`}>
                {experience.company}
              </span>
            </div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{experience.date}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">{experience.description}</p>
          
          {/* Achievements section */}
          <div className="mt-3 space-y-1">
            {experience.achievements.map((achievement: string, i: number) => (
              <Achievement key={i} achievement={achievement} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Education & Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational background and professional certifications that shaped my expertise
          </p>
        </motion.div>
        
        <div className="timeline-container px-4">
          <motion.div 
            className="timeline-line"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
          
          {/* Awards Section */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              <span className="text-gradient-alt">Awards & Achievements</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  className="glass p-6 rounded-lg hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx + 0.4 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3)" }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-full bg-web3-orange/10 mr-3">
                      <Award className="h-5 w-5 text-web3-orange" />
                    </div>
                    <h3 className="font-bold text-lg">{award.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
