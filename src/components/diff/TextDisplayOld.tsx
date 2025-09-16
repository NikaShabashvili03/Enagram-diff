import type { IDiffPart } from "../../types";

export const TextDisplayOld: React.FC<{ diffResult: IDiffPart[] }> = ({ diffResult }) => {
  return (
    <div className="w-full min-h-[432px]  p-4 bg-blue-50 border border-blue-100 rounded-lg resize-none font-mono text-sm leading-relaxed">
      {diffResult.map((part, index) => {
        if (part.removed) {
          return (
            <span key={index} className="bg-red-500 text-white px-1 rounded">
              {part.value}
            </span>
          );
        }
        if (!part.added) {
          return <span className="bg-green-500 text-white px-1 rounded" key={index}>{part.value}</span>;
        }
        return null;
      })}
    </div>
  );
};
