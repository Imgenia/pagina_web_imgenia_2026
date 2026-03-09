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
      <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 py-12 pt-28">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-imgenia-blue hover:text-imgenia-navy mb-6 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{title}</h1>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
          {lastUpdated && (
            <p className="mt-4 text-sm text-gray-500">Última actualización: {lastUpdated}</p>
          )}
        </div>
      </div>

      <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        <article className="legal-content text-gray-700 leading-relaxed space-y-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-imgenia-navy [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-imgenia-blue/20 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:text-[15px] [&_p]:leading-[1.75] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_a]:text-imgenia-blue [&_a]:underline [&_a]:hover:text-imgenia-navy">
          {children}
        </article>
      </div>
    </div>
  );
}
