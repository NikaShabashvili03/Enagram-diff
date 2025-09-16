import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useState } from "react"
import clsx from "clsx"
import ChevronLeft from '../assets/icons/chevrons-left.png'
import { routes } from '../routes/routes'


function CustomOutler() {
    const [isOpenSidebar, setOpenSidebar] = useState<boolean>(false)
    const { pathname } = useLocation()
    const { icon, title } = routes.filter(({ path }) => path === pathname)[0]!
    
    return (
        <div className="flex justify-center flex-col sm:flex-row items-center w-full h-dvh">
            <Sidebar
                setOpenSidebar={setOpenSidebar}
                isOpenSidebar={isOpenSidebar}
            />
            <button onClick={() => setOpenSidebar(!isOpenSidebar)} className="hidden md:block fixed left-0 top-0 p-2 rounded-br-full cursor-pointer bg-[#132450]/80 text-sm">
                <img src={ChevronLeft} className="rotate-180"/>
            </button>
            <div className={clsx(
                "w-full h-full",
                isOpenSidebar ? "md:ml-0 mt-[120px] md:mt-0" : "md:ml-[240px]"
            )}>
                <div className="px-[14px] md:hidden min-h-[72px] flex items-center">
    
                    <div className='flex w-full h-full gap-[9px] items-center'>
                        <img src={icon} className="w-[24px] h-[24px] object-cover" alt={title}/>
                        <span className='text-[16px] text-[#132450] font-[700] leading-[20px]'>{title}</span>
                    </div>
    
                </div>
                <Outlet/>
            </div>
        </div>    
    )
}

export default CustomOutler
