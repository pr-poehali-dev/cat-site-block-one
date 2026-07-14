import { Link } from 'react-router-dom';
import { LOGO, PHONE, PHONE_HREF } from './assets';

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={LOGO} alt="Маркиза-ДВ" className="h-12 w-auto mb-4" />
          <p className="text-[14px] text-white/60 leading-relaxed">
            Перголы, маркизы, жалюзи, рулонные шторы и остекление балконов во Владивостоке.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-white text-[15px] mb-4">Разделы</h4>
          <div className="flex flex-col gap-2 text-[14px] text-white/60">
            <Link to="/catalog" className="hover:text-green-light transition-colors">Каталог</Link>
            <Link to="/portfolio" className="hover:text-green-light transition-colors">Портфолио</Link>
            <Link to="/about" className="hover:text-green-light transition-colors">О компании</Link>
            <Link to="/contacts" className="hover:text-green-light transition-colors">Контакты</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold text-white text-[15px] mb-4">Продукция</h4>
          <div className="flex flex-col gap-2 text-[14px] text-white/60">
            <span>Биоклиматические перголы</span>
            <span>Маркизы</span>
            <span>Жалюзи</span>
            <span>Рулонные шторы</span>
            <span>Остекление балконов</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold text-white text-[15px] mb-4">Контакты</h4>
          <div className="flex flex-col gap-2 text-[14px] text-white/60">
            <a href={PHONE_HREF} className="hover:text-green-light transition-colors">{PHONE}</a>
            <span>Владивосток, [адрес]</span>
            <span>Пн–Пт 9:00–18:00, Сб 10:00–15:00</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-white/40">
          <span>ИП / ООО «Маркиза-ДВ» | ИНН XXXXXXXXXXXX</span>
          <a href="#" className="hover:text-green-light transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
