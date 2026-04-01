'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  background = 'white',
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        background === 'gray' ? 'bg-gray-50' : 'bg-white',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};