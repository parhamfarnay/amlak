import NextAuthProvider from "@/providers/NextAuthProvider";
import Layout from "@/layout/Layout";
import { yekan } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: " املاک | پروژه پرهام فرنای",
  description: "سایت خرید و فروش املاک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
