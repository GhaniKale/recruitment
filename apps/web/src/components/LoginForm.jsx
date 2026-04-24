
export default function LoginForm() {
    return (
        <div className="bg-white dark:bg-slate-800 py-10 px-6 shadow-xl shadow-slate-200/50 dark:shadow-none rounded-xl border border-slate-100 dark:border-slate-700 sm:px-10">
            {/* Error Banner Example (Static for UI) */}
            <div className="mb-6 rounded-lg bg-red-50 dark:bg-red-900/20 p-4 border border-red-100 dark:border-red-800/30 flex items-start gap-3 hidden">
                <span className="material-icons text-red-500 text-xl mt-0.5">error_outline</span>
                <div className="flex-1">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Gagal Masuk</h3>
                    <p className="mt-1 text-sm text-red-700 dark:text-red-300">Email atau kata sandi yang Anda masukkan salah.</p>
                </div>
            </div>

            <form action="/admin/dashboard" className="space-y-6" method="GET">
                {/* Using GET for now to just simulate navigation to dashboard without backend */}

                {/* Email Field */}
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
                            className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out dark:text-white"
                            placeholder="admin@mardel.co.id"
                            required
                        />
                    </div>
                </div>

                {/* Password Field */}
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
                            className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out dark:text-white"
                            placeholder="••••••••"
                            required
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer group">
                            <span className="material-icons text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 text-lg select-none">visibility_off</span>
                        </div>
                    </div>
                </div>

                {/* Remember Me & Forgot Password */}
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

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform active:scale-[0.98]"
                    >
                        MASUK
                    </button>
                </div>
            </form>
        </div>
    );
}
