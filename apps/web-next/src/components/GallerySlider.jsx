'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GallerySlider() {
    const galleryItems = [
        {
            src: '/image/img4.jpeg',
            alt: 'Proses interview kandidat oleh tim HR',
            caption: 'Interview Session'
        },
        {
            src: '/image/img5.jpeg',
            alt: 'Kandidat mengisi formulir lamaran kerja',
            caption: 'Application Process'
        },
        {
            src: '/image/img6.jpeg',
            alt: 'Tim rekrutmen melakukan seleksi berkas',
            caption: 'Document Screening'
        },
        {
            src: '/image/img7.jpg',
            alt: 'Briefing kandidat sebelum penempatan kerja',
            caption: 'Pre-deployment Briefing'
        },
        {
            src: '/image/img8.jpg',
            alt: 'Pelatihan tenaga kerja baru',
            caption: 'Training Session'
        },
        {
            src: '/image/img9.jpg',
            alt: 'Suasana kegiatan rekrutmen tenaga kerja',
            caption: 'Recruitment Event'
        },
        {
            src: '/image/img10.jpg',
            alt: 'Tim HR dan kandidat dalam proses seleksi kerja',
            caption: 'Selection Process'
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Galeri Kegiatan Rekrutmen</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Dokumentasi proses seleksi dan penyaluran tenaga kerja kami
                    </p>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
                </div>

                <div className="relative group px-4 lg:px-12">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        navigation={{
                            nextEl: '.gallery-next',
                            prevEl: '.gallery-prev',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        className="pb-16 pt-4 gallery-swiper"
                    >
                        {galleryItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide-item group/slide relative overflow-hidden rounded-2xl shadow-lg cursor-grab active:cursor-grabbing border border-slate-100 dark:border-slate-800">
                                    <img 
                                        src={item.src} 
                                        alt={item.alt}
                                        loading="lazy"
                                        className="w-full h-64 lg:h-72 object-cover transform group-hover/slide:scale-105 transition duration-500"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-60 group-hover/slide:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
                                    
                                    {/* Caption */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover/slide:translate-y-0 transition-transform duration-300 pointer-events-none">
                                        <p className="text-white font-semibold text-lg drop-shadow-md">
                                            {item.caption}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="gallery-prev absolute top-1/2 -left-2 lg:left-0 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 hover:text-primary hover:border-primary transition-all hover:scale-110 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 disabled:opacity-0 cursor-pointer">
                        <span className="material-icons">chevron_left</span>
                    </button>
                    <button className="gallery-next absolute top-1/2 -right-2 lg:right-0 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 hover:text-primary hover:border-primary transition-all hover:scale-110 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 disabled:opacity-0 cursor-pointer">
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>
            
            {/* CSS to fix pagination bullets position */}
            <style jsx global>{`
                .gallery-swiper .swiper-pagination {
                    bottom: 0px !important;
                }
                .gallery-swiper .swiper-pagination-bullet-active {
                    background-color: var(--color-primary, #0ea5e9);
                }
            `}</style>
        </section>
    );
}
