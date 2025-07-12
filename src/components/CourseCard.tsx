import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CourseCardProps {
  title: string;
  description: string;
  iconName: string;
  features: string[];
  price: string;
  duration: string;
  bgGradient: string;
  iconBg: string;
  buttonColor: string;
  priceColor: string;
}

const CourseCard = ({
  title,
  description,
  iconName,
  features,
  price,
  duration,
  bgGradient,
  iconBg,
  buttonColor,
  priceColor,
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
      <CardHeader className={`${bgGradient} rounded-t-lg`}>
        <div className="flex items-center space-x-3">
          <div className={`p-3 ${iconBg} rounded-xl`}>
            <Icon name={iconName as any} className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-2xl font-bold ${priceColor}`}>{price}</span>
          <span className="text-gray-500">{duration}</span>
        </div>
        <Button className={`w-full ${buttonColor}`}>Подробнее</Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
