import Icon from "@/components/ui/icon";

const Footer = () => {
  const footerSections = [
    {
      title: "Курсы",
      links: [
        { name: "Python", href: "#" },
        { name: "JavaScript", href: "#" },
        { name: "Java", href: "#" },
      ],
    },
    {
      title: "Компания",
      links: [
        { name: "О нас", href: "#" },
        { name: "Преподаватели", href: "#" },
        { name: "Отзывы", href: "#" },
      ],
    },
    {
      title: "Связь",
      links: [
        { name: "+7 (999) 123-45-67", href: "tel:+79991234567" },
        { name: "info@itacademy.ru", href: "mailto:info@itacademy.ru" },
        { name: "Москва, ул. Технологическая, 1", href: "#" },
      ],
    },
  ];

  return (
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

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 IT Академия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
