import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akram`s | Portfolio',
  description: 'Akram Abuhajar Works and Contacts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}