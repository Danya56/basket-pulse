import { IconButton, type IconButtonProps } from '@mui/material'

interface BurgerButtonProps extends IconButtonProps {
    isOpen: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function BurgerButton({isOpen, onClick, sx, ...props} : BurgerButtonProps ) {
    return (
        <IconButton
            {...props}

            sx={{
                display: {
                    xs: 'block',
                    md: 'none'
                },
                ...sx
            }}

            className="flex justify-center items-center relative group"
            onClick={onClick}
        >
            <div className={`relative flex items-center justify-center rounded-full w-10 h-10 transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md ${isOpen ? 'ring-2' : ''}`}>
                <div className={`flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center ${isOpen ? '-rotate-[45deg]' : ''}`}>
                    <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 origin-right delay-75 ${isOpen ? '-rotate-[90deg] h-[1px] -translate-y-[1px]' : ''}`}></div>
                    <div className="bg-white h-[1px] rounded"></div>
                    <div className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 ${isOpen ? '-rotate-[90deg] h-[1px] translate-y-[1px]' : ''}`}></div>
                </div>
            </div>

        </IconButton>
    )
}