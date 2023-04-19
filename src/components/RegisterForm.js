// import React from "react";
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from "yup";
//
//
// // shape of our data returned as an object
// const schema =  yup.object().shape (
//     {
//
//     email: yup.string().email().required("Email is required"),
//     password: yup.string().min(8).required(),
//     confirmPassword: yup.string().oneOf( [yup.ref("password"), null], "Passwords should match")
//     }
// )
//
// export const RegisterForm = () => {
//     const {register, handleSubmit, errors} = useForm({
//         resolver: yupResolver(schema),
//     });
//
//     const submitForm = (data) => {
//         console.log(data)
//     }
//     return (
//         <div className="Form">
//             <div className="title"> ADMIN SIGN UP </div>
//             <div className="inputs"></div>
//
//             <form onSubmit={handleSubmit(submitForm)}>
//                 <input
//                     type="text"
//                     name="email"
//                     placeholder="Enter Email"
//                     ref={register}
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     ref={register}
//                 />
//                 <input
//                     type="password"
//                     name="confirmPass"
//                     placeholder="Confirm Password"
//                     ref={register}
//                 />
//
//                 <input type="submit" id="submit" />
//             </form>
//         </div>
//     )
// }