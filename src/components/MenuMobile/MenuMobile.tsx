import { Menu, MenuItem, type MenuProps } from "@mui/material"
import { Link } from "react-router"

export default function MenuMobile({anchorEl, open, onClose} : MenuProps) {
  return (
    <Menu 
            anchorEl={anchorEl}
            open={Boolean(open)}
            onClose={onClose}
        >
            <MenuItem><Link to="/orders">Заказы</Link></MenuItem>
            <MenuItem><Link to="/analytics">Аналитика</Link></MenuItem>
            <MenuItem><Link to="warehouse">Склад</Link></MenuItem>
            <MenuItem>Профиль</MenuItem>
            <MenuItem>Меню</MenuItem>
            <MenuItem>Настройки</MenuItem>
    </Menu>
  )
}
