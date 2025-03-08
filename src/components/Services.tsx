import React from 'react';
import { CheckCircle, Users, Building, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Compliance Assessment',
    price: '$499',
    description: 'Complete evaluation of your current cybersecurity compliance status',
    features: [
      'Gap analysis report',
      'Risk assessment',
      'Compliance roadmap',
      'Priority recommendations',
    ],
    color: 'from-blue-500 to-blue-600',
    icon: Building,
  },
  {
    title: 'Enterprise Solutions',
    price: '$1,999',
    description: 'Comprehensive compliance and cybersecurity management',
    features: [
      'Full compliance audit',
      'Custom security framework',
      'Staff training program',
      '24/7 support access',
    ],
    color: 'from-purple-500 to-purple-600',
    icon: Users,
    popular: true,
  },
  {
    title: 'Consulting Services',
    price: '$299',
    description: 'Expert guidance for specific compliance needs',
    features: [
      'One-on-one consultation',
      'Specific regulation guidance',
      'Implementation support',
      'Documentation review',
    ],
    color: 'from-green-500 to-green-600',
    icon: CheckCircle,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
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
      className={`relative rounded-2xl ${service.popular ? 'ring-2 ring-blue-500' : ''}`}
    >
      <div className="relative z-10 rounded-2xl bg-white p-8 shadow-xl">
        {service.popular && (
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              Popular
            </span>
          </div>
        )}
        <div className={`inline-flex rounded-xl bg-gradient-to-r ${service.color} p-3`}>
          <service.icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
        <p className="mt-2 text-gray-500">{service.description}</p>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{service.price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        <ul className="mt-8 space-y-4">
          {service.features.map((feature) => (
            <motion.li
              key={feature}
              className="flex items-center"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="ml-3 text-gray-600">{feature}</span>
            </motion.li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-8 w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${service.color} px-6 py-3 text-white transition-all duration-200 hover:opacity-90`}
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Compliance Solution
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Select the service package that best fits your organization's needs and compliance requirements.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;