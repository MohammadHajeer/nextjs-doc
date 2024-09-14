import { Metadata } from "next";
import "@/app/ui/global.css"
import { inter } from "./ui/fonts";


export const metadata:Metadata = {
  title: "Acme",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
