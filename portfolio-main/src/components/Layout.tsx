import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen gradient-hero">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}