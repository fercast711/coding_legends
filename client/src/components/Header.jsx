import { Dropdown } from "./Dropdown"

export const Header = () => {
    const listDays = ['TODAS',1,2,3,4,5,6]
    const listHour = ['TODAS','7:00 AM','8:30 AM', '10:00 AM', '11:30 AM', '1:00 PM', '2:20 PM', '3:40 PM', '5:10 PM', '6:30 PM', '7:50 PM']
    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-3">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div class="flex items-center">
                        <img src="https://www.unitec.edu/res/img/logo-unitec-color.webp" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </div>

                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Dropdown type='day' title={'Dia'} list={listDays}/>
                            </li>
                            <li>
                                <Dropdown type='hour' title={'Hora'} list={listHour}/>
                            </li>
                            <li>
                                <Dropdown type='career' title={'Carrera'} list={listDays}/>
                            </li>
                            <li>
                                <Dropdown type='faculty' title={'Facultad'} list={listDays}/>
                            </li>
                            <li>
                                <Dropdown type='detail' title={'Nivel de detalle'} list={listDays}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}