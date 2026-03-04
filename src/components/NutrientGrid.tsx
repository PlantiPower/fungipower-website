'use client';

import { usePathname } from 'next/navigation';

const NutrientGrid = ({ dict }: { dict: any }) => {
    const pathname = usePathname();
    const isNL = pathname?.startsWith('/nl');
    const isDE = pathname?.startsWith('/de');

    const content = dict.NutrientGrid || {
        macro: isDE ? "Makroelemente" : isNL ? "Macro Elementen" : "Macro Nutrients",
        secondary: isDE ? "Sekundärelemente" : isNL ? "Secundaire Elementen" : "Secondary Nutrients",
        micro: isDE ? "Mikroelemente" : isNL ? "Micro Elementen" : "Micro Nutrients"
    };

    const macro = [
        { name: isDE ? 'Stickstoff' : isNL ? 'Stikstof' : 'Nitrogen', symbol: 'N' },
        { name: isDE ? 'Phosphor' : isNL ? 'Fosfor' : 'Phosphorus', symbol: 'P' },
        { name: isDE ? 'Kalium' : isNL ? 'Kalium' : 'Potassium', symbol: 'K' }
    ];
    const secondary = [
        { name: isDE ? 'Calcium' : isNL ? 'Calcium' : 'Calcium', symbol: 'Ca' },
        { name: isDE ? 'Magnesium' : isNL ? 'Magnesium' : 'Magnesium', symbol: 'Mg' },
        { name: isDE ? 'Schwefel' : isNL ? 'Zwavel' : 'Sulfur', symbol: 'S' }
    ];
    const micro = [
        { name: isDE ? 'Eisen' : isNL ? 'IJzer' : 'Iron', symbol: 'Fe' },
        { name: isDE ? 'Mangan' : isNL ? 'Mangaan' : 'Manganese', symbol: 'Mn' },
        { name: isDE ? 'Zink' : isNL ? 'Zink' : 'Zinc', symbol: 'Zn' },
        { name: isDE ? 'Kupfer' : isNL ? 'Koper' : 'Copper', symbol: 'Cu' },
        { name: isDE ? 'Bor' : isNL ? 'Boor' : 'Boron', symbol: 'B' },
        { name: isDE ? 'Molybdän' : isNL ? 'Molybdeen' : 'Molybdenum', symbol: 'Mo' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-x-12 lg:gap-x-16 text-left">
            <div>
                <h4 className="text-lime-500 font-black text-lg uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 font-outfit">{content.macro}</h4>
                <ul className="space-y-4">
                    {macro.map(n => (
                        <li key={n.symbol} className="text-white text-lg md:text-xl font-medium tracking-tight">
                            <span className="text-lime-400 mr-3 opacity-50">•</span>{n.name} <span className="text-white/20 ml-2 font-light italic">({n.symbol})</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-lime-500 font-black text-lg uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 font-outfit">{content.secondary}</h4>
                <ul className="space-y-4">
                    {secondary.map(n => (
                        <li key={n.symbol} className="text-white text-lg md:text-xl font-medium tracking-tight">
                            <span className="text-lime-400 mr-3 opacity-50">•</span>{n.name} <span className="text-white/20 ml-2 font-light italic">({n.symbol})</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-lime-500 font-black text-lg uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 font-outfit">{content.micro}</h4>
                <ul className="grid grid-cols-1 gap-4">
                    {micro.map(n => (
                        <li key={n.symbol} className="text-white text-lg md:text-xl font-medium tracking-tight">
                            <span className="text-lime-400 mr-3 opacity-50">•</span>{n.name} <span className="text-white/20 ml-2 font-light italic">({n.symbol})</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NutrientGrid;
