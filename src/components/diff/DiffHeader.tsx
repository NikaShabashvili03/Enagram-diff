import PlusIcon from '../../assets/icons/Plus.png'
import ArrowDownIcon from '../../assets/icons/ArrowDown.png'

function DiffHeader() {
    return (
        <div className='w-full flex gap-[14px] sm:gap-0 flex-col sm:flex-row justify-between items-center min-h-[58px] border-b-[1px] border-[#EDEDED]'>
            <div className='h-full w-full sm:w-auto gap-[14px] sm:gap-[24px] flex flex-col sm:flex-row justify-center items-start sm:items-center'>
                <button className='flex w-full sm:w-auto items-center gap-[4px] justify-between rounded-[8px] border-[1px]  pl-[14px] py-[4px] pr-[6px] border-[#E0E0E0]'>
                    <span className='font-[400] text-[14px] leading-[22px]'>ქართული</span>
                    <img src={ArrowDownIcon} alt='arrow' className='object-cover'/>
                </button>
                <label className='font-[400] text-[14px] leading-[22px] gap-[4px] flex items-center justify-center'>
                    <input className='w-[20px] h-[20px] rounded-[4px] border-[1px] border-[#E0E0E0]' type='checkbox'/>
                    ფორმატის შენარჩუნება
                </label>
            </div>
            <button className='p-[10px] w-full sm:w-auto cursor-pointer flex items-center h-[42px] gap-[4px] bg-[#383A48]/60 rounded-[6px]'>
                <img src={PlusIcon} alt='plus' className='object-cover'/>
                <span className='text-white leading-[28px] text-[14px] font-[400]'>ახლს გახსნა</span>
            </button>
        </div>
    )
}

export default DiffHeader
