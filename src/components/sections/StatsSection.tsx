'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MapPin, Star, Calendar, Award, Heart } from 'lucide-react';

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Clientes Satisfeitos',
      color: 'text-primary',
    },
    {
      icon: MapPin,
      value: 50,
      suffix: '+',
      label: 'Destinos Visitados',
      color: 'text-secondary',
    },
    {
      icon: Star,
      value: 5.0,
      suffix: '',
      label: 'Avaliação Média',
      decimals: 1,
      color: 'text-yellow-500',
    },
    {
      icon: Calendar,
      value: 10,
      suffix: '+',
      label: 'Anos de Experiência',
      color: 'text-green-500',
    },
    {
      icon: Award,
      value: 100,
      suffix: '%',
      label: 'Tours Privados',
      color: 'text-purple-500',
    },
    {
      icon: Heart,
      value: 98,
      suffix: '%',
      label: 'Taxa de Recomendação',
      color: 'text-red-500',
    },
  ];

  const AnimatedCounter = ({ value, suffix, decimals = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        const duration = 2000; // 2 segundos
        const steps = 50;
        const stepValue = value / steps;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          if (currentStep <= steps) {
            setCount(stepValue * currentStep);
          } else {
            setCount(value);
            clearInterval(timer);
          }
        }, stepDuration);

        return () => clearInterval(timer);
      }
    }, [value, inView]);

    return (
      <span className='text-4xl font-bold'>
        {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
        {suffix}
      </span>
    );
  };

  return (
    <section className='py-20 bg-gradient-to-r from-primary to-primary-700 text-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Números que Falam por <span className='text-secondary'>Nós</span>
          </h2>
          <p className='text-xl opacity-90 max-w-3xl mx-auto'>
            A nossa dedicação e paixão refletem-se em cada número, cada
            experiência e cada sorriso dos nossos clientes
          </p>
        </motion.div>

        <div
          ref={ref}
          className='grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group'>
                <stat.icon
                  className={`mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`}
                  size={40}
                />
                <div className='mb-2'>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className='text-sm opacity-90'>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-12'
        >
          <p className='text-lg opacity-90 italic'>
            "Cada número representa uma história, uma aventura, um momento único
            partilhado com os nossos clientes"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
