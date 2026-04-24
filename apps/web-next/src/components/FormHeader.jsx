export default function FormHeader({ title, subtitle }) {
    return (
        <div className="bg-primary/5 dark:bg-slate-800/50 border-b border-primary/10 dark:border-slate-800 py-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{title}</h1>
                <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
            </div>
        </div>
    );
}
