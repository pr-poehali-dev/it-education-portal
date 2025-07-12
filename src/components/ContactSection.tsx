import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Phone",
      iconColor: "text-orange-500",
      text: "+7 (999) 123-45-67",
    },
    {
      icon: "Mail",
      iconColor: "text-purple-500",
      text: "info@itacademy.ru",
    },
    {
      icon: "MapPin",
      iconColor: "text-orange-500",
      text: "Москва, ул. Технологическая, 1",
    },
  ];

  return (
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
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-gray-600"
            >
              <Icon
                name={contact.icon as any}
                className={`h-5 w-5 ${contact.iconColor}`}
              />
              <span>{contact.text}</span>
            </div>
          ))}
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
  );
};

export default ContactSection;
