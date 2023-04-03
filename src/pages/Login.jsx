import { Formik } from "formik";
import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { redirect, useNavigate } from "react-router-dom"

export default function Login(){
    const [submitionError, setSubmitionError] = useState("")

    const { login, auth, setAuth } = useAuth()
    const history = useNavigate()

    document.title = "Log In - Colrs Kaam"
    console.log(auth)
    
    return <div className="mt-8">
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Please Enter Your Email';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
            errors.password = "Please Enter a Strong Password like adkf@25R"
        }else if(
            !/^(?=.*[a-z].*[a-z].*[a-z])(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9]).{8,}$/i.test(values.password)
        ){
            errors.password = "Please Enter a Strong Password like adkf@26R"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        login(values.email, values.password)
        .then(response => {
            if(response.status === 200){
                setAuth({
                  accessToken: response.data.accessToken,
                  isAuthenticated: true
                })
                history("/")
            }
            if(response.status === 400){

            }
        })
        .catch(err => {
            setSubmitionError("Failed to Login Account. Please try again later")
        })
        setSubmitting(false); 
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center h-max">
            <div className="w-[35%]">
                <h1 className="text-3xl text-center font-semibold">Log In</h1>
                <p className="text-center text-[red]">{submitionError.length > 0 && setSubmitionError}</p>
          <div className="my-4">
            <input
            className={`block border font-inter border-slate-400 rounded h-12 w-full px-2 py-1 font-medium ${errors.email != undefined && touched.email && "border-[red]"}`}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Email"
            value={values.email}
          />
            <p className="text-[red] text-left font-semibold">{errors.email && touched.email && errors.email}</p>
          </div>
          <div className="my-4">
            <input
            className={`block border font-inter border-slate-400 rounded h-12 w-full px-2 py-1 font-medium ${errors.password != undefined && touched.password && "border-[red]"}`}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Password"
            value={values.password}
          />
            <p className="text-[red] text-left font-semibold">{errors.password && touched.password && errors.password}</p>
        </div>
          <button type="submit" disabled={isSubmitting} className={`w-full flex justify-center items-center text-white bg-primary rounded-md h-12 font-inter text-lg font-medium`}>
            Log In
          </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
}