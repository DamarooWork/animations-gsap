import { Suspense } from 'react'
import Header from './components/header'
import './globals.css'
import Loading from './loading'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <title>Animated world</title>
      </head>
      <body>
        <Suspense fallback={<Loading/>}> 
          <Header />
          <main className="mt-20">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
