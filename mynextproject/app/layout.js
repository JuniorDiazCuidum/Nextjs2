
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>

        <nav>
          <h1>Navbar</h1>


          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>

        {children}

      </body>

    </html>
  )
}
