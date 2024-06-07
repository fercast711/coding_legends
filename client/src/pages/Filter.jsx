//importamos los hooks y compenentes necesarios de las libs
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setData } from "../store/slice/filterSlice";
import { useDispatch } from "react-redux";
export const Filter = () => {
    // Instaciamos las variables que vamos a usar acontinuacion con sus respectivos hooks
    const navigation = useNavigate()
    const [selection, setSelection] = useState("")
    const dispatch = useDispatch()
    //Inicializamos las variables que enviaremos a la base de datos
    const initialValues = {
        day: 'TODAS',
        hour: 'TODAS',
        classroom: 'TODAS',
        career: 'TODAS',
        faculty: 'TODAS',
        building: 'TODAS'
    };
//Validamos que el usuario ingrese el dato correctamente con la lib yup
    const validationSchema = Yup.object({
        day: Yup.string().required('El dia es requerido'),
        hour: Yup.string().required('La hora es requerida'),
        classroom: Yup.string().required('La aula y edificio es requerida'),
        career: Yup.string().required('La carrera es requerida'),
        faculty: Yup.string().required('La facultad es requerida'),
    });
//Manejamos el submit para poder enviar la data a hacia la base de datos
    const handleSubmit = (values, actions) => {
        axios.post('/api/filter', values)
            .then(response => {
                //si obtenemos la data correctamente la seteamos hacia nuestro estado global
                console.log('Respuesta del servidor:', response.data.data);
                dispatch(setData(response.data.data))
            })
            .catch(error => {
                //si nos da un error lo imprimimos en la consola
                console.error('Error al enviar la solicitud:', error);
            });
            //ya sea que los datos se reciban correctamente o no nos dirigmos hacia el grafo
        navigation('/')
        actions.resetForm()
    };
    return (
        <>
            <h1 className="text-center text-white text-5xl  font-sans p-3">Filtros para los datos</h1>
            <div className="  flex items-center justify-center flex-col gap-y-2 ">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="bg-slate-900 p-3 rounded-lg flex flex-col  w-96">
                            <div >
                                <label htmlFor="day" className="text-white">Dia</label>
                                <Field as="select" name="day" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'>
                                    <option value=''>Seleccione un dia</option>
                                    <option value='TODAS'>Todos</option>
                                    <option value='1'>Lunes</option>
                                    <option value='2'>Martes</option>
                                    <option value='3'>Miercoles</option>
                                    <option value='4'>Jueves</option>
                                    <option value='5'>Viernes</option>
                                    <option value='6'>Sabado</option>
                                </Field>
                                <ErrorMessage name="day" component="div" className="text-red-500 text-sm mb-4" />
                            </div>
                            <div >
                                <label htmlFor="hour" className="text-white">Hora</label>
                                <Field as="select" name="hour" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'>
                                    <option value="">Seleccione una hora</option>
                                    <option value="TODAS">Todas</option>
                                    <option value="7:00 AM">7:00 AM</option>
                                    <option value="8:30 AM">8:30 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:30 AM">11:30 AM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="2:20 PM">2:20 PM</option>
                                    <option value="3:40 PM">3:40 PM</option>
                                    <option value="5:10 PM">5:10 PM</option>
                                    <option value="6:30 PM">6:30 PM</option>
                                    <option value="7:50 PM">7:50 PM</option>
                                </Field>
                                <ErrorMessage name="hour" component="div" className="text-red-500 text-sm mb-4" />
                            </div>
                            <div >
                                <label htmlFor="selection" className="text-white">Facultad o carrera</label>
                                <Field as="select" name="selection" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4' onChange={(e) => {
                                    setSelection(e.target.value)
                                }}>
                                    <option value="">Seleccione una de las opciones</option>
                                    <option value="Facultad">Facultad</option>
                                    <option value="Carrera">Carrera</option>
                                </Field>

                                {
                                    selection === 'Facultad' && (

                                        <>
                                            <Field name="faculty" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'></Field>
                                            <ErrorMessage name="faculty" component="div" className="text-red-500 text-sm mb-4" />
                                        </>
                                    )
                                }
                                {
                                    selection === 'Carrera' && (
                                        <>
                                        <Field name="career" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'></Field>
                                        <ErrorMessage name="career" component="div" className="text-red-500 text-sm mb-4" />
                                        </>
                                    )
                                }
                            </div>
                            <div >
                                <label htmlFor="classroom" className="text-white">Aula Y edificio</label>
                                <Field name="classroom" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'></Field>
                                <ErrorMessage name="classroom" component="div" className="text-red-500 text-sm mb-4" />
                            </div>
                            <button
                                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded 
                                mt-2 text-white focus:outline-noneS disabled:bg-indigo-400"
                                type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}