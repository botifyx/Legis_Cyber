import React from 'react';
import { Shield, Book, Globe, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    name: 'Global Compliance',
    description: 'Stay compliant with international cybersecurity regulations including GDPR, CCPA, and more.',
    icon: Globe,
    color: 'bg-blue-500',
  },
  {
    name: 'Expert Guidance',
    description: 'Access comprehensive guides and expert advice on implementing cybersecurity measures.',
    icon: Book,
    color: 'bg-green-500',
  },
  {
    name: 'Real-time Updates',
    description: 'Get instant notifications about new regulations and compliance requirements.',
    icon: Bell,
    color: 'bg-purple-500',
  },
  {
    name: 'Security First',
    description: 'Implement robust security measures with our detailed security frameworks.',
    icon: Shield,
    color: 'bg-red-500',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className={`absolute top-0 left-0 w-2 h-full ${feature.color} rounded-l-xl`} />
      <div className="flex items-center">
        <div className={`flex items-center justify-center h-12 w-12 rounded-md ${feature.color} text-white`}>
          <feature.icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        className="mt-4 text-base text-gray-500"
      >
        {feature.description}
      </motion.p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4"
      >
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
          Learn more
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="lg:text-center"
        >
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Cybersecurity Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to manage your organization's cybersecurity compliance effectively.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard key={feature.name} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;