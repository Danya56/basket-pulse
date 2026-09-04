export default function Footer() {
  return (
    <footer className="bg-header py-4 shrink-0">
        <div className="max-w-7xl px-4 mx-auto flex items-center justify-between flex-wrap w-full gap-4">
            <div>
                <h3 className="font-mono mb-4">Статус подключения API маркетплейса:</h3>
                <ul className="text-xs flex flex-col md:flex-row gap-3">
                    {/*TODO:Сделать отдельные компоненты для статусов API маркетплейсов*/}
                    <li className="flex items-center gap-x-2"><div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>Wildberries<span className="text-[10px] text-green-500">(Подключен)</span></li>
                    <li className="flex items-center gap-x-2"><div className="h-2 w-2 rounded-full bg-red-400 animate-pulse"></div>Ozon<span className="text-[10px] text-red-400">(Не подключен)</span></li>
                    <li className="flex items-center gap-x-2"><div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>Яндекс.Маркерт<span className="text-[10px] text-green-500">(Подключен)</span></li>
                </ul>
            </div>
           
            <span className="text-white/25 text-xs">&copy; Basket Pulse - все права защищены</span>
        </div>
    </footer>
  )
}