'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, Lock, User, AlertCircle, ArrowLeft } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('admin_duchop');
  const [password, setPassword] = useState('CongAnDucHop@2026');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || 'Đăng nhập không thành công.');
      }

      // Lưu token vào localStorage
      localStorage.setItem('admin_token', data.access_token);
      localStorage.setItem('admin_user', JSON.stringify(data.user));
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Lỗi kết nối máy chủ.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-police-950 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 p-8 text-center text-white relative">
          <Link
            href="/"
            className="absolute top-4 left-4 p-2 rounded-full bg-red-800/60 hover:bg-red-800 text-yellow-300 transition"
            aria-label="Về trang chủ"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div className="w-20 h-20 rounded-full bg-white p-1 flex items-center justify-center mx-auto mb-3 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-cong-an.png" alt="Logo Công an" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-xl font-black tracking-wide uppercase">CÔNG AN XÃ ĐỨC HỢP</h2>
          <p className="text-xs text-yellow-200 mt-1 font-semibold">Tỉnh Hưng Yên • Cổng Quản Trị Hệ Thống Số</p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleLogin} className="p-8 space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Tên đăng nhập cán bộ
            </label>
            <div className="relative flex items-center">
              <User className="w-5 h-5 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập tên đăng nhập"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-police-500 focus:bg-white transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Mật khẩu truy cập
            </label>
            <div className="relative flex items-center">
              <Lock className="w-5 h-5 text-slate-400 absolute left-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-police-500 focus:bg-white transition"
              />
            </div>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] text-slate-500">
            Tài khoản quản trị mặc định: <code className="font-bold text-police-700">admin_duchop</code> / <code className="font-bold text-police-700">CongAnDucHop@2026</code>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-police-700 hover:bg-police-800 text-white font-extrabold py-3.5 px-4 rounded-2xl text-sm shadow-lg hover:shadow-police-800/30 transition transform active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Đang xác thực...' : 'ĐĂNG NHẬP HỆ THỐNG'}
          </button>
        </form>

        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-400">
          Chỉ dành cho cán bộ chiến sĩ Công an xã Đức Hợp được phân công nhiệm vụ.
        </div>
      </div>
    </div>
  );
}
