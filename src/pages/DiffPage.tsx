import React from 'react'
import DiffViewer from '../components/diff/DiffViewer'
import useDiffStore from '../stores/useDiffStore';
import { RotateCcw } from 'lucide-react';
import DiffLoader from '../components/diff/DiffLoader';
import DiffHeader from '../components/diff/DiffHeader';

function DiffPage() {
    const { 
        oldText, 
        newText, 
        diffResult,
        isCompared,
        setOldText, 
        setNewText, 
        compareDiff, 
        reset,
        loading
    } = useDiffStore();

    const isCompareDisabled = !oldText.trim() || !newText.trim();

    return (
        <div className="h-full p-4 w-full">
          <DiffHeader/>
          {loading 
            ? <DiffLoader/>
            : <DiffViewer
                oldText={oldText}
                newText={newText}
                diffResult={diffResult}
                setOldText={setOldText}
                setNewText={setNewText}
                isCompared={isCompared}
            />
          }
          <div className="flex justify-center">
            <button
              onClick={isCompared ? reset : compareDiff}
              disabled={!isCompared && isCompareDisabled}
              className={`px-8 py-3 mb-5 md:mb-0 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                !isCompared && isCompareDisabled
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-[#4571E4] text-white hover:bg-[#4571E4]/90 cursor-pointer hover:shadow-lg'
              }`}
            >
              {isCompared ? (
                <>
                  <RotateCcw className="w-4 h-4" />
                  თავიდან
                </>
              ) : (
                'შედარება'
              )}
            </button>
          </div> 
      </div>
    )
}

export default DiffPage
