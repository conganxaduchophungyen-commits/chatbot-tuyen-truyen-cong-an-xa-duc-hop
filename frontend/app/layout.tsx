import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Trợ lý Pháp luật & TTHC | Công an xã Đức Hợp, Hưng Yên",
  description: "Cổng thông tin tuyên truyền pháp luật, cảnh báo thủ đoạn tội phạm và hỗ trợ tra cứu thủ tục hành chính trực tuyến của Công an xã Đức Hợp, huyện Kim Động, tỉnh Hưng Yên.",
  keywords: ["Công an xã Đức Hợp", "Thủ tục hành chính", "Đăng ký cư trú", "Căn cước VNeID", "Cảnh báo lừa đảo", "Kim Động Hưng Yên"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-police-100 selection:text-police-900">
        {children}
      </body>
    </html>
  );
}
