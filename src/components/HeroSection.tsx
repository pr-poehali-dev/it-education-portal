import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
                <div className="text-3xl font-bold text-orange-500">1000+</div>
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
  );
};

export default HeroSection;
