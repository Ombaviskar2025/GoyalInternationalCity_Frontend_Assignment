import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Goyal International City | Luxury Township in Gwalior',
  description: 'A refined, responsive showcase for Goyal International City — luxury villas, plots and world-class amenities in Gwalior.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
