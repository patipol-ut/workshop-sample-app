export const metadata = {
  title: 'Workshop Sample App',
  description: 'Deployed by Jenkins as part of the Git/GitHub/Jenkins workshop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
