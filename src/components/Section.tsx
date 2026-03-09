import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string | ReactNode;
  subtitle?: string;
  children: ReactNode;
  background?: 'white' | 'gray';
}

export default function Section({ id, title, subtitle, children, background = 'white' }: SectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

  return (
    <section id={id} className={`${bgClass} py-12 sm:py-16 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-1">
            {typeof title === 'string' ? title : title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-1">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
