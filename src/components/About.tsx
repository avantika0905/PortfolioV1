import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Coffee,
  Heart,
  Star,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import { personalInfo } from "@/utils/data";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 },
    }),
  };

  const statsItems = [
    {
      icon: <Code className="h-5 w-5 text-web3-purple" />,
      value: "1+",
      label: "Years of Experience",
    },
    {
      icon: <Coffee className="h-5 w-5 text-web3-pink" />,
      value: "5+",
      label: "Projects Completed",
    },
    {
      icon: <Star className="h-5 w-5 text-web3-blue" />,
      value: "4+",
      label: "Certifications",
    },
    {
      icon: <Heart className="h-5 w-5 text-web3-green" />,
      value: "10+",
      label: "Tech Events",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image/Avatar Side */}
          <motion.div
            className="w-full md:w-2/5"
            custom={1}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-xl overflow-hidden glass glow-border hover-lift">
                <div className="w-full h-full bg-gradient-to-br from-web3-purple/20 to-web3-blue/20 flex items-center justify-center">
                  <div className="p-8 backdrop-blur-sm bg-black/10 rounded-full">
                    <span className="text-6xl">👩‍💻</span>
                  </div>
                </div>
              </div>

              {/* Decoration elements */}
              <motion.div
                className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-web3-purple/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-web3-blue/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Contact Details */}
            <motion.div
              className="mt-8 space-y-3 text-center"
              custom={2}
              variants={variants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 className="text-xl font-bold">{personalInfo.name}</h3>
              <p className="text-muted-foreground">{personalInfo.title}</p>

              <div className="flex items-center justify-center text-sm text-muted-foreground space-x-1">
                <MapPin className="h-4 w-4 text-web3-pink" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="flex justify-center space-x-3 pt-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-full glass hover-glow-pink"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover-glow"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover-glow-blue"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="w-full md:w-3/5">
            <div className="space-y-6">
              <motion.h2
                className="text-2xl md:text-3xl font-bold"
                custom={2}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <span className="text-gradient">About Me</span>
              </motion.h2>

              <motion.p
                className="text-muted-foreground"
                custom={3}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                Full-stack developer with a passion for creating efficient,
                user-friendly applications. I recently completed my Bachelor in
                Computer Application with a strong academic record (CGPA 9.1)
                from SavitriBai Phule University, Pune.
              </motion.p>

              <motion.p
                className="text-muted-foreground"
                custom={4}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                My expertise spans both front-end and back-end technologies,
                with significant experience in JavaScript, React, Node.js,
                Python and Django. I have successfully built and deployed
                property booking platforms, bus pass management systems, and
                various web applications.
              </motion.p>

              <motion.p
                className="text-muted-foreground"
                custom={5}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                In addition to my technical skills, I actively participate in
                hackathons and tech events, where I've honed my problem-solving
                abilities and teamwork skills. I'm constantly learning new
                technologies and frameworks to stay updated with industry
                trends.
              </motion.p>

              <motion.div
                className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
                custom={6}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {statsItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="hover-lift p-4 glass rounded-lg flex flex-col items-center text-center"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(126, 34, 206, 0.3)",
                    }}
                  >
                    <div className="mb-2">{item.icon}</div>
                    <h3 className="text-xl font-mono font-semibold">
                      {item.value}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="pt-4"
                custom={7}
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10 transition-all duration-300"
                  >
                    <a
                      target="_blank"
                      href="https://docs.google.com/document/d/1QPsKreCC0ucZCuH2XQkcr4KeeDOCnuwPo_x0wSqWUcM/edit?tab=t.0#heading=h.ca0awj8022e2"
                    >
                      Resume
                    </a>
                  </Button>
                  <a href="#contact">
                    <Button className="bg-gradient-to-r from-web3-purple to-web3-pink hover:from-web3-purple/90 hover:to-web3-pink/90 transition-all duration-300">
                      Contact Me
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
