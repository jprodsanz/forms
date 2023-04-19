// import { useForm } from "react-hook-form";
// import {yupResolver} from '@hookform/resolvers/yup'
// import * as yup from 'yup'
//
// export const Form = () => {
//
//     // this shapes our data, our data will look like an object therefore we specify the shape
//     const schema = yup.object().shape({
//
//         email: yup.string().email().required("Email is required"),
//         password: yup.string().min(8).required("Password is required"),
//         confirmPassword: yup
//             .string()
//             .oneOf([yup.ref("password"), null], "Passwords don't match")
//             .required(),
//     });
//
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//     } = useForm(
//             // this is the middle man for our library integrations
//             {
//             resolver: yupResolver(schema)
//         }
//     );
//
//     const onSubmit = (data) => {
//         console.log(data);
//     }
//
//     return (
//         // handleSubmit is a function that react hook will use to handle everything pre-submission
//         <form onSubmit={handleSubmit(onSubmit)}>
//
//         <input
//             type="email"
//             placeholder="Email"
//             {...register("email")}
//         />
//             <p> {errors.email?.message} </p>
//         <input
//             type="password"
//             placeholder="Password"
//             {...register("password")}
//         />
//             <p> {errors.password?.message} </p>
//         <input
//             type="password"
//             placeholder="Confirm Password"
//             {...register("confirmPassword")}
//         />
//             <p> {errors.password?.message} </p>
//             <input type="submit" />
//         </form>
//     )
// }