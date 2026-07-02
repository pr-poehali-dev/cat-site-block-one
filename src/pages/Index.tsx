const HERO_IMG = 'https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/files/7fa2e828-f013-4ab6-8426-cacddc7010c3.jpg';

const perks = [
  { icon: '⚡', text: 'Готово за 2 дня' },
  { icon: '🏭', text: 'Собственный цех' },
  { icon: '✅', text: 'Гарантия 2 года' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="font-heading font-bold text-xl text-navy tracking-tight">
            РулоноФ
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy">
            <a href="#catalog"  className="hover:text-taupe transition-colors">Каталог</a>
            <a href="#calc"     className="hover:text-taupe transition-colors">Калькулятор</a>
            <a href="#contacts" className="hover:text-taupe transition-colors">Контакты</a>
          </nav>
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

    </div>
  );
};

export default Index;