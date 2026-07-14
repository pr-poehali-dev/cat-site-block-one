import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { IMG_TEAM, PHONE_HREF } from '@/components/layout/assets';

const STATS = [
  { num: '17 лет', label: 'на рынке Владивостока' },
  { num: '2 000+', label: 'реализованных проектов' },
  { num: '2 года', label: 'гарантия на изделия' },
];

const VALUES = [
  { icon: 'Factory', title: 'Собственное производство', desc: 'Полный цикл изготовления в своём цехе — без посредников' },
  { icon: 'Ruler', title: 'Точный замер', desc: 'Выезжаем бесплатно, изготавливаем строго по вашим размерам' },
  { icon: 'ShieldCheck', title: 'Гарантия', desc: '2 года гарантии на изделия и монтаж' },
  { icon: 'Users', title: 'Опытная команда', desc: 'Монтажники и инженеры с многолетним опытом' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-mist font-sans">
      <Header />

      <section className="relative h-[420px] flex items-center">
        <img src={IMG_TEAM} alt="Команда Маркиза-ДВ" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="font-heading font-bold text-[40px] text-white mb-3 max-w-xl">О компании «Маркиза-ДВ»</h1>
          <p className="text-[18px] text-white/85 max-w-xl">
            Проектируем и производим перголы, маркизы, жалюзи и остекление во Владивостоке с 2009 года
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[16px] text-graphite leading-relaxed">
            «Маркиза-ДВ» — производственная компания полного цикла. Мы проектируем, изготавливаем
            и устанавливаем биоклиматические перголы, маркизы, жалюзи, рулонные шторы и системы
            остекления балконов. Работаем с частными домами, квартирами и коммерческими объектами
            по всему Владивостоку и Артёму.
          </p>
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map(s => (
            <div key={s.num} className="bg-ink rounded-xl px-8 py-8 text-center">
              <div className="font-heading font-bold text-[44px] text-green-light leading-none mb-2">{s.num}</div>
              <div className="text-[15px] text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-[32px] text-ink mb-10 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-card flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center">
                  <Icon name={v.icon as any} size={24} className="text-green" />
                </div>
                <h3 className="font-heading font-bold text-[16px] text-ink">{v.title}</h3>
                <p className="text-[14px] text-graphite leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-[32px] text-white mb-4">Обсудим ваш проект?</h2>
          <p className="text-[16px] text-white/70 mb-8">Позвоните нам или оставьте заявку на бесплатный замер</p>
          <a
            href={PHONE_HREF}
            className="inline-block px-8 py-4 bg-green hover:bg-green-dark text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
          >
            Позвонить нам
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
