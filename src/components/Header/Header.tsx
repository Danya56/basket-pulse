import { Link } from 'react-router';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import BurgerButton from '../BurgerButton';
import Logo from '../Logo';
import MenuMobile from '../MenuMobile';


export default function Header() {
    const [anchorElUserProfile, setAnchorElUserProfile] = useState<null | HTMLButtonElement>(null);
    const [anchorElMobileMenu, setAnchorElMobileMenu] = useState<null | HTMLButtonElement>(null);

    const handleOpenUserProfile = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorElUserProfile(e.currentTarget)
    const handleOpenMobileMenu = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorElMobileMenu(e.currentTarget)

    return (
        <header className='bg-header h-16 px-4 flex justify-between items-center'>
            <Logo width='40' height='40' fill='#CC522D' />

            <nav className='hidden md:flex justify-between items-center gap-10'>
                <Link to="/orders" className='flex justify-center items-center border-b-3 border-transparent h-16 duration-300 hover:border-accent'>Заказы</Link>
                <Link to="/analytics" className='flex justify-center items-center border-b-3 border-transparent h-16 duration-300 hover:border-accent'>Аналитика</Link>
                <Link to="/warehouse" className='flex justify-center items-center border-b-3 border-transparent h-16 duration-300 hover:border-accent'>Склад</Link>
            </nav>

            <div className='flex items-center'>
                <IconButton
                    onClick={handleOpenUserProfile}
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'inline-flex'
                        }
                    }}
                >
                    <Avatar />
                </IconButton>

                <BurgerButton isOpen={Boolean(anchorElMobileMenu)} onClick={handleOpenMobileMenu} />
            </div>



            <Menu
                anchorEl={anchorElUserProfile}
                open={Boolean(anchorElUserProfile)}
                onClose={() => setAnchorElUserProfile(null)}
            >
                <MenuItem>Профиль</MenuItem>
                <MenuItem>Настройки</MenuItem>
                <MenuItem>Выйти</MenuItem>
            </Menu>

            <MenuMobile anchorEl={anchorElMobileMenu} open={Boolean(anchorElMobileMenu)} onClose={() => setAnchorElMobileMenu(null)} />
        </header>
    )
}