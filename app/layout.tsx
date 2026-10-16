import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  metadataBase: new URL('https://smartattend.vercel.app'),
  title: {
    default: 'SmartAttend | Student Attendance Management System',
    template: '%s | SmartAttend',
  },
  description:
    'SmartAttend is a modern student attendance management system for colleges, with live insights, class tracking, reports, and student records.',
  applicationName: 'SmartAttend',
  keywords: [
    'SmartAttend',
    'student attendance management',
    'college attendance system',
    'attendance dashboard',
    'student records',
    'class attendance reports',
  ],
  authors: [{ name: 'SmartAttend' }],
  creator: 'SmartAttend',
  publisher: 'SmartAttend',
  category: 'education',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    shortcut: ['/icon.png'],
    apple: [{ url: '/icon.png', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'SmartAttend',
    title: 'SmartAttend | Student Attendance Management System',
    description:
      'Manage college attendance, students, classes, and reports from one clear dashboard.',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'SmartAttend app icon' }],
  },
  twitter: {
    card: 'summary',
    title: 'SmartAttend | Student Attendance Management System',
    description:
      'Manage college attendance, students, classes, and reports from one clear dashboard.',
    images: ['/icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-color-mode="light"
      data-light-theme="light"
      data-dark-theme="dark"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
