import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Fidara Consulting Inc. | Identity and Cloud Security Architecture',
  description:
    'Independent advisory and architecture services focused on Identity, Cloud Security, and Zero Trust. Vendor-neutral consulting for enterprise IAM modernization and governance.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
