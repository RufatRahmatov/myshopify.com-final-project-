"use client";
interface CardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  change: string;
  changeType: "increase" | "decrease";
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  icon,
  change,
  changeType,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center font-medium">
      <div>
        <h2 className="text-sm font-medium text-gray-600">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
        <p
          className={`text-sm ${
            changeType === "increase" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </p>
      </div>
      <div className="text-2xl text-gray-400">{icon}</div>
    </div>
  );
};

export default Card;
