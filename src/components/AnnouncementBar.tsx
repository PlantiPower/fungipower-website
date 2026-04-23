'use client'

const messages: Record<string, string> = {
  nl: 'Wij staan op de Champignondagen · Brabanthallen, Den Bosch · 22–24 april',
  en: 'Visit us at Champignondagen · Brabanthallen, Den Bosch · 22–24 April',
  de: 'Besuchen Sie uns auf den Champignondagen · Brabanthallen, Den Bosch · 22.–24. April',
  fr: 'Retrouvez-nous aux Champignondagen · Brabanthallen, Den Bosch · 22–24 avril',
  es: 'Visítenos en Champignondagen · Brabanthallen, Den Bosch · 22–24 de abril',
  it: 'Visitaci ai Champignondagen · Brabanthallen, Den Bosch · 22–24 aprile',
  pl: 'Odwiedź nas na Champignondagen · Brabanthallen, Den Bosch · 22–24 kwietnia',
  ar: 'قابلونا في Champignondagen · Brabanthallen, Den Bosch · 22–24 أبريل',
  bg: 'Посетете ни на Champignondagen · Brabanthallen, Den Bosch · 22–24 април',
}

export default function AnnouncementBar({ lang }: { lang: string }) {
  const text = messages[lang] ?? messages.en

  return (
    <div className="w-full bg-orange-500 text-orange-950 text-center text-[12px] font-bold tracking-wide py-2 px-4 flex items-center justify-center gap-2">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-950 opacity-60"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-950"></span>
      </span>
      <span>{text}</span>
    </div>
  )
}
