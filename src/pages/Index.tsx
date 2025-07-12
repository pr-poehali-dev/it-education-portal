import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Code" className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                IT Академия
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#courses"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Курсы
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Стань{" "}
                <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                  программистом
                </span>
                <br />
                мечты!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Изучай программирование с нуля до профессионального уровня.
                Практические проекты, современные технологии, гарантия
                трудоустройства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
                >
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Начать обучение
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
                >
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Бесплатный урок
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">
                    1000+
                  </div>
                  <div className="text-gray-600">Выпускников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-gray-600">Трудоустройство</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">4.9</div>
                  <div className="text-gray-600">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <img
                src="/img/afd3eff5-3ffd-477e-80cc-9a8134d5c513.jpg"
                alt="Рабочее место программиста"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Наши{" "}
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                курсы программирования
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выбери направление, которое изменит твою жизнь. От основ до
              продвинутых технологий — у нас есть всё!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Python Course */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-500 rounded-xl">
                    <Icon name="Code" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Python</CardTitle>
                    <CardDescription>Универсальный язык</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Основы программирования
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Веб-разработка (Django)
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Машинное обучение
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Автоматизация процессов
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    49 900 ₽
                  </span>
                  <span className="text-gray-500">8 месяцев</span>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* JavaScript Course */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-yellow-500 rounded-xl">
                    <Icon name="Globe" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">JavaScript</CardTitle>
                    <CardDescription>Веб-разработка</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Frontend (React, Vue)
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Backend (Node.js)
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Мобильные приложения
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Современные фреймворки
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-600">
                    54 900 ₽
                  </span>
                  <span className="text-gray-500">10 месяцев</span>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            {/* Java Course */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-br from-red-50 to-orange-50 rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-500 rounded-xl">
                    <Icon name="Coffee" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Java</CardTitle>
                    <CardDescription>Enterprise разработка</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    ООП и паттерны
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Spring Framework
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Микросервисы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-500 mr-2"
                    />
                    Android разработка
                  </li>
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-600">
                    59 900 ₽
                  </span>
                  <span className="text-gray-500">12 месяцев</span>
                </div>
                <Button className="w-full bg-red-500 hover:bg-red-600">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-purple-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Почему выбирают
                <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                  именно нас?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы — команда практикующих разработчиков, которые знают, как
                превратить новичка в востребованного специалиста за кратчайшие
                сроки.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Icon name="Target" className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Практический подход
                    </h3>
                    <p className="text-gray-600">
                      Каждый урок — это реальный проект для вашего портфолио
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Icon name="Users" className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Менторская поддержка
                    </h3>
                    <p className="text-gray-600">
                      Персональный ментор ведёт вас от первого урока до
                      трудоустройства
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Icon
                      name="Briefcase"
                      className="h-6 w-6 text-orange-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Гарантия трудоустройства
                    </h3>
                    <p className="text-gray-600">
                      Если не найдём вам работу — вернём деньги
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 bg-white rounded-2xl shadow-lg">
                    <Icon name="Code2" className="h-8 w-8 text-blue-500 mb-3" />
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600">Часов практики</div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg">
                    <Icon
                      name="Trophy"
                      className="h-8 w-8 text-yellow-500 mb-3"
                    />
                    <div className="text-2xl font-bold text-yellow-600">
                      15+
                    </div>
                    <div className="text-gray-600">Проектов в портфолио</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-6 bg-white rounded-2xl shadow-lg">
                    <Icon
                      name="Clock"
                      className="h-8 w-8 text-green-500 mb-3"
                    />
                    <div className="text-2xl font-bold text-green-600">
                      3 мес.
                    </div>
                    <div className="text-gray-600">До первой работы</div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg">
                    <Icon
                      name="DollarSign"
                      className="h-8 w-8 text-purple-500 mb-3"
                    />
                    <div className="text-2xl font-bold text-purple-600">
                      120k₽
                    </div>
                    <div className="text-gray-600">Средняя зарплата</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готов изменить свою
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              жизнь?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Запишись на бесплатную консультацию прямо сейчас. Расскажем о
            программе, ответим на все вопросы и поможем выбрать направление.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3 text-gray-600">
              <Icon name="Phone" className="h-5 w-5 text-orange-500" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Icon name="Mail" className="h-5 w-5 text-purple-500" />
              <span>info@itacademy.ru</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Icon name="MapPin" className="h-5 w-5 text-orange-500" />
              <span>Москва, ул. Технологическая, 1</span>
            </div>
          </div>
          <div className="mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-12 py-4 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Code" className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                  IT Академия
                </span>
              </div>
              <p className="text-gray-400">
                Лучшая IT-школа для тех, кто хочет стать программистом мечты.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Курсы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Python
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    JavaScript
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Java
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Преподаватели
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Отзывы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Связь</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@itacademy.ru</li>
                <li>Москва, ул. Технологическая, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IT Академия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
