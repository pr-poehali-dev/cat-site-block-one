import { useState, useEffect } from 'react';

const LOGO = 'https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/bucket/93f9cc45-8cb4-4dd4-8a00-f587d20d2cfe.png';
const HERO_IMG = 'https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/files/629d6264-6cad-48d8-9fb4-86ded7c7002f.jpg';
const IMG_BLACKOUT = 'https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/files/4e32de88-bd27-4344-b20b-b0d09420f780.jpg';
const IMG_DAYNIGHT = 'https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/files/cf134c5f-ab07-4688-aeeb-3e7e7c4f955b.jpg';
const IMG_OFFICE   = 'https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/files/9f080ca2-bf49-406d-abb2-b9f6c97636f4.jpg';

const FABRIC_PRICES: Record<string, number> = {
  'Офисная': 1800,
  'Фильтрующая': 2400,
  'Блэкаут': 2900,
  'День-Ночь': 3500,
};

function useCountdown() {
  const target = new Date('2026-08-01T00:00:00');
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

const Index = () => {
  const [width, setWidth]   = useState('');
  const [height, setHeight] = useState('');
  const [fabric, setFabric] = useState('Офисная');
  const [price, setPrice]   = useState<number | null>(null);
  const [name, setName]     = useState('');
  const [phone, setPhone]   = useState('');
  const timer = useCountdown();

  const calcPrice = () => {
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!w || !h) return;
    setPrice(Math.round((w / 100) * (h / 100) * FABRIC_PRICES[fabric]));
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <img src={LOGO} alt="Маркиза-ДВ" className="h-10 w-auto" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1A1A2E]">
            <a href="#catalog"  className="hover:text-[#C0A882] transition-colors">Каталог</a>
            <a href="#how"      className="hover:text-[#C0A882] transition-colors">Как мы работаем</a>
            <a href="#calc"     className="hover:text-[#C0A882] transition-colors">Калькулятор</a>
            <a href="#contacts" className="hover:text-[#C0A882] transition-colors">Контакты</a>
          </nav>
          <a href="tel:+79502818877" className="font-heading font-bold text-[15px] text-[#1A1A2E] hover:text-[#C0A882] transition-colors whitespace-nowrap">
            +7 (950) 281-88-77
          </a>
        </div>
      </header>

      {/* ── БЛОК 1: HERO ── */}
      <section className="bg-white grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-[calc(100vh-64px)]">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-14 py-16">
          <h1 className="font-heading font-bold text-[48px] leading-[1.1] text-[#1A1A2E] mb-5">
            Рулонные жалюзи<br />во Владивостоке<br />
            <span className="text-[#C0A882]">от 1 800 ₽</span>
          </h1>
          <p className="text-[20px] text-[#1A1A2E] mb-4 leading-snug">
            Изготовим за 2 дня. Замер бесплатно. Гарантия 2 года.
          </p>
          <p className="text-[16px] text-[#444444] mb-8 leading-relaxed">
            Собственное производство с 2007 года. Любые размеры — точно под ваши окна.
            Доставка и монтаж по Владивостоку и Артёму.
          </p>
          <button
            className="w-full py-4 px-6 text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
            style={{ backgroundColor: '#6C7A8D' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#5C6A7D')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#6C7A8D')}
          >
            Вызвать замерщика бесплатно
          </button>
          <a href="#calc" className="mt-3 text-[14px] italic text-[#C0A882] hover:underline text-center">
            → Рассчитать стоимость
          </a>
          <div className="mt-8 flex gap-6 flex-wrap">
            {[{ e: '⚡', t: 'Готово за 2 дня' }, { e: '🏭', t: 'Собственный цех' }, { e: '✅', t: 'Гарантия 2 года' }].map(p => (
              <div key={p.t} className="flex items-center gap-2">
                <span className="text-[18px]">{p.e}</span>
                <span className="text-[14px] text-[#1A1A2E] font-medium">{p.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block relative">
          <img src={HERO_IMG} alt="Комната с рулонными шторами" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* ── БЛОК 2: БОЛИ И ВЫГОДЫ ── */}
      <section className="bg-[#E8E8E8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[32px] text-[#1A1A2E] mb-10 text-center">
            Устали от штор, которые не подходят по размеру?
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <div className="grid grid-cols-2 bg-white">
              <div className="bg-[#C0522D]/10 px-6 py-3 font-heading font-bold text-[14px] text-[#C0522D] uppercase tracking-wide">Проблема</div>
              <div className="bg-[#3B4FA0]/10 px-6 py-3 font-heading font-bold text-[14px] text-[#3B4FA0] uppercase tracking-wide">Наше решение</div>
            </div>
            {[
              ['Шторы не подходят по размеру', 'Изготовим точно под ваш проём — до мм'],
              ['Долго ждать — месяцами', 'Готово за 2 рабочих дня'],
              ['Непонятно, что выбрать', 'Мастер приедет с образцами тканей'],
              ['Дорогой монтаж отдельно', 'Установка входит в стоимость'],
              ['Сомневаюсь в качестве', 'Гарантия 2 года на все изделия'],
            ].map(([prob, sol], i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F8]'}`}>
                <div className="px-6 py-4 text-[16px] text-[#C0522D] border-r border-[#E8E8E8] flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0">✗</span> {prob}
                </div>
                <div className="px-6 py-4 text-[16px] text-[#3B4FA0] flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0">✓</span> {sol}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-[16px] italic text-[#444444]">
            «17 лет на рынке Владивостока — мы знаем, как сделать правильно»
          </div>
        </div>
      </section>

      {/* ── БЛОК 3: КАТАЛОГ ── */}
      <section id="catalog" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[32px] text-[#1A1A2E] mb-10 text-center">
            Популярные модели
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: IMG_BLACKOUT, name: 'Блэкаут', desc: 'Полная светозащита. Идеально для спальни и детской.', price: 'от 2 900 ₽', badge: 'Хит продаж', badgeColor: '#F0A500' },
              { img: IMG_DAYNIGHT, name: 'День-Ночь',  desc: 'Регулировка света в течение дня. Современный вид.', price: 'от 3 500 ₽', badge: 'Рекомендуем', badgeColor: '#3B4FA0' },
              { img: IMG_OFFICE,   name: 'Офисные',   desc: 'Для организаций. Оптовые цены, быстрые сроки.', price: 'от 1 800 ₽', badge: 'Для организаций', badgeColor: '#6B7C5C' },
            ].map((c) => (
              <div key={c.name} className="bg-[#F8F8F8] rounded-2xl overflow-hidden shadow-card flex flex-col">
                <div className="relative">
                  <img src={c.img} alt={c.name} className="w-full h-52 object-cover" />
                  <span
                    className="absolute top-3 left-3 text-white text-[12px] font-heading font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: c.badgeColor }}
                  >
                    {c.badge}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-[20px] text-[#1A1A2E] mb-2">{c.name}</h3>
                  <p className="text-[15px] text-[#444444] flex-1 mb-4">{c.desc}</p>
                  <div className="font-heading font-bold text-[22px] text-[#C0A882]">{c.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── БЛОК 4: КАК МЫ РАБОТАЕМ ── */}
      <section id="how" className="bg-[#E8E8E8] relative py-16">
        <div className="h-[3px] bg-[#C0A882] w-full absolute top-0 left-0" />
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[32px] text-[#1A1A2E] mb-12 text-center">
            Заказать жалюзи — проще, чем кажется
          </h2>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#C0A882] z-0" />
            {[
              { icon: '📞', step: '1. Замер',           desc: 'Мастер приедет\nбесплатно' },
              { icon: '📐', step: '2. Подбор',          desc: 'Выбираете ткань\nи цвет по образцам' },
              { icon: '🏭', step: '3. Изготовление',    desc: 'За 2 рабочих дня\nв нашем цехе' },
              { icon: '🔧', step: '4. Установка',       desc: 'Монтаж входит\nв стоимость' },
            ].map((s) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl shadow-card">{s.icon}</div>
                <span className="font-heading font-bold text-[15px] text-[#1A1A2E]">{s.step}</span>
                <span className="text-[14px] text-[#444444] leading-snug whitespace-pre-line">{s.desc}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '17 лет', label: 'на рынке Владивостока' },
              { num: '2 дня',  label: 'срок изготовления' },
              { num: '2 года', label: 'гарантия на все изделия' },
            ].map((s) => (
              <div key={s.num} className="bg-white rounded-xl px-8 py-7 shadow-card text-center">
                <div className="font-heading font-bold text-[48px] text-[#1A1A2E] leading-none mb-2">{s.num}</div>
                <div className="text-[16px] text-[#6C7A8D]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-xl shadow-card overflow-hidden flex">
            <div className="w-1.5 flex-shrink-0 bg-[#C0A882]" />
            <div className="px-8 py-7">
              <p className="text-[16px] italic text-[#444444] leading-relaxed mb-3">
                «Заказывала рулонные в детскую и на кухню. Приехали точно в срок, всё установили аккуратно, жалюзи идеально подошли по размеру. Рекомендую!»
              </p>
              <span className="font-heading font-bold text-[14px] text-[#6C7A8D]">Ирина, Владивосток</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── БЛОК 5: КАЛЬКУЛЯТОР ── */}
      <section id="calc" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[32px] text-[#1A1A2E] mb-10 text-center">
            Рассчитайте стоимость за 30 секунд
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="flex overflow-hidden rounded-xl shadow-card mb-8">
              <div className="w-1.5 flex-shrink-0 bg-[#EF8354]" />
              <div className="bg-[#F8F8F8] flex-1 px-6 py-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#EF8354] text-white text-[12px] font-heading font-bold px-3 py-1 rounded-full">Акция</span>
                  <span className="font-heading font-bold text-[17px] text-[#1A1A2E]">🎁 Только в июле: монтаж 2-х и более жалюзи — БЕСПЛАТНО</span>
                </div>
                <p className="text-[15px] text-[#C0522D]">
                  До конца акции: {timer.d}д {timer.h}ч {timer.m}м {timer.s}с
                </p>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rounded-2xl shadow-card p-8 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] text-[#6C7A8D] mb-1">Ширина окна (см)</label>
                  <input type="number" value={width} onChange={e => setWidth(e.target.value)} placeholder="например, 120"
                    className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-[#1A1A2E] outline-none focus:border-[#6C7A8D] transition-colors bg-white" />
                </div>
                <div>
                  <label className="block text-[14px] text-[#6C7A8D] mb-1">Высота окна (см)</label>
                  <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="например, 160"
                    className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-[#1A1A2E] outline-none focus:border-[#6C7A8D] transition-colors bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-[14px] text-[#6C7A8D] mb-1">Тип ткани</label>
                <select value={fabric} onChange={e => setFabric(e.target.value)}
                  className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-[#1A1A2E] outline-none focus:border-[#6C7A8D] transition-colors bg-white">
                  {Object.keys(FABRIC_PRICES).map(f => <option key={f}>{f}</option>)}
                </select>
              </div>
              <button onClick={calcPrice}
                className="w-full py-4 text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
                style={{ backgroundColor: '#6C7A8D' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#5C6A7D')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#6C7A8D')}
              >
                Рассчитать
              </button>
              {price !== null && (
                <div className="text-center font-heading font-bold text-[24px] text-[#C0A882]">
                  Примерная стоимость: {price.toLocaleString('ru-RU')} ₽
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── БЛОК 6: ФИНАЛЬНЫЙ CTA ── */}
      <section id="contacts" className="bg-[#1A1A2E] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-[32px] text-white mb-8 leading-tight">
              Получите бесплатный замер сегодня
            </h2>
            <div className="flex flex-col gap-4 mb-10">
              {[
                'Замер бесплатно — мастер приедет с образцами',
                'Без предоплат до замера',
                'Готово за 2 дня — не нужно долго ждать',
              ].map(t => (
                <div key={t} className="flex items-start gap-3">
                  <span className="text-[#C0A882] mt-0.5 flex-shrink-0">✅</span>
                  <span className="text-[16px] text-[#C0A882]">{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 text-[16px] text-white">
              <a href="tel:+79502818877" className="hover:text-[#C0A882] transition-colors">📞 +7 (950) 281-88-77</a>
              <div className="flex gap-4">
                <a href="#" className="text-[#C0A882] hover:underline">💬 WhatsApp</a>
                <a href="#" className="text-[#C0A882] hover:underline">💬 Telegram</a>
              </div>
              <span>📍 Владивосток, [адрес] | Артём, [адрес]</span>
              <span>🕐 Пн–Пт 9:00–18:00, Сб 10:00–15:00</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <label className="block text-[14px] text-[#6C7A8D] mb-1">Ваше имя</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Иван"
                className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-[#1A1A2E] outline-none focus:border-[#6C7A8D] transition-colors" />
            </div>
            <div>
              <label className="block text-[14px] text-[#6C7A8D] mb-1">Телефон</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__"
                className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-[#1A1A2E] outline-none focus:border-[#6C7A8D] transition-colors" />
            </div>
            <button
              className="w-full py-4 text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
              style={{ backgroundColor: '#6C7A8D' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#5C6A7D')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#6C7A8D')}
            >
              Вызвать замерщика бесплатно
            </button>
            <p className="text-[12px] text-[#6C7A8D] text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="bg-[#1A1A2E] border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-[#6C7A8D]">
          <span>ИП / ООО [название] | ИНН XXXXXXXXXXXX</span>
          <a href="#" className="hover:text-[#C0A882] transition-colors">Политика конфиденциальности</a>
        </div>
      </footer>

    </div>
  );
};

export default Index;
