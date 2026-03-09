import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  iconColor?: 'pink' | 'blue' | 'navy';
  title: string;
  description: string;
  badge?: string;
  children?: ReactNode;
}

export default function Card({ icon: Icon, iconColor = 'blue', title, description, badge, children }: CardProps) {
  const iconColorClass = {
    pink: 'text-imgenia-pink',
    blue: 'text-imgenia-blue',
    navy: 'text-imgenia-navy'
  }[iconColor];

  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-imgenia-blue/30 transition-all duration-300">
      {Icon && (
        <div className={`${iconColorClass} mb-6`}>
          <Icon className="w-10 h-10" strokeWidth={1.5} />
        </div>
      )}

      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-medium text-imgenia-blue bg-imgenia-blue/10 rounded-full mb-4">
          {badge}
        </span>
      )}

      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4">
        {description}
      </p>

      {children}
    </div>
  );
}
