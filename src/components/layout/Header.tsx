import { Link, useLocation } from 'react-router-dom';
import { LOGO, PHONE, PHONE_HREF } from './assets';

const NAV = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/portfolio', label: 'Портфолио' },
  { to: '/about', label: 'О компании' },
  { to: '/contacts', label: 'Контакты' },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={LOGO} alt="Маркиза-ДВ" className="h-14 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition-colors ${
                pathname === item.to ? 'text-green-light' : 'text-white/80 hover:text-green-light'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={PHONE_HREF}
          className="font-heading font-bold text-[15px] text-white hover:text-green-light transition-colors whitespace-nowrap"
        >
          {PHONE}
        </a>
      </div>
    </header>
  );
};

export default Header;
