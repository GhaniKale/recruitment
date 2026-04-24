export default function JobFilter() {
    return (
        <div className="sticky top-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    {/* Search Input */}
                    <div className="relative w-full md:w-1/3 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-shadow shadow-sm"
                            placeholder="Cari posisi pekerjaan (Contoh: Welder)..."
                        />
                    </div>

                    {/* Country Select */}
                    <div className="relative w-full md:w-1/4 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400 group-focus-within:text-primary transition-colors">public</span>
                        </div>
                        <select className="block w-full pl-10 pr-10 py-3 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm shadow-sm appearance-none cursor-pointer">
                            <option value="">Semua Negara</option>
                            <option value="UAE">United Arab Emirates</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="QA">Qatar</option>
                            <option value="JP">Japan</option>
                            <option value="KR">South Korea</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400">arrow_drop_down</span>
                        </div>
                    </div>

                    {/* City Select */}
                    <div className="relative w-full md:w-1/4 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400 group-focus-within:text-primary transition-colors">location_city</span>
                        </div>
                        <select className="block w-full pl-10 pr-10 py-3 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm shadow-sm appearance-none cursor-pointer">
                            <option value="">Semua Kota</option>
                            <option value="dubai">Dubai</option>
                            <option value="abu-dhabi">Abu Dhabi</option>
                            <option value="riyadh">Riyadh</option>
                            <option value="tokyo">Tokyo</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400">arrow_drop_down</span>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="w-full md:w-auto">
                        <button
                            type="submit"
                            className="w-full md:w-auto flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform active:scale-95"
                        >
                            <span className="material-icons text-sm">filter_list</span>
                            CARI
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
