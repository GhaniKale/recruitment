export default function MapPreview({ location }) {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-1 shadow-sm mt-6">
            <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 group">
                {/* Static image for now, can be replaced with iframe */}
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVeB-BKVibtXEjWwRsFmXoKUYWrPrirZ2XUQL-4c0cS2TGbJOhQXfN-z18XXOlpFG1h4z_09qAWyelN84LTQp8wukcN0QGtZB0U0wpklwhLEJcTlB5E1NT5RW2XQDwV18YPCKPlxFCg6cpIo4nZyXyK754ue7p3F61ZP9Ez-QsU95tJ5WrAcN0NukU-KSh8GoqJU9bn4XZZvQZuEAqRXUV7wfVrD5Lc7y-J9uNaP2E2FcYsAf8j1dfLUyzXHxjRtAfts4RgME9-A"
                    alt={`Map location of ${location}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white dark:bg-slate-900 p-2 rounded-full shadow-lg">
                        <span className="material-icons text-red-500 text-2xl">location_on</span>
                    </div>
                </div>
                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    Buka di Google Maps
                </a>
            </div>
        </div>
    );
}
