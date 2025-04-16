import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  MousePointer,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const floatingElements = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const floatingItem = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="section-padding pt-32 md:pt-40 min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>

      {/* Decorative elements */}
      <motion.div
        variants={floatingElements}
        initial="hidden"
        animate="show"
        className="absolute inset-0 pointer-events-none"
      >
        {/* Blob elements with updated animations */}
        <motion.div
          variants={floatingItem}
          className="absolute top-1/4 right-[15%] w-20 h-20 bg-web3-purple/10 rounded-full backdrop-blur-3xl blob"
        />
        <motion.div
          variants={floatingItem}
          className="absolute bottom-1/3 left-[10%] w-32 h-32 bg-web3-pink/10 rounded-full backdrop-blur-3xl blob animation-delay-300"
        />
        <motion.div
          variants={floatingItem}
          className="absolute bottom-1/4 right-[20%] w-24 h-24 bg-web3-blue/10 rounded-full backdrop-blur-3xl blob animation-delay-500"
        />
        <motion.div
          variants={floatingItem}
          className="absolute top-1/3 left-[20%] w-28 h-28 bg-web3-orange/10 rounded-full backdrop-blur-3xl blob animation-delay-200"
        />
      </motion.div>

      <div className="container max-w-4xl relative z-10">
        <motion.div
          className="flex flex-col space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <div className="glass px-4 py-2 w-fit rounded-full mb-4 hover-lift animate-pulse-glow">
              <p className="text-sm font-medium flex items-center">
                <span className="inline-block w-2 h-2 bg-web3-green rounded-full mr-2 animate-pulse"></span>
                Looking for Internship
              </p>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={item}
          >
            <span className="text-gradient">Creative Developer</span> with
            FullStack Expertise
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            variants={item}
          >
            Building modern, responsive web applications with cutting-edge
            technologies and elegant design solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={item}
          >
            <Button className="bg-gradient-to-r from-web3-purple to-web3-blue hover:shadow-glow-lg group transition-all duration-300">
              <a href="#projects">View my work</a>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="border-web3-purple/30 hover:border-web3-purple hover:bg-web3-purple/10 transition-all duration-300 group"
            >
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1QPsKreCC0ucZCuH2XQkcr4KeeDOCnuwPo_x0wSqWUcM/edit?tab=t.0#heading=h.ca0awj8022e2"
              >
                Resume
              </a>
              <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 pt-8"
            variants={item}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover-glow-blue group"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 group-hover:text-web3-blue transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover-glow group"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5 group-hover:text-web3-purple transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover-glow-pink group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 group-hover:text-web3-pink transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a
          href="#about"
          className="text-sm text-muted-foreground flex flex-col items-center group"
        >
          <span className="mb-2 group-hover:text-web3-purple transition-colors">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1 group-hover:border-web3-purple/50 transition-colors">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-web3-purple transition-colors"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
