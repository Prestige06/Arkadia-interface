import './globals.css'; // or whatever your global CSS file is named
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">{children}</body>
    </html>
  );
}
