import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/nav/Sidebar'
 
export const metadata: Metadata = {
  title: 'Himalaya Jet - Book Flights, Hotels & Car Rentals',
  description: 'Book flights with Himalaya Jet. Discover luxury travel with award-winning service to destinations worldwide. Join Himalaya Club for exclusive benefits.',
  keywords: 'Himalaya Jet, flights, travel, airline, luxury travel, Himalaya Club, book flights',
  authors: [{ name: 'Himalaya Jet' }],
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
        <div className="flex md:flex-row flex-col">

          {/* Sidebar fixed to the left */}
          <nav
            id="sideBar"
            className="md:h-screen md:sticky md:top-0 md:left-0 md:z-50"
          >
            <Sidebar />
          </nav>

          {/* Main content scrolls independently */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
  
    </html>
  )
}
