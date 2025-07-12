import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const features = [
    {
      icon: "Target",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      title: "Практический подход",
      description: "Каждый урок — это реальный проект для вашего портфолио",
    },
    {
      icon: "Users",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      title: "Менторская поддержка",
      description:
        "Персональный ментор ведёт вас от первого урока до трудоустройства",
    },
    {
      icon: "Briefcase",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      title: "Гарантия трудоустройства",
      description: "Если не найдём вам работу — вернём деньги",
    },
  ];

  const stats = [
    {
      icon: "Code2",
      iconColor: "text-blue-500",
      value: "500+",
      valueColor: "text-blue-600",
      label: "Часов практики",
    },
    {
      icon: "Trophy",
      iconColor: "text-yellow-500",
      value: "15+",
      valueColor: "text-yellow-600",
      label: "Проектов в портфолио",
    },
    {
      icon: "Clock",
      iconColor: "text-green-500",
      value: "3 мес.",
      valueColor: "text-green-600",
      label: "До первой работы",
    },
    {
      icon: "DollarSign",
      iconColor: "text-purple-500",
      value: "120k₽",
      valueColor: "text-purple-600",
      label: "Средняя зарплата",
    },
  ];

  return (
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
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`p-2 ${feature.iconBg} rounded-lg`}>
                    <Icon
                      name={feature.icon as any}
                      className={`h-6 w-6 ${feature.iconColor}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-2xl shadow-lg"
                  >
                    <Icon
                      name={stat.icon as any}
                      className={`h-8 w-8 ${stat.iconColor} mb-3`}
                    />
                    <div className={`text-2xl font-bold ${stat.valueColor}`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 mt-8">
                {stats.slice(2, 4).map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-2xl shadow-lg"
                  >
                    <Icon
                      name={stat.icon as any}
                      className={`h-8 w-8 ${stat.iconColor} mb-3`}
                    />
                    <div className={`text-2xl font-bold ${stat.valueColor}`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
