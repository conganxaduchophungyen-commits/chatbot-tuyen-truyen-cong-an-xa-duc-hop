'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { recordPageVisit } from '@/lib/api';

export default function PageVisitTracker() {
  const pathname = usePathname();
  const lastRecordedPath = useRef<string | null>(null);

  useEffect(() => {
    // Tránh ghi nhận trùng lặp trong cùng 1 lần chuyển trang
    if (lastRecordedPath.current === pathname) return;
    lastRecordedPath.current = pathname;

    const timer = setTimeout(() => {
      try {
        recordPageVisit(pathname, document.title, document.referrer);
      } catch (e) {
        // Bỏ qua lỗi
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
