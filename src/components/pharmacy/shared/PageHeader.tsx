import { FiHome } from "react-icons/fi";

export default function PageHeader({
  title,
  subTitle = "Manage your pharmacy",
  icon: Icon = FiHome,
}: {
  title: string;
  subTitle?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="flex items-start gap-2 mb-6">
      <Icon className="mt-1 text-(--color-primary) text-lg" />

      <div>
        <h1 className="font-semibold text-(--color-primary) text-lg">
          {title}
        </h1>
        <p className="text-gray-500 text-sm">{subTitle}</p>
      </div>
    </div>
  );
}
