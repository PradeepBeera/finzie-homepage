export const metadata = {
  title: 'Finzie AI Homepage',
  description: 'Get work done — with AI agents or expert freelancers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
