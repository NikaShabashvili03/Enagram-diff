import { ArrowLeftRight } from 'lucide-react';
import { TextDisplayOld } from './TextDisplayOld';
import { TextDisplayNew } from './TextDisplayNew';
import type { IDiffPart } from '../../types';

interface DiffViewerProps {
    newText: string;
    oldText: string;
    isCompared: boolean;
    diffResult: IDiffPart[] | null;
    setOldText: (text: string) => void;
    setNewText: (text: string) => void;
}
export const DiffViewer = ({
    newText,
    oldText,
    isCompared,
    diffResult,
    setOldText,
    setNewText
}: DiffViewerProps) => {
  return (
    <div className='flex gap-[10px] flex-col md:flex-row items-center justify-center'>
            <div className="py-4 w-full h-fit">
              {isCompared && diffResult ? (
                <TextDisplayOld diffResult={diffResult} />
              ) : (
                <textarea
                  value={oldText}
                  onChange={(e) => setOldText(e.target.value)}
                  placeholder="დაიწყე წერა..."
                  className="w-full min-h-[432px] p-4 outline-0 bg-blue-50 border border-blue-100 rounded-lg resize-none font-mono text-sm ring-0 leading-relaxed"
                />
              )}
            </div>


            <div className="flex justify-center">
              <div className="bg-white rounded-full p-3 shadow-sm border border-gray-200">
                <ArrowLeftRight className="w-5 h-5 rotate-90 md:rotate-0 text-gray-500" />
              </div>
            </div>

           <div className="py-4 w-full h-fit">
              {isCompared && diffResult ? (
                <TextDisplayNew diffResult={diffResult} />
              ) : (
                <textarea
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="დაიწყე წერა..."
                  className="w-full min-h-[432px] p-4 outline-0 bg-blue-50 border border-blue-100 rounded-lg resize-none font-mono text-sm ring-0 leading-relaxed"
                />
              )}
            </div>
      </div>
  );
};

export default DiffViewer;