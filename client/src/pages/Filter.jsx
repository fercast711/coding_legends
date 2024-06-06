import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
export const Filter = () => {
    const [selection, setSelection] = useState("")
    const [selection1, setSelection1] = useState("")
    const initialValues = {
        day: 'TODAS',
        hour: 'TODAS',
        classroom: 'TODAS',
        career: 'TODAS',
        faculty: 'TODAS',
        building: 'TODAS'
    };

    const validationSchema = Yup.object({
        day: Yup.string(),
        hour: Yup.string(),
        classroom: Yup.string(),
        career: Yup.string(),
        faculty: Yup.string(),
        building: Yup.string()
    });

    const handleSubmit = (values, actions) => {
        axios.post('/api/filter', values)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
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
                        <Form className="bg-slate-100 p-3 rounded-lg flex flex-col  w-96">
                            <div >
                                <label htmlFor="day" className="">Dia</label>
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
                                <label htmlFor="hour" className="">Hora</label>
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
                                <label htmlFor="hour" className="">Facultad o carrera</label>
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
                                <label htmlFor="hour" className="">Aula o edificio</label>
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