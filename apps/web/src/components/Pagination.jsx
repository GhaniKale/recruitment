export default function Pagination() {
    return (
        <div className="mt-16 flex justify-center">
            <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">
                    <span className="sr-only">Previous</span>
                    <span className="material-icons text-lg">chevron_left</span>
                </a>
                <a href="#" aria-current="page" className="z-10 bg-primary border-primary text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                </a>
                <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                </a>
                <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300">
                    ...
                </span>
                <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                    8
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">
                    <span className="sr-only">Next</span>
                    <span className="material-icons text-lg">chevron_right</span>
                </a>
            </nav>
        </div>
    );
}
