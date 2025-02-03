import Header from './components/header/Header'
import './globals.css'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-20 ">{children}</main>
      </body>
    </html>
  )
}
