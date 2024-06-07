import { useLocation, useNavigate } from 'react-router-dom'

export const Header = () => {
    //usamos el useLocation para poder saber en que parte del la url estamos ubicados
    const location = useLocation()
    //usamos navigation para navegar entre los routes
    const navigation = useNavigate()
    return (
        // creamos el header del sitio web donde podremos ir del form del filtro o la pagina del grafo
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-3">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div class="flex items-center">
                        <img src="https://www.unitec.edu/res/img/logo-unitec-color.webp" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </div>

                    <div>
                        {
                            // hacemos la validacion de si estamos ubicados en la ruta raiz para crear un boton que nos movilize a la ruta /fliter
                            location.pathname === '/' && (<>
                                <button 
                                onClick={() => navigation('/filter')}
                                type="button" class="text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Filtrar</button>
                            </>)
                        }
                        {
                            // hacemos la validacion de si estamos ubicados en la ruta /filter para crear un boton que nos movilize a la ruta /
                            location.pathname === '/filter' && (<>
                                <button
                                onClick={() => navigation('/')}
                                type="button" class="text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Regresar</button>
                            </>)
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}