'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link
        href='/'
        className='flex items-center text-gray-600 hover:text-primary transition-colors'
      >
        <Home size={16} className='mr-1' />
        Início
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={16} className='text-gray-400' />
          {item.href ? (
            <Link
              href={item.href}
              className='text-gray-600 hover:text-primary transition-colors'
            >
              {item.label}
            </Link>
          ) : (
            <span className='text-primary font-medium'>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
