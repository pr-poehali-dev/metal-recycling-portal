import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5e6a6e0c-49ac-4376-9d0b-3f68c6a98f5d/files/8174f92e-5964-4451-956c-3a0ce161ca3c.jpg";

const ferrousMetals = [
  { name: "Лом стальной (3А)", price: "от 14 000", unit: "₽/т" },
  { name: "Лом чугунный", price: "от 8 000", unit: "₽/т" },
  { name: "Лом смешанный (5А)", price: "от 10 000", unit: "₽/т" },
  { name: "Лом негабаритный", price: "от 9 000", unit: "₽/т" },
];

const nonFerrousMetals = [
  { name: "Медь (кабель)", price: "от 580 000", unit: "₽/т" },
  { name: "Алюминий", price: "от 110 000", unit: "₽/т" },
  { name: "Латунь", price: "от 280 000", unit: "₽/т" },
  { name: "Нержавеющая сталь", price: "от 60 000", unit: "₽/т" },
  { name: "Свинец", price: "от 130 000", unit: "₽/т" },
  { name: "Цинк", price: "от 90 000", unit: "₽/т" },
];

const advantages = [
  { icon: "Truck", label: "Бесплатный выезд", desc: "Оценщик приедет в день обращения" },
  { icon: "Scale", label: "Честный вес", desc: "Сертифицированное оборудование" },
  { icon: "Banknote", label: "Расчёт на месте", desc: "Наличные или перевод" },
  { icon: "Clock", label: "Работаем 7 дней", desc: "С 8:00 до 20:00" },
];

const metalTypes = [
  "Лом стальной (3А)",
  "Лом чугунный",
  "Лом смешанный (5А)",
  "Медь",
  "Алюминий",
  "Латунь",
  "Нержавеющая сталь",
  "Другое",
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", metal: "", address: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gray-900 flex items-center justify-center">
              <Icon name="Layers" size={14} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">МеталлЛом</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <button onClick={() => scrollTo("prices")} className="hover:text-gray-900 transition-colors">Прайс-лист</button>
            <button onClick={() => scrollTo("order")} className="hover:text-gray-900 transition-colors">Сдать лом</button>
            <button onClick={() => scrollTo("contacts")} className="hover:text-gray-900 transition-colors">Контакты</button>
          </nav>
          <button
            onClick={() => scrollTo("order")}
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-gray-700 transition-colors"
          >
            Вызвать оценщика
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex flex-col">
        <div className="relative flex-1 grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-32">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest mb-8 border border-gray-200 px-3 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Принимаем лом сегодня
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-gray-900 mb-6">
              Покупаем<br />
              <span className="text-gray-400">чёрный</span> и<br />
              цветной металл
            </h1>
            <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed">
              Выезд оценщика бесплатно. Честный вес. Расчёт на месте — наличными или переводом.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("order")}
                className="bg-gray-900 text-white font-semibold px-8 py-4 hover:bg-gray-700 transition-colors text-sm"
              >
                Вызвать оценщика →
              </button>
              <button
                onClick={() => scrollTo("prices")}
                className="border border-gray-300 text-gray-700 font-semibold px-8 py-4 hover:border-gray-900 transition-colors text-sm"
              >
                Смотреть прайс
              </button>
            </div>
            <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-black text-gray-900">15+</div>
                <div className="text-xs text-gray-400 mt-0.5">лет на рынке</div>
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">2 000+</div>
                <div className="text-xs text-gray-400 mt-0.5">клиентов</div>
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">300 т</div>
                <div className="text-xs text-gray-400 mt-0.5">принимаем/мес.</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <img
              src={HERO_IMAGE}
              alt="Металлолом"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {advantages.map((adv) => (
            <div key={adv.label} className="flex flex-col gap-3">
              <div className="w-10 h-10 border border-gray-600 flex items-center justify-center">
                <Icon name={adv.icon} size={18} className="text-gray-300" />
              </div>
              <div className="font-semibold text-sm">{adv.label}</div>
              <div className="text-xs text-gray-400 leading-relaxed">{adv.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Актуальные цены</div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Прайс-лист</h2>
          <p className="text-gray-500 mt-3 text-sm">Цены обновляются ежедневно. Окончательная стоимость определяется после осмотра.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-gray-900"></div>
              <h3 className="font-bold text-lg text-gray-900">Чёрные металлы</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {ferrousMetals.map((item) => (
                <div key={item.name} className="flex items-center justify-between py-4 hover:bg-gray-50 -mx-4 px-4 transition-colors">
                  <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 text-sm">{item.price}</span>
                    <span className="text-xs text-gray-400 ml-1">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-amber-500"></div>
              <h3 className="font-bold text-lg text-gray-900">Цветные металлы</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {nonFerrousMetals.map((item) => (
                <div key={item.name} className="flex items-center justify-between py-4 hover:bg-gray-50 -mx-4 px-4 transition-colors">
                  <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 text-sm">{item.price}</span>
                    <span className="text-xs text-gray-400 ml-1">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 border border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
          <Icon name="Info" size={18} className="text-gray-400 shrink-0" />
          <p className="text-sm text-gray-500">
            Цены указаны ориентировочно и могут отличаться в зависимости от объёма, качества и степени засорённости лома.
            Для точной оценки вызовите оценщика — выезд бесплатно.
          </p>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Вывоз лома</div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-6">
                Оставьте заявку — оценщик приедет в день обращения
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Заполните форму, мы свяжемся в течение 15 минут, согласуем время и адрес. Оценка и вывоз — бесплатно.
              </p>
              <div className="space-y-5">
                {[
                  { num: "01", text: "Оставьте заявку" },
                  { num: "02", text: "Оценщик приезжает и взвешивает лом" },
                  { num: "03", text: "Получаете деньги на месте" },
                ].map((step) => (
                  <div key={step.num} className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-400 shrink-0">
                      {step.num}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon name="Check" size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Заявка принята!</h3>
                  <p className="text-gray-500 text-sm">Мы свяжемся с вами в течение 15 минут для подтверждения времени выезда.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", metal: "", address: "", comment: "" }); }}
                    className="mt-6 text-sm text-gray-400 hover:text-gray-900 transition-colors underline"
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Петров"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Тип металла</label>
                    <select
                      required
                      value={form.metal}
                      onChange={(e) => setForm({ ...form, metal: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors bg-white text-gray-700"
                    >
                      <option value="">Выберите тип...</option>
                      {metalTypes.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Адрес вывоза</label>
                    <input
                      type="text"
                      required
                      placeholder="Улица, дом"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Комментарий (необязательно)</label>
                    <textarea
                      rows={3}
                      placeholder="Примерный объём, особенности доступа..."
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors resize-none placeholder:text-gray-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white font-semibold py-4 text-sm hover:bg-gray-700 transition-colors mt-2"
                  >
                    Вызвать оценщика →
                  </button>
                  <p className="text-xs text-gray-400 text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Как нас найти</div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Контакты</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-100 p-6 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
              <Icon name="Phone" size={16} className="text-gray-700" />
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Телефон</div>
            <a href="tel:+78001234567" className="font-bold text-gray-900 text-lg hover:text-gray-600 transition-colors block">
              +7 (800) 123-45-67
            </a>
            <div className="text-xs text-gray-400 mt-1">Звонок бесплатный</div>
          </div>

          <div className="border border-gray-100 p-6 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
              <Icon name="MapPin" size={16} className="text-gray-700" />
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Адрес</div>
            <div className="font-bold text-gray-900 text-base leading-snug">
              г. Москва,<br />ул. Промышленная, д. 15
            </div>
            <div className="text-xs text-gray-400 mt-1">Пункт приёма</div>
          </div>

          <div className="border border-gray-100 p-6 hover:border-gray-300 transition-colors">
            <div className="w-10 h-10 bg-gray-50 border border-gray-100 flex items-center justify-center mb-5">
              <Icon name="Clock" size={16} className="text-gray-700" />
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Режим работы</div>
            <div className="font-bold text-gray-900 text-base">Пн – Вс</div>
            <div className="text-sm text-gray-500 mt-1">с 8:00 до 20:00</div>
            <div className="text-xs text-gray-400 mt-1">Без выходных</div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="font-bold text-base mb-1">Нужна срочная оценка?</div>
            <div className="text-sm text-gray-400">Позвоните — приедем в течение 2 часов</div>
          </div>
          <a
            href="tel:+78001234567"
            className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 text-sm hover:bg-gray-100 transition-colors shrink-0"
          >
            <Icon name="Phone" size={14} />
            Позвонить сейчас
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-900 flex items-center justify-center">
              <Icon name="Layers" size={10} className="text-white" />
            </div>
            <span className="font-medium text-gray-600">МеталлЛом</span>
          </div>
          <div>© 2024 МеталлЛом. Все права защищены.</div>
          <div className="flex gap-6">
            <button onClick={() => scrollTo("prices")} className="hover:text-gray-900 transition-colors">Прайс</button>
            <button onClick={() => scrollTo("order")} className="hover:text-gray-900 transition-colors">Сдать лом</button>
            <button onClick={() => scrollTo("contacts")} className="hover:text-gray-900 transition-colors">Контакты</button>
          </div>
        </div>
      </footer>

    </div>
  );
}