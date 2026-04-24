
export default function StatsGrid() {
    const stats = [
        { label: 'Total Pelamar', value: '128', change: '+12% dari bulan lalu', icon: 'group', color: 'text-primary', bg: 'bg-primary/10' },
        { label: 'Pelamar Hari Ini', value: '5', change: 'Update terakhir: 14:30 WIB', icon: 'today', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Menunggu Review', value: '42', change: '', icon: 'pending_actions', color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { label: 'Diterima Kerja', value: '18', change: '', icon: 'check_circle', color: 'text-green-500', bg: 'bg-green-500/10' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{stat.value}</h3>
                        {stat.change && (
                            <p className={`text-xs mt-1 flex items-center ${stat.change.includes('+') ? 'text-green-600' : 'text-slate-500'}`}>
                                {stat.change.includes('+') && <span className="material-icons-round text-sm mr-1">trending_up</span>}
                                {stat.change}
                            </p>
                        )}
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                        <span className="material-icons-round text-2xl">{stat.icon}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
