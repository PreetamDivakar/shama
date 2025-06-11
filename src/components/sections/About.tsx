import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, TrendingUp, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { icon: <TrendingUp size={24} />, value: '21.25%', label: 'Organic Growth' },
    { icon: <Target size={24} />, value: '5.19%', label: 'Conversion Rate' },
    { icon: <Award size={24} />, value: '57K+', label: 'Peak Sessions' },
    { icon: <Users size={24} />, value: '23%', label: 'Brand Growth' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,52,218,0.03),rgba(0,0,0,0)_50%)]"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header Section with Image and Title */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 mb-12">
            <motion.div variants={itemVariants} className="relative flex-shrink-0">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden magic-card p-1">
                <div className="h-full w-full rounded-xl overflow-hidden relative">
                  <img
                    src="/Shama.png"
                    alt="SEO Copywriter at work"
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-transparent opacity-40"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-accent-blue/10 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-accent-purple/10 blur-xl"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex-1">
              <span className="inline-block text-accent-blue mb-12">ABOUT ME</span>
              <h2 className="heading-lg mb-6">Every brand has a backstory. Making sure it's heard, loved, and remembered is my responsibility.</h2>
            </motion.div>
          </div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="subtitle mb-6">
              I'm Shama, an SEO copywriter who creates captivating narratives that rank and convert by fusing creativity and data-driven strategy. I know how to create content that does more than just sit on a page; with an MBA in Marketing and practical experience in digital content, I can draw readers in, encourage clicks, and convert them into customers.
            </p>
            <p className="text-text-primary">
              When I'm not writing copy, I'm engrossed in Bharatanatyam, a dance style that emphasizes rhythm, narrative, and connection—all of which are similar to marketing. I apply the same enthusiasm to my work, producing content that is impactful and flows naturally.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 magic-card glow-effect"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-blue/10 text-accent-blue mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
