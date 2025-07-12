import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
