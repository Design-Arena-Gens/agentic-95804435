export const metadata = {
  title: 'Epic Gaming Banners',
  description: '14K Ultra HD Gaming Banners with Anime Characters',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000' }}>
        {children}
      </body>
    </html>
  )
}
