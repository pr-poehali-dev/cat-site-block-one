import { useState, useEffect } from 'react';

const HERO_IMG = 'https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/files/7fa2e828-f013-4ab6-8426-cacddc7010c3.jpg';

const perks = [
  { icon: '⚡', text: 'Готово за 2 дня' },
  { icon: '🏭', text: 'Собственный цех' },
  { icon: '✅', text: 'Гарантия 2 года' },
];

const FABRIC_PRICES: Record<string, number> = {
  'Офисная': 1800,
  'Фильтрующая': 2400,
  'Блэкаут': 2900,
  'День-Ночь': 3500,
};

// Таймер до конца июля
function useCountdown() {
  const target = new Date('2026-08-01T00:00:00');
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { d, h, m, s };
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
    const sq = (w / 100) * (h / 100);
    setPrice(Math.round(sq * FABRIC_PRICES[fabric]));
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <img
            src="https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/bucket/93f9cc45-8cb4-4dd4-8a00-f587d20d2cfe.png"
            alt="Маркиза-ДВ"
            className="h-10 w-auto"
          />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy">
            <a href="#catalog"  className="hover:text-taupe transition-colors">Каталог</a>
            <a href="#calc"     className="hover:text-taupe transition-colors">Калькулятор</a>
            <a href="#contacts" className="hover:text-taupe transition-colors">Контакты</a>
          </nav>
          <a
            href="tel:+79502818877"
            className="font-heading font-bold text-[15px] text-navy hover:text-taupe transition-colors whitespace-nowrap"
          >
            +7 (950) 281-88-77
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-[calc(100vh-64px)]">

        {/* LEFT — текст */}
        <div className="flex flex-col justify-center py-16 pr-0 lg:pr-14">
          <h1 className="font-heading font-bold text-[48px] leading-[1.1] text-navy mb-5">
            Рулонные жалюзи<br />во Владивостоке<br />
            <span className="text-taupe">от 1 800 ₽</span>
          </h1>

          <p className="text-[20px] font-normal text-navy mb-4 leading-snug">
            Изготовим за 2 дня. Замер бесплатно. Гарантия 2 года.
          </p>

          <p className="text-[16px] text-[#444444] mb-8 leading-relaxed">
            Собственное производство с 2007 года. Любые размеры — точно под ваши окна.
            Доставка и монтаж по Владивостоку и Артёму.
          </p>

          {/* CTA */}
          <button className="w-full py-4 px-6 bg-cta text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200 hover:bg-cta-hover">
            Вызвать замерщика бесплатно
          </button>

          {/* Якорная ссылка */}
          <a href="#calc" className="mt-3 inline-block text-[14px] italic text-taupe hover:underline">
            → Рассчитать стоимость
          </a>

          {/* Преимущества */}
          <div className="mt-8 flex gap-6 flex-wrap">
            {perks.map((p) => (
              <div key={p.text} className="flex items-center gap-2">
                <span className="text-[18px]">{p.icon}</span>
                <span className="text-[14px] text-navy font-medium">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — фото */}
        <div className="hidden lg:block relative">
          <img
            src={HERO_IMG}
            alt="Современная комната с рулонными шторами"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#E8E8E8] border-y border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-[28px] text-navy leading-none">17</span>
            <span className="text-[15px] text-[#444444] leading-tight">лет<br />на рынке</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#C0A882]" />
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-[28px] text-navy leading-none">5 000+</span>
            <span className="text-[15px] text-[#444444] leading-tight">выполненных<br />заказов</span>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#C0A882]" />
          <span className="text-[15px] text-[#444444] text-center">
            во Владивостоке и Артёме
          </span>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ */}
      <section className="bg-[#E8E8E8] relative">
        <div className="h-[3px] bg-[#C0A882] w-full absolute top-0 left-0" />
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-16">

          <h2 className="font-heading font-bold text-[32px] text-navy mb-12 text-center">
            Заказать жалюзи — проще, чем кажется
          </h2>

          {/* 4 шага */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* пунктирная линия */}
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#C0A882] z-0" />

            {[
              { icon: '📞', step: '1. Замер',           desc: 'Мастер приедет\nбесплатно' },
              { icon: '📐', step: '2. Подбор',          desc: 'Выбираете ткань\nи цвет по образцам' },
              { icon: '🏭', step: '3. Изготовление',    desc: 'За 2 рабочих\nдня в нашем цехе' },
              { icon: '🔧', step: '4. Установка',       desc: 'Монтаж входит\nв стоимость' },
            ].map((s) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl shadow-card">
                  {s.icon}
                </div>
                <span className="font-heading font-bold text-[15px] text-navy">{s.step}</span>
                <span className="text-[14px] text-[#444444] leading-snug whitespace-pre-line">{s.desc}</span>
              </div>
            ))}
          </div>

          {/* 3 цифры */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '17 лет',  label: 'на рынке Владивостока' },
              { num: '2 дня',   label: 'срок изготовления' },
              { num: '2 года',  label: 'гарантия на все изделия' },
            ].map((s) => (
              <div key={s.num} className="bg-white rounded-xl px-8 py-7 shadow-card text-center">
                <div className="font-heading font-bold text-[48px] text-navy leading-none mb-2">{s.num}</div>
                <div className="text-[16px] text-[#6C7A8D]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Отзыв */}
          <div className="mt-10 bg-white rounded-xl shadow-card overflow-hidden flex">
            <div className="w-1 flex-shrink-0 bg-[#C0A882]" />
            <div className="px-8 py-7">
              <p className="text-[16px] italic text-[#444444] leading-relaxed mb-4">
                «Заказывала рулонные в детскую и на кухню. Приехали точно в срок, всё установили аккуратно, жалюзи идеально подошли по размеру. Рекомендую!»
              </p>
              <span className="font-heading font-bold text-[14px] text-[#6C7A8D]">Ирина, Владивосток</span>
            </div>
          </div>

        </div>
      </section>

      {/* КАЛЬКУЛЯТОР */}
      <section id="calc" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[32px] text-navy mb-10 text-center">
            Рассчитайте стоимость за 30 секунд
          </h2>

          <div className="max-w-xl mx-auto">
            {/* Спецпредложение */}
            <div className="flex items-start gap-0 mb-8 rounded-xl overflow-hidden shadow-card">
              <div className="w-1.5 flex-shrink-0 bg-[#EF8354] self-stretch" />
              <div className="bg-[#F8F8F8] flex-1 px-6 py-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#EF8354] text-white text-[12px] font-heading font-bold px-3 py-1 rounded-full">Акция</span>
                  <span className="font-heading font-bold text-[18px] text-navy">🎁 Только в июле: монтаж 2-х и более жалюзи — БЕСПЛАТНО</span>
                </div>
                <p className="text-[16px] text-[#C0522D]">
                  До конца акции: {timer.d}д {timer.h}ч {timer.m}м {timer.s}с
                </p>
              </div>
            </div>

            {/* Форма калькулятора */}
            <div className="bg-[#F8F8F8] rounded-2xl shadow-card p-8 flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] text-[#6C7A8D] mb-1">Ширина окна (см)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={e => setWidth(e.target.value)}
                    placeholder="например, 120"
                    className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-navy outline-none focus:border-[#6C7A8D] transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[14px] text-[#6C7A8D] mb-1">Высота окна (см)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    placeholder="например, 160"
                    className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-navy outline-none focus:border-[#6C7A8D] transition-colors bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] text-[#6C7A8D] mb-1">Тип ткани</label>
                <select
                  value={fabric}
                  onChange={e => setFabric(e.target.value)}
                  className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-navy outline-none focus:border-[#6C7A8D] transition-colors bg-white"
                >
                  {Object.keys(FABRIC_PRICES).map(f => <option key={f}>{f}</option>)}
                </select>
              </div>

              <button
                onClick={calcPrice}
                className="w-full py-4 bg-cta text-white font-heading font-bold text-[16px] rounded-lg hover:bg-cta-hover transition-colors duration-200"
              >
                Рассчитать
              </button>

              {price !== null && (
                <div className="text-center font-heading font-bold text-[24px] text-taupe pt-1">
                  Примерная стоимость: {price.toLocaleString('ru-RU')} ₽
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ФИНАЛЬНЫЙ CTA */}
      <section className="bg-navy py-16" id="contacts">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Левая — текст */}
          <div>
            <h2 className="font-heading font-bold text-[32px] text-white mb-8 leading-tight">
              Получите бесплатный замер сегодня
            </h2>
            <div className="flex flex-col gap-4">
              {[
                'Замер бесплатно — мастер приедет с образцами',
                'Без предоплат до замера',
                'Готово за 2 дня — не нужно долго ждать',
              ].map(t => (
                <div key={t} className="flex items-start gap-3">
                  <span className="text-taupe mt-0.5">✅</span>
                  <span className="text-[16px] text-taupe">{t}</span>
                </div>
              ))}
            </div>

            {/* Контакты */}
            <div className="mt-10 flex flex-col gap-3 text-[16px] text-white">
              <span>📞 +7 (423) XXX-XX-XX</span>
              <div className="flex gap-4">
                <span className="text-taupe cursor-pointer hover:underline">💬 WhatsApp</span>
                <span className="text-taupe cursor-pointer hover:underline">💬 Telegram</span>
              </div>
              <span>📍 Владивосток, [адрес] | Артём, [адрес]</span>
              <span>🕐 Пн–Пт 9:00–18:00, Сб 10:00–15:00</span>
            </div>
          </div>

          {/* Правая — форма */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <label className="block text-[14px] text-[#6C7A8D] mb-1">Ваше имя</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Иван"
                className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-navy outline-none focus:border-[#6C7A8D] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[14px] text-[#6C7A8D] mb-1">Телефон</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full border border-[#E8E8E8] rounded-lg px-4 py-3 text-[16px] text-navy outline-none focus:border-[#6C7A8D] transition-colors"
              />
            </div>
            <button className="w-full py-4 bg-cta text-white font-heading font-bold text-[16px] rounded-lg hover:bg-cta-hover transition-colors duration-200">
              Вызвать замерщика бесплатно
            </button>
            <p className="text-[12px] text-[#6C7A8D] text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="bg-navy border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-[#6C7A8D]">
          <span>ИП / ООО [название] | ИНН XXXXXXXXXXXX</span>
          <a href="#" className="hover:text-taupe transition-colors">Политика конфиденциальности</a>
        </div>
      </footer>

    </div>
  );
};

export default Index;