import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import {
  IMG_PERGOLA_HERO, IMG_PERGOLA, IMG_MARKIZA, IMG_BLINDS, IMG_ROLLERS, IMG_GLAZING,
  IMG_PORTFOLIO_1, IMG_PORTFOLIO_2, PHONE_HREF,
} from '@/components/layout/assets';

const PRODUCTS = [
  { img: IMG_PERGOLA, name: 'Биоклиматические перголы', desc: 'Регулируемая крыша для террасы — солнце и дождь под контролем', icon: 'Sun' },
  { img: IMG_MARKIZA, name: 'Маркизы', desc: 'Выдвижные тканевые навесы для кафе, домов и коммерции', icon: 'Umbrella' },
  { img: IMG_BLINDS, name: 'Жалюзи', desc: 'Алюминиевые фасадные и оконные жалюзи любых размеров', icon: 'AlignJustify' },
  { img: IMG_ROLLERS, name: 'Рулонные шторы', desc: 'Блэкаут, день-ночь, офисные ткани — точно под ваш проём', icon: 'Blinds' },
  { img: IMG_GLAZING, name: 'Остекление балконов', desc: 'Тёплое и холодное панорамное остекление под ключ', icon: 'Square' },
];

const STEPS = [
  { icon: 'PhoneCall', title: 'Заявка', desc: 'Оставляете заявку — перезвоним в течение 15 минут' },
  { icon: 'Ruler', title: 'Замер', desc: 'Выезд замерщика бесплатно, в удобное время' },
  { icon: 'Factory', title: 'Производство', desc: 'Изготовим по вашим размерам на собственном оборудовании' },
  { icon: 'Wrench', title: 'Монтаж', desc: 'Установим и всё покажем — гарантия на монтаж' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-mist font-sans">
      <Header />

      {/* HERO */}
      <section className="relative h-[640px] flex items-center">
        <img src={IMG_PERGOLA_HERO} alt="Биоклиматическая пергола" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <h1 className="font-heading font-bold text-[48px] leading-[1.1] text-white mb-5">
              Перголы, маркизы и остекление <span className="text-green-light">во Владивостоке</span>
            </h1>
            <p className="text-[18px] text-white/85 mb-8 leading-relaxed">
              Проектируем, производим и устанавливаем конструкции для дома и бизнеса.
              Собственный цех, гарантия 2 года, замер бесплатно.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block px-8 py-4 bg-green hover:bg-green-dark text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
            >
              Получить бесплатный замер
            </a>
          </div>
        </div>
      </section>

      {/* КАТЕГОРИИ */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[32px] text-ink mb-3 text-center">Наша продукция</h2>
          <p className="text-[16px] text-graphite text-center mb-12">Полный цикл: проект, производство, монтаж</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(p => (
              <Link
                key={p.name}
                to="/catalog"
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={p.icon as any} size={20} className="text-green" />
                    <h3 className="font-heading font-bold text-[18px] text-ink">{p.name}</h3>
                  </div>
                  <p className="text-[14px] text-graphite leading-relaxed">{p.desc}</p>
                </div>
              </Link>
            ))}
            <div className="bg-ink rounded-2xl p-6 flex flex-col justify-center items-center text-center gap-4">
              <span className="font-heading font-bold text-[18px] text-white">Не нашли нужное?</span>
              <Link to="/catalog" className="text-green-light hover:underline text-[15px] font-medium">
                Смотреть весь каталог →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[32px] text-white mb-14 text-center">Как мы работаем</h2>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-green/50 z-0" />
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center">
                  <Icon name={s.icon as any} size={24} className="text-white" />
                </div>
                <span className="font-heading font-bold text-[15px] text-white">{i + 1}. {s.title}</span>
                <span className="text-[14px] text-white/60 leading-snug">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ПОРТФОЛИО TEASER */}
      <section className="py-20 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading font-bold text-[32px] text-ink">Наши работы</h2>
            <Link to="/portfolio" className="text-green hover:text-green-dark font-medium text-[15px]">Всё портфолио →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <img src={IMG_PORTFOLIO_1} alt="Пергола на участке" className="w-full h-72 object-cover rounded-2xl shadow-card" />
            <img src={IMG_PORTFOLIO_2} alt="Маркиза на террасе" className="w-full h-72 object-cover rounded-2xl shadow-card" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ink">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-[32px] text-white mb-4">Готовы обсудить проект?</h2>
          <p className="text-[16px] text-white/70 mb-8">Оставьте заявку — перезвоним и приедем на бесплатный замер</p>
          <a
            href={PHONE_HREF}
            className="inline-block px-8 py-4 bg-green hover:bg-green-dark text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
          >
            Оставить заявку
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
