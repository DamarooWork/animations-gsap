import Header from './components/header/Header'
import './globals.css'

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
        <Header />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  )
}
