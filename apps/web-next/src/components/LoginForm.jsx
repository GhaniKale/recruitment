'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const supabase = createClient();
        const { error: authError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (authError) {
            console.error('Auth Error:', authError);
            setError(authError.message === 'Invalid login credentials'
                ? 'Email atau kata sandi salah.'
                : 'Terjadi kesalahan saat masuk. Silakan coba lagi.');
            setIsLoading(false);
        } else {
            // Check role if needed, or let middleware/layout handle it.
            // Requirement: "cek profiles.role dari user id, harus 'admin'"
            // We can check it here to give immediate feedback.
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const { data: profile, error: profileError } = await supabase
                    .from('users')
                    .select('role')
                    .eq('id', user.id)
                    .single();

                if (profileError) {
                    console.error('Error fetching profile:', profileError);
                }

                if (!profile || profile?.role !== 'admin') {
                    console.warn('Access denied. Profile:', profile);
                    await supabase.auth.signOut();
                    setError(profileError
                        ? `Gagal memuat profil: ${profileError.message}`
                        : 'Akun Anda tidak terdaftar sebagai admin di sistem.');
                    setIsLoading(false);
                    return;
                }
            }

            // Refresh router to update middleware/server components
            router.refresh();
            router.push('/admin/dashboard');
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 py-10 px-6 shadow-xl shadow-slate-200/50 dark:shadow-none rounded-xl border border-slate-100 dark:border-slate-700 sm:px-10">
            {error && (
                <div className="mb-6 rounded-lg bg-red-50 dark:bg-red-900/20 p-4 border border-red-100 dark:border-red-800/30 flex items-start gap-3">
                    <span className="material-icons text-red-500 text-xl mt-0.5">error_outline</span>
                    <div className="flex-1">
                        <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Gagal Masuk</h3>
                        <p className="mt-1 text-sm text-red-700 dark:text-red-300">{error}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Email
                    </label>
                    <div className="mt-2 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400 text-lg">mail_outline</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out dark:text-white"
                            placeholder="admin@Akuursauyunan.id"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Kata Sandi
                    </label>
                    <div className="mt-2 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400 text-lg">lock_outline</span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out dark:text-white"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded dark:bg-slate-900 dark:border-slate-600"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 dark:text-slate-400">
                            Ingat saya
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="font-medium text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Lupa kata sandi?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'MEMPROSES...' : 'MASUK'}
                    </button>
                </div>
            </form>
        </div>
    );
}
