import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Etihad Airways - Book Flights, Hotels & Car Rentals',
  description: 'Book flights with Etihad Airways. Discover luxury travel with award-winning service to destinations worldwide. Join Etihad Guest for exclusive benefits.',
  keywords: 'Etihad Airways, flights, travel, airline, luxury travel, Etihad Guest, book flights',
  authors: [{ name: 'Etihad Airways' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">

        {children}
      </body>
    </html>
  )
}
