import UserImage from '../assets/images/User.png'
import DotsIcon from '../assets/icons/dots.png'
import clsx from 'clsx'
import type { Dispatch, SetStateAction } from 'react'
import Logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import ChevronLeft from '../assets/icons/chevrons-left.png'
import { routes } from '../routes/routes'
import BurgerIcon from '../assets/icons/menu.png'

interface SidebarProps {
    isOpenSidebar: boolean
    setOpenSidebar: Dispatch<SetStateAction<boolean>>
}

function Sidebar({
    isOpenSidebar,
    setOpenSidebar
}: SidebarProps) {
    const { pathname } = useLocation()
    return (
        <div className={clsx(
            'w-full md:w-[240px] min-h-[60px] z-50 fixed top-0 md:transition-all bg-[#132450] text-white md:h-full flex flex-col justify-between items-start',
            isOpenSidebar ? "md:-left-full" : "md:left-0"
        )}>
            <div className='w-full py-2'>
                <div className='px-[14px] hidden md:flex justify-end items-center w-full'>
                    <button className='cursor-pointer' onClick={() => setOpenSidebar(!isOpenSidebar)}>
                        <img src={ChevronLeft} alt='left'/>
                    </button>
                </div>
                <div className='px-[14px] flex justify-between items-center'>
                    <Link to={'/'}>
                        <img src={Logo} alt='logo' className='object-cover'/>
                    </Link>
                    <button className='block md:hidden cursor-pointer' onClick={() => setOpenSidebar(!isOpenSidebar)}>
                        <img src={BurgerIcon} alt='buger'/>
                    </button>
                </div>
                <ul className={clsx(
                    'flex-col gap-2 pt-20',
                    isOpenSidebar ? "hidden md:flex" : "flex"
                )}>
                    {routes.map(({ icon, title, path }, i) => (
                        <li className={clsx(
                            'flex w-full ml-[8px] pl-[8px] py-3 rounded-l-[30px]',
                            pathname === path ? "text-[#132450] font-[700] bg-white" : "font-[400]"
                        )} key={i}>
                            <Link className='flex w-full h-full gap-[9px] items-center' to={path}>
                                <img src={icon} alt={title}/>
                                <span className='text-[14px] leading-[20px]'>{title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={clsx(
                'border-t-[1px] p-[14px] flex justify-between items-center border-[#9EB9FF33] w-full',
                isOpenSidebar ? "hidden md:flex" : "flex"
            )}>
                <div className='flex justify-center gap-[3px] items-center'>
                    <img src={UserImage} alt='თამარ'/>
                    <p className='font-[400] text-[14px] leading-[20px]'>თამარ ონიანი</p>
                </div>
                <img src={DotsIcon} alt='...'/>
            </div>
        </div>
    )
}

export default Sidebar
