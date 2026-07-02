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

    </div>
  );
};

export default Index;
