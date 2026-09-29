'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LuxuryQRPosterStudio from '@/components/LuxuryQRPosterStudio';

export default function PropagandaQRPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
        <div className="max-w-5xl mx-auto">
          <LuxuryQRPosterStudio initialUrl="https://conganxaduchop.hungyen.gov.vn" />
        </div>
      </main>
      <Footer />
    </>
  );
}
