import '@fontsource/syne/600.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@/styles/tokens.css';
import '@/styles/base.css';
import '@/styles/chrome.css';
import '@/styles/sections.css';

export const metadata = {
  title: 'Shivam — Full-Stack Developer & Creative Technologist',
  description:
    'Shivam — full-stack developer, creative technologist, cybersecurity enthusiast and AI product builder. An immersive 3D portfolio.',
};

export const viewport = {
  themeColor: '#f3f1ee',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="is-loading">
      <body>{children}</body>
    </html>
  );
}
