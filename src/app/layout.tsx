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
            <div className='flex flex-1'>
              <nav id='sideBar'>
                <Sidebar/>
              </nav>
              <div className='w-full'>
              {children}
              </div>
            </div>
          </body>
  
    </html>
  )
}
