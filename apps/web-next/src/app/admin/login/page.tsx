import LoginForm from '@/components/LoginForm';

export default function AdminLoginPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-400/5 blur-3xl"></div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md z-10 relative">
                <div className="flex flex-col items-center justify-center mb-8">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                            <span className="text-white font-bold text-xl">M</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">LPK AKUR</h2>
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">Admin Panel</p>
                </div>

                <LoginForm />

                <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
                    © {new Date().getFullYear()} LPK Akur Sauyunan. All rights reserved.
                </p>
            </div>
        </div>
    );
}
