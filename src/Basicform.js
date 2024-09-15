import { formControlClasses } from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';

const formValidationSchema=yup.object({
    email: yup.string().required("Why not fill this field,😊"),
    password: yup.string().required("Why not fill this field,😊"),

});

export function Basicform(){
    const{handleChange, values,handleSubmit,errors } = useFormik({
 initialValues:{email:"", password:""},
 ValidationSchema: formValidationSchema,
 onSubmit:(values)=>{
    console.log('form values' , values);
 }
    }

    )
    return(
        <form  onSubmit={handleSubmit} className="form">
        <input
        name = "email"
        type="email"
         placeholder="Enter email"
         value={values.email}
         onChange={handleChange}/>
        {errors.email}
        <input 
        name = "password"
        type="password"
         placeholder="Enter password"
         value={values.password}
         onChange={handleChange}/>
        {errors.password}
        <button type="submit">Submit</button>

        </form>
    )
}