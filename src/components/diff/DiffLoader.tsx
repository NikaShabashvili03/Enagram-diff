import LoaderIcon from '../../assets/icons/loader.png'

function DiffLoader() {
    return (
        <div className="flex gap-6 h-[463px] items-center justify-center">
            <div className="h-[80px] flex rounded-[8px] p-[16px] gap-[8px] border-[1px] border-[#E1E1E1]">
                <img src={LoaderIcon}/>
                <div>
                    <span className='font-[400] text-[#383A48]/60 text-[10px] tracking-[0px] leading-[16px]'>Converting... Thanks you For your Patience</span>
                    <div className='flex gap-[8px] justify-center items-center'>
                        <span className='font-[700] text-[16px] leading-[24px] text-center'>30%</span>
                        <div className='w-full bg-[#F6F9FF] h-[8px] rounded-[64px]'>
                            <div className='w-2/4 bg-blue-600 h-[8px] rounded-[64px]'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiffLoader
