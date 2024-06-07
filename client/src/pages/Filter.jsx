import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setData } from "../store/slice/filterSlice";
import { useDispatch } from "react-redux";
export const Filter = () => {
    const navigation = useNavigate()
    const [selection, setSelection] = useState("")
    const [selection1, setSelection1] = useState("")
    const dispatch = useDispatch()
    const initialValues = {
        day: 'TODAS',
        hour: 'TODAS',
        classroom: 'TODAS',
        career: 'TODAS',
        faculty: 'TODAS',
        building: 'TODAS'
    };

    const validationSchema = Yup.object({
        day: Yup.string().required(),
        hour: Yup.string().required(),
        classroom: Yup.string().required(),
        career: Yup.string().required(),
        faculty: Yup.string().required(),
        building: Yup.string().required()
    });

    const handleSubmit = (values, actions) => {
        axios.post('/api/filter', values)
            .then(response => {

                console.log('Respuesta del servidor:', response.data.data);
                dispatch(setData(response.data.data))
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
        
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
                            </div>
                            <div >
                                <label htmlFor="hour" className="text-white">Facultad o carrera</label>
                                <Field as="select" name="selection" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4' onChange={(e) => {
                                    setSelection(e.target.value)
                                }}>
                                    <option value="">Seleccione una de las opciones</option>
                                    <option value="Facultad">Facultad</option>
                                    <option value="Carrera">Carrera</option>
                                </Field>

                                {
                                    selection === 'Facultad' && (
                                        <Field name="faculty" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'></Field>
                                    )
                                }
                                {
                                    selection === 'Carrera' && (
                                        <Field name="career" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'></Field>
                                    )
                                }
                            </div>
                            <div >
                                <label htmlFor="hour" className="text-white">Aula o edificio</label>
                                <Field as="select" name="selection" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4' onChange={(e) => {
                                    setSelection1(e.target.value)
                                }}>
                                    <option value="">Seleccione una de las opciones</option>
                                    <option value="Aula">Aula</option>
                                    <option value="Edificio">Edificio</option>
                                </Field>
                                {
                                    selection1 === 'Aula' && (
                                        <Field name="classroom" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'></Field>
                                    )
                                }
                                {
                                    selection1 === 'Edificio' && (
                                        <Field name="building" className='px-3 py-2 focus:outline-none rounded bg-slate-600 text-white w-full mb-4'></Field>
                                    )
                                }
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