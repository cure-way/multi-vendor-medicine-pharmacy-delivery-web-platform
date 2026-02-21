interface Props {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionTitle({ title, subtitle, badge }: Props) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3">
        <h1 className="font-semibold text-gray-900 text-xl">{title}</h1>
        {badge && (
          <span className="bg-green-100 px-2 py-0.5 rounded-full font-medium text-green-600 text-xs">
            {badge}
          </span>
        )}
      </div>
      {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
    </div>
  );
}
