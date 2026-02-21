import InfoSection from "@/components/patient/medicine/InfoSection";

interface InfoItem {
  title: string;
  content: string;
}

interface Props {
  sections: InfoItem[];
}

export default function MedicineInfoCard({ sections }: Props) {
  return (
    <div className="bg-white shadow-sm mb-6 p-6 sm:p-8 border border-gray-200 rounded-2xl">
      {sections.map((section, index) => (
        <InfoSection
          key={section.title}
          title={section.title}
          content={section.content}
          isLast={index === sections.length - 1}
        />
      ))}
    </div>
  );
}
