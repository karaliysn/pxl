"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
