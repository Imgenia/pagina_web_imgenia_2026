import { createElement } from 'react';
import { pdf } from '@react-pdf/renderer';
import { DossierDocument } from '../components/DossierDocument';

const FILENAME = 'IMGENIA-Dossier-Corporativo-2026.pdf';

export async function downloadDossierPdf(): Promise<void> {
  const blob = await pdf(createElement(DossierDocument)).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = FILENAME;
  a.click();
  URL.revokeObjectURL(url);
}
