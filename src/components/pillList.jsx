import { RxCross1 } from "react-icons/rx";

// Pill List Component
export function PillList({ pills }) {
  return (
    <div className="bg-white p-2">
    <div className="flex gap-1 border p-1 rounded-lg bg-white border-blue-200">
      {pills.map((pill) => (
        <div key={pill} className="flex items-center font-medium gap-1 text-sm text-blue-600 border p-1 rounded-lg whitespace-nowrap">
          {pill}
            <RxCross1 className="text-gray-800"/>
        </div>
      ))}
    </div>
      </div>
  );
}
