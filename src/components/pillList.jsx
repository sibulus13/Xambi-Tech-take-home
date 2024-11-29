import { RxCross1 } from "react-icons/rx";

// Pill List Component
export function PillList({ pills, onRemove, index }) {
  return (
    <div>
      {pills.length > 0 &&
     <div className="bg-white p-2">
      <div className="flex gap-1 border p-1 rounded-lg bg-white border-blue-200">
        {pills.map((pill, i) => (
          <div key={i} className="flex items-center font-medium gap-1 text-sm text-blue-600 border p-1 rounded-lg whitespace-nowrap">
            {pill}
              <RxCross1 className="text-gray-800" onClick={()=>onRemove(index, i)}/>
          </div>
        ))}
      </div>
      </div>
      }
      </div>
    );     
}
