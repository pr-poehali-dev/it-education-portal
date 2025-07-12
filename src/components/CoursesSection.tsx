import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const courses = [
    {
      title: "Python",
      description: "Универсальный язык",
      iconName: "Code",
      features: [
        "Основы программирования",
        "Веб-разработка (Django)",
        "Машинное обучение",
        "Автоматизация процессов",
      ],
      price: "49 900 ₽",
      duration: "8 месяцев",
      bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconBg: "bg-blue-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      priceColor: "text-blue-600",
    },
    {
      title: "JavaScript",
      description: "Веб-разработка",
      iconName: "Globe",
      features: [
        "Frontend (React, Vue)",
        "Backend (Node.js)",
        "Мобильные приложения",
        "Современные фреймворки",
      ],
      price: "54 900 ₽",
      duration: "10 месяцев",
      bgGradient: "bg-gradient-to-br from-yellow-50 to-amber-50",
      iconBg: "bg-yellow-500",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      priceColor: "text-yellow-600",
    },
    {
      title: "Java",
      description: "Enterprise разработка",
      iconName: "Coffee",
      features: [
        "ООП и паттерны",
        "Spring Framework",
        "Микросервисы",
        "Android разработка",
      ],
      price: "59 900 ₽",
      duration: "12 месяцев",
      bgGradient: "bg-gradient-to-br from-red-50 to-orange-50",
      iconBg: "bg-red-500",
      buttonColor: "bg-red-500 hover:bg-red-600",
      priceColor: "text-red-600",
    },
  ];

  return (
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
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
