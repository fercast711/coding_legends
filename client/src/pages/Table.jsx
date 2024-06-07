import { useSelector } from "react-redux"

export const Table = () => {
    const { data } = useSelector(state => state.filter)
    console.log(data)
    return (
        <div class="relative overflow-x-auto flex justify-center mx-2">
            <table class=" text-sm text-left rtl:text-right  text-gray-400">
                <thead class="text-xs  uppercase bg-gray-700 text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Cuenta
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Carrera
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Facultad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Seccion
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aula
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dias habiles
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Hora
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Materia
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return (
                                <tr class=" border-b bg-gray-800 border-gray-700">
                                <td class="px-6 py-4">
                                    Apple MacBook Pro 17"
                                </td>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}