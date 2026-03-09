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
    <section id={id} className={`${bgClass} py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {typeof title === 'string' ? title : title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
