import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    {
      category: 'Core Skills',
      items: [
        { name: 'Creative Copywriting', level: 100 },
        { name: 'SEO & Content Strategy', level: 100 },
        { name: 'Storytelling', level: 100 },
        { name: 'Brand voice building', level: 100 },
        { name: 'Conceptual thinking', level: 100 },
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'ChatGPT, Gemini, Claude, Perplexity', level: 100 },
        { name: 'Content Management Systems (Shopify)', level: 100 },
        { name: 'Google AdWords, Google Search Console', level: 100 },
        { name: 'Google Analytics', level: 100 },
      ],
    },
    {
      category: 'Strategy & Collaboration',
      items: [
        { name: 'Consumer Insights & Market Research', level: 100 },
        { name: 'Time Management & Communication', level: 100 },
        { name: 'Collaborative Execution', level: 100 },
        { name: 'AI-Assisted Keyword Clustering', level: 100 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent-blue mb-4">EXPERTISE</span>
          <h2 className="heading-lg mb-6">My Professional Skills</h2>
          <p className="subtitle">
            I've developed a comprehensive skill set in SEO copywriting and content strategy,
            focusing on creating content that both ranks well and converts effectively.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="magic-card p-8"
            >
              <h3 className="heading-sm mb-6 bg-gradient-to-r from-accent-blue to-accent-purple text-transparent bg-clip-text">
                {skillGroup.category}
              </h3>

              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex mb-2">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
