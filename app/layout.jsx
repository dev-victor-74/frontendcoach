import { Inter} from 'next/font/google';
import './globals.css';

import ModalProvider from '@/providers/modal-provider';
import AuthProvider from '@/providers/session-provider';
import ToastProvider from '@/providers/toast-provider';

const inter = Inter({subsets: ['latin']});

   //
export const metadata = {
  title: 'frontendcoach',
  description: 'learn to build frontend projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id='lay'>
          <AuthProvider>
            <ToastProvider/>
            <ModalProvider/>
            {children}
          </AuthProvider>
      </body>
    </html>
  )
}
