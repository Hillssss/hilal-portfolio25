
import { Bai_Jamjuree } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import { Toaster } from '@/components/ui/toaster';
import { TransitionProvider } from '@/context/TransitionContext';
import TransitionComponent from '@/components/TransitionComponent';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bai-jamjuree-extralight',
});

export const metadata = {
  title: 'Hilllsss',
  description: 'Portfolio website of Hilal Hibatullah Agus',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baiJamjuree.variable}>
        <Header />
        <TransitionProvider>
          <TransitionComponent>{children}</TransitionComponent>
        </TransitionProvider>
        <Toaster />
      </body>
    </html>
  );
}
