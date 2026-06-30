import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const KITTEN = 'https://cdn.poehali.dev/projects/1d830b20-e612-4558-b1b4-c0220fa836a8/files/6ec731ce-0bd4-4160-8e7a-42d061110511.jpg';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <span className="font-display text-2xl text-primary">Мурчим</span>
        <nav className="hidden gap-8 text-sm font-medium text-foreground/70 sm:flex">
          <a href="#about" className="transition-colors hover:text-primary">О нас</a>
          <a href="#features" className="transition-colors hover:text-primary">Почему мы</a>
        </nav>
        <Button className="rounded-full px-6">Завести котика</Button>
      </header>

      <main className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-2 lg:pt-20">
        <div className="opacity-0 animate-fade-up">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <Icon name="Heart" size={16} /> Самые милые на свете
          </span>
          <h1 className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Мир, где правят{' '}
            <span className="font-display font-normal text-primary">котики</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/70">
            Тёплые лапки, нежное мурчание и бесконечное обаяние. Окунись в уютную атмосферу пушистого счастья.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 text-base">
              <Icon name="Sparkles" size={18} className="mr-1" /> Познакомиться
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary/30 px-8 text-base text-foreground">
              Узнать больше
            </Button>
          </div>

          <div id="features" className="mt-14 flex gap-10">
            {[
              { icon: 'Cat', value: '120+', label: 'котиков' },
              { icon: 'Star', value: '4.9', label: 'рейтинг' },
              { icon: 'Smile', value: '∞', label: 'мурчания' },
            ].map((s) => (
              <div key={s.label}>
                <div className="flex items-center gap-2 text-3xl font-bold text-foreground">
                  <Icon name={s.icon} size={22} className="text-primary" /> {s.value}
                </div>
                <div className="text-sm text-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-up [animation-delay:200ms]">
          <div className="absolute inset-0 rounded-[2.5rem] bg-primary/10 rotate-6" />
          <img
            src={KITTEN}
            alt="Милый котик"
            className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-2xl animate-float"
          />
          <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
            <span className="text-3xl">🐾</span>
            <div>
              <div className="font-semibold text-foreground">Рыжик</div>
              <div className="text-sm text-foreground/60">всегда рядом</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
