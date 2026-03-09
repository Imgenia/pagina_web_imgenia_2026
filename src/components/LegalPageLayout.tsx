import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, subtitle, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 py-8 sm:py-10 md:py-12 pt-20 sm:pt-24 md:pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-imgenia-blue hover:text-imgenia-navy mb-4 sm:mb-6 transition-colors text-xs sm:text-sm font-medium min-h-[44px] items-center"
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
            Volver al inicio
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">{title}</h1>
          {subtitle && <p className="text-base sm:text-lg md:text-xl text-gray-600">{subtitle}</p>}
          {lastUpdated && (
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">Última actualización: {lastUpdated}</p>
          )}
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <article className="legal-content text-gray-700 leading-relaxed space-y-6 [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:font-bold [&_h2]:text-imgenia-navy [&_h2]:mt-8 [&_h2]:sm:mt-12 [&_h2]:mb-3 [&_h2]:sm:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-imgenia-blue/20 [&_h3]:text-base [&_h3]:sm:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:sm:mt-8 [&_h3]:mb-2 [&_h3]:sm:mb-3 [&_p]:mb-3 [&_p]:sm:mb-4 [&_p]:text-sm [&_p]:sm:text-[15px] [&_p]:leading-[1.75] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:sm:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:sm:pl-6 [&_ol]:space-y-2 [&_a]:text-imgenia-blue [&_a]:underline [&_a]:hover:text-imgenia-navy [&_a]:break-all">
          {children}
        </article>
      </div>
    </div>
  );
}
