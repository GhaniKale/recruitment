'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import JobCard from './JobCard';
import Pagination from './Pagination';

/**
 * @param {{ jobs?: any[] }} props
 */
export default function JobFilter({ jobs = [] }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [country, setCountry] = useState('');
    
    // Autocomplete states
    const [isTyping, setIsTyping] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    const wrapperRef = useRef(null);

    // Debounce logic
    useEffect(() => {
        setIsTyping(true);
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
            setIsTyping(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Handle click outside to close suggestions
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Suggestions derived from searchTerm (max 5)
    const suggestions = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return [];
        
        // Get unique titles that match
        const matches = jobs
            .filter(job => job.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim()))
            .map(job => job.title);
            
        return [...new Set(matches)].slice(0, 5);
    }, [jobs, debouncedSearchTerm]);

    // Main filtered jobs
    const filteredJobs = useMemo(() => {
        return jobs.filter(job => {
            const matchSearch = job.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim());
            
            // If the country filter is active, check if job.country matches
            const matchCountry = country 
                ? job.country?.toLowerCase() === country.toLowerCase() 
                : true;
                
            return matchSearch && matchCountry;
        });
    }, [jobs, debouncedSearchTerm, country]);

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setDebouncedSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    // Get unique countries for the filter dropdown
    const availableCountries = useMemo(() => {
        const countries = jobs.map(j => j.country).filter(Boolean);
        return [...new Set(countries)].sort();
    }, [jobs]);

    return (
        <>
            {/* Filter Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        {/* Search Input with Autocomplete */}
                        <div ref={wrapperRef} className="relative w-full md:w-1/2 group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-10 py-3 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-shadow shadow-sm"
                                placeholder="Cari posisi pekerjaan (Contoh: Welder)..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setShowSuggestions(true);
                                }}
                                onFocus={() => setShowSuggestions(true)}
                            />
                            
                            {/* Loading Icon or Clear Button */}
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                {isTyping && searchTerm ? (
                                    <span className="material-icons text-slate-400 animate-spin text-sm" style={{ animationDuration: '1.5s' }}>autorenew</span>
                                ) : searchTerm ? (
                                    <button 
                                        type="button"
                                        onClick={() => { setSearchTerm(''); setDebouncedSearchTerm(''); }}
                                        className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus:outline-none flex items-center"
                                    >
                                        <span className="material-icons text-sm">close</span>
                                    </button>
                                ) : null}
                            </div>

                            {/* Autocomplete Dropdown */}
                            {showSuggestions && suggestions.length > 0 && (
                                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden">
                                    <ul className="max-h-60 overflow-y-auto py-1">
                                        {suggestions.map((suggestion, index) => (
                                            <li 
                                                key={index}
                                                className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer text-sm text-slate-700 dark:text-slate-200 flex items-center gap-3 transition-colors"
                                                onClick={() => handleSuggestionClick(suggestion)}
                                            >
                                                <span className="material-icons text-slate-400 text-sm">search</span>
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Country Select */}
                        <div className="relative w-full md:w-1/3 group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons text-slate-400 group-focus-within:text-primary transition-colors">public</span>
                            </div>
                            <select 
                                className="block w-full pl-10 pr-10 py-3 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm shadow-sm appearance-none cursor-pointer"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="">Semua Negara</option>
                                {availableCountries.length > 0 ? (
                                    availableCountries.map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))
                                ) : (
                                    <>
                                        <option value="UAE">United Arab Emirates</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Japan">Japan</option>
                                        <option value="South Korea">South Korea</option>
                                    </>
                                )}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <span className="material-icons text-slate-400">arrow_drop_down</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job List Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Lowongan Terbaru</h2>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Menampilkan {filteredJobs.length} lowongan</span>
                </div>

                {filteredJobs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mt-6">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-icons text-4xl text-slate-400">search_off</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Tidak ada lowongan ditemukan</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-6">Maaf, tidak ada lowongan yang sesuai dengan kriteria pencarian Anda.</p>
                        <button 
                            type="button"
                            onClick={() => { setSearchTerm(''); setDebouncedSearchTerm(''); setCountry(''); }}
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
                        >
                            <span className="material-icons text-sm">refresh</span>
                            Reset Filter
                        </button>
                    </div>
                )}

                <Pagination />
            </div>
        </>
    );
}
