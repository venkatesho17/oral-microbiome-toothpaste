import './globals.css'

export const metadata = {
  title: 'Oral Microbiome Toothpaste',
  description: 'Oral Microbiome Toothpaste — landing page',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
