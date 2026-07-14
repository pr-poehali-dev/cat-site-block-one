import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import {
  IMG_PERGOLA, IMG_MARKIZA, IMG_BLINDS, IMG_ROLLERS, IMG_GLAZING, PHONE_HREF,
} from '@/components/layout/assets';

const CATEGORIES = [
  {
    img: IMG_PERGOLA,
    name: 'Биоклиматические перголы',
    icon: 'Sun',
    price: 'от 180 000 ₽',
    desc: 'Алюминиевая конструкция с поворотными ламелями — регулируете уровень солнца и защиту от дождя одним нажатием.',
    features: ['Поворотные ламели', 'Встроенное освещение', 'Управление пультом', 'Ветро- и снегоустойчивость'],
  },
  {
    img: IMG_MARKIZA,
    name: 'Маркизы',
    icon: 'Umbrella',
    price: 'от 45 000 ₽',
    desc: 'Выдвижные тканевые навесы для террас, кафе и витрин. Защита от солнца и осадков, механический или моторизованный привод.',
    features: ['Кассетные и открытые', 'Моторизация', 'Широкий выбор тканей', 'Ветровые датчики'],
  },
  {
    img: IMG_BLINDS,
    name: 'Жалюзи',
    icon: 'AlignJustify',
    price: 'от 3 200 ₽',
    desc: 'Алюминиевые горизонтальные и вертикальные жалюзи для окон и фасадов. Точный подбор по размеру проёма.',
    features: ['Горизонтальные и вертикальные', 'Фасадные решения', 'Устойчивы к влаге', 'Любые цвета RAL'],
  },
  {
    img: IMG_ROLLERS,
    name: 'Рулонные шторы',
    icon: 'Blinds',
    price: 'от 1 800 ₽',
    desc: 'Блэкаут, день-ночь и офисные ткани. Изготовление за 2 дня, точно под ваш проём.',
    features: ['Блэкаут', 'День-Ночь', 'Офисные ткани', 'Кассетная система'],
  },
  {
    img: IMG_GLAZING,
    name: 'Остекление балконов',
    icon: 'Square',
    price: 'от 25 000 ₽',
    desc: 'Тёплое и холодное панорамное остекление под ключ — от замера до сдачи объекта.',
    features: ['Алюминиевые системы', 'Панорамное остекление', 'Тёплое и холодное', 'Отделка под ключ'],
  },
];

const Catalog = () => {
  return (
    <div className="min-h-screen bg-mist font-sans">
      <Header />

      <section className="bg-ink py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-heading font-bold text-[40px] text-white mb-3">Каталог продукции</h1>
          <p className="text-[16px] text-white/70">Проектируем, производим и устанавливаем под ключ</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
          {CATEGORIES.map((c, i) => (
            <div
              key={c.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-card ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="h-64 lg:h-full">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name={c.icon as any} size={22} className="text-green" />
                  <h2 className="font-heading font-bold text-[28px] text-ink">{c.name}</h2>
                </div>
                <p className="text-[16px] text-graphite leading-relaxed mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.features.map(f => (
                    <span key={f} className="text-[13px] px-3 py-1 rounded-full bg-mist text-graphite border border-black/5">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-heading font-bold text-[24px] text-green">{c.price}</span>
                  <a
                    href={PHONE_HREF}
                    className="px-6 py-3 bg-green hover:bg-green-dark text-white font-heading font-bold text-[14px] rounded-lg transition-colors duration-200"
                  >
                    Узнать цену
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-[32px] text-white mb-4">Не знаете, что выбрать?</h2>
          <p className="text-[16px] text-white/70 mb-8">Мастер приедет бесплатно, покажет образцы и поможет определиться</p>
          <a
            href={PHONE_HREF}
            className="inline-block px-8 py-4 bg-green hover:bg-green-dark text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
          >
            Вызвать замерщика бесплатно
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
