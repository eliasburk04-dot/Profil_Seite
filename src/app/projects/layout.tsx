import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projekte',
  description: 'Portfolio ausgewählter Projekte aus Web-Entwicklung, Mobile Apps, internen Tools und Performance-Optimierung.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
