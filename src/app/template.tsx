export default function Template({ children }: { children: React.ReactNode }) {
  // No animation wrapper - instant navigation
  return <>{children}</>;
}
