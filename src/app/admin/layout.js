"use client";
import { ThemeProvider } from "../components/providers/Themeprovider";

export default function AdminLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
