import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  IMG_PORTFOLIO_1, IMG_PORTFOLIO_2, IMG_PORTFOLIO_3,
  IMG_PERGOLA, IMG_MARKIZA, IMG_GLAZING, PHONE_HREF,
} from '@/components/layout/assets';

const WORKS = [
  { img: IMG_PORTFOLIO_1, title: 'Пергола на частном участке', tag: 'Пергола' },
  { img: IMG_PORTFOLIO_2, title: 'Маркиза для летней террасы кафе', tag: 'Маркиза' },
  { img: IMG_PORTFOLIO_3, title: 'Остекление балкона с панорамным видом', tag: 'Остекление' },
  { img: IMG_PERGOLA, title: 'Биоклиматическая пергола с подсветкой', tag: 'Пергола' },
  { img: IMG_MARKIZA, title: 'Выдвижная маркиза на фасаде здания', tag: 'Маркиза' },
  { img: IMG_GLAZING, title: 'Тёплое остекление лоджии', tag: 'Остекление' },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-mist font-sans">
      <Header />

      <section className="bg-ink py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-heading font-bold text-[40px] text-white mb-3">Портфолио</h1>
          <p className="text-[16px] text-white/70">Реализованные проекты во Владивостоке и Артёме</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKS.map(w => (
              <div key={w.title} className="group bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="relative h-64 overflow-hidden">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-3 left-3 text-white text-[12px] font-heading font-bold px-3 py-1 rounded-full bg-green">
                    {w.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-[16px] text-ink leading-snug">{w.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-[32px] text-white mb-4">Хотите такой же результат?</h2>
          <p className="text-[16px] text-white/70 mb-8">Оставьте заявку — обсудим ваш проект и приедем на замер бесплатно</p>
          <a
            href={PHONE_HREF}
            className="inline-block px-8 py-4 bg-green hover:bg-green-dark text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
          >
            Обсудить проект
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
