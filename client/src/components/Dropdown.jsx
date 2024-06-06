import { useState } from "react"

export const Dropdown = ({ type, title, list }) => {
    const [isOpen, setIsopen] = useState(false)
    return (
        <>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-950 hover:bg-blue-800 focus:ring-blue-900" type="button" onClick={() => setIsopen(!isOpen)}>{title} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div id="dropdown" className={`z-10 ${isOpen ? 'absolute' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {
                        list.lenght !== 0 && list.map((item) => {
                            return (
                                <>
                                    <li>
                                        <p className="block px-4 py-2  hover:bg-gray-600 hover:text-white">{item}</p>
                                    </li>

                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}