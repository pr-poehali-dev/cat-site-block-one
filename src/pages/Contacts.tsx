import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { PHONE, PHONE_HREF } from '@/components/layout/assets';

const Contacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-mist font-sans">
      <Header />

      <section className="bg-ink py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-heading font-bold text-[40px] text-white mb-3">Контакты</h1>
          <p className="text-[16px] text-white/70">Свяжитесь с нами любым удобным способом</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={22} className="text-green" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[16px] text-ink mb-1">Телефон</h3>
                <a href={PHONE_HREF} className="text-[16px] text-graphite hover:text-green transition-colors">{PHONE}</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={22} className="text-green" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[16px] text-ink mb-1">Мессенджеры</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-[15px] text-green hover:underline">WhatsApp</a>
                  <a href="#" className="text-[15px] text-green hover:underline">Telegram</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={22} className="text-green" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[16px] text-ink mb-1">Адрес</h3>
                <p className="text-[15px] text-graphite">Владивосток, [адрес] · Артём, [адрес]</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={22} className="text-green" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[16px] text-ink mb-1">Режим работы</h3>
                <p className="text-[15px] text-graphite">Пн–Пт 9:00–18:00, Сб 10:00–15:00</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8">
            <h2 className="font-heading font-bold text-[24px] text-ink mb-2">Заказать бесплатный замер</h2>
            <p className="text-[15px] text-graphite mb-6">Оставьте контакты — перезвоним в течение 15 минут</p>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[14px] text-graphite mb-1">Ваше имя</label>
                <input
                  type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Иван"
                  className="w-full border border-black/10 rounded-lg px-4 py-3 text-[16px] text-ink outline-none focus:border-green transition-colors"
                />
              </div>
              <div>
                <label className="block text-[14px] text-graphite mb-1">Телефон</label>
                <input
                  type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__"
                  className="w-full border border-black/10 rounded-lg px-4 py-3 text-[16px] text-ink outline-none focus:border-green transition-colors"
                />
              </div>
              <button
                className="w-full py-4 bg-green hover:bg-green-dark text-white font-heading font-bold text-[16px] rounded-lg transition-colors duration-200"
              >
                Оставить заявку
              </button>
              <p className="text-[12px] text-graphite/70 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
