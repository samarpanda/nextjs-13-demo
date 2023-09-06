import './globals.css'

export const metadata = {
  title: 'Next.js + TypeScript Starter',
  description: 'Nextjs 13 demo ',
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/xkcd', label: 'Xkcd' },
  { href: '/form', label: 'Form' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="py-5">
          <nav>
            <ul className="flex items-center">
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`} className="ml-6">
                  <a href={href} className="text-blue-500 hover:text-blue-800">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
