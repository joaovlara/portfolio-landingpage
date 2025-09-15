'use client';

import { useState } from 'react';
import { skills, projects, categories, works } from '@/data/work';

export default function Works() {
    const [selected, setSelected] = useState('all');
    const filteredWorks = selected === 'all' ? works : works.filter((work) => work.category.includes(selected));
    return (
        <section className="w-full py-16 bg-[#232831]">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-8">
                    My recent <span className="text-[#00c9c8]">works</span>
                </h2>
                <div className="flex gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setSelected(cat.value)}
                            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none text-white ${selected === cat.value
                                ? 'bg-[#00c9c8] text-white'
                                : 'bg-[#2c313a] text-gray-300 hover:bg-[#00c9c8] hover:text-white'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredWorks.map((work) => (
                        <div
                            key={work.id}
                            className="bg-[#2c313a] rounded-xl p-6 flex flex-col items-center shadow-lg transition-transform hover:-translate-y-2"
                        >
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-white text-center">
                                {work.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
