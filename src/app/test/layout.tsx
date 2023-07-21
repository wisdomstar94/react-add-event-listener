import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'react-add-event-listener test',
  description: 'react-add-event-listener test',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
