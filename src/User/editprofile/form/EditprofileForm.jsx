// import React, { Component , useState } from "react";
// import {
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBBtn,
//   toast,
//   ToastContainer,
// } from "mdbreact";
// import * as yup from "yup";
// import "../../css/dash.css";
// import { Form, Formik } from "formik";

// const EditprofileForm = (props) => {
//   const Validate = yup.object().shape({
//     fname: yup.string().required("لطفا فیلد نام را پر کنید").length(3),
//     lname: yup.string().required("لطفا فیلد نام خانوادگی را پر کنید"),
//     city: yup.string().required("لطفا فیلد شهر را پر کنید"),
//     email: yup.string().email().required("لطفا فیلد ایمیل را پر کنید"),
//   });
//   let validatechecker =()=>{

//   }
//   onsubmit = (data) => {
//     console.log(data);
//   };
//   alert = (value) => {
//     Validate.validate(value)
//       .then((val) => {})
//       .catch((val) => {
//         toast.error(<MDBIcon icon="exclamation-triangle" />,"فیلد خالی وجود دارد.لطفا آن را پر کنید ", {
//           autoClose: true,
//         });
//       });
//   };

//   return (
//     <Formik
//       initialValues={{ fname: "", lname: "", city: "", email: "" }}
//       validationSchema={Validate}
//       validate={alert}
//       enableReinitialize={true}
//       onSubmit={(value) => onsubmit(value)}
//     >
//       {({ values, errors, handleChange, touched }) => {
//         return (
//           <Form>
//             <MDBRow>
//               <MDBCol md="6" className="mb-3">
//                 <label
//                   htmlFor="defaultFormRegisterNameEx"
//                   className="grey-text inputp"
//                 >
//                   نام
//                 </label>
//                 <input
//                   onChange={handleChange}
//                   name="fname"
//                   type="text"
//                   id="defaultFormRegisterNameEx"
//                   className="form-control changeinput"
//                   placeholder="نام"
                  
//                 />

//                 {errors.fname && touched.fname && (
//                   <p className="redError">{errors.fname}!</p>
//                 )}
//               </MDBCol>
//               <MDBCol md="6" className="mb-3">
//                 <label
//                   htmlFor="defaultFormRegisterNameEx"
//                   className="grey-text inputp"
//                 >
//                   نام خانوادگی
//                 </label>
//                 <input
//                   onChange={handleChange}
//                   name="lname"
//                   type="text"
//                   id="defaultFormRegisterNameEx"
//                   className="form-control changeinput"
//                   placeholder="نام خانوادگی"
//                 />
//                 {errors.lname && touched.lname && (
//                   <p className="redError">{errors.fname}!</p>
//                 )}
//               </MDBCol>
//             </MDBRow>
//             <MDBRow>
//               <MDBCol md="6" className="mb-3">
//                 <label
//                   htmlFor="defaultFormRegisterPasswordEx4"
//                   className="grey-text inputp"
//                 >
//                   ایمیل
//                 </label>
//                 <input
//                   onChange={handleChange}
//                   type="text"
//                   id="defaultFormRegisterPasswordEx4"
//                   className="form-control changeinput"
//                   name="city"
//                   placeholder="ایمیل شما"
//                 />
//                 {errors.city && touched.city && (
//                   <p className="redError">{errors.city}!</p>
//                 )}
//               </MDBCol>
//               <MDBCol md="6" className="mb-3 ">
//                 <label
//                   htmlFor="defaultFormRegisterPasswordEx4"
//                   className="grey-text inputp"
//                 >
//                   تاریخ تولد
//                 </label>
//                 <input
//                   onChange={handleChange}
//                   type="email"
//                   id="defaultFormRegisterPasswordEx4"
//                   className="form-control changeinput"
//                   name="email"
//                   placeholder="تاریخ تولد شما"
//                 />
//                 {errors.email && touched.email && (
//                   <p className="redError">{errors.email}!</p>
//                 )}
//               </MDBCol>
//             </MDBRow>
        
//             <ToastContainer
//               hideProgressBar={true}
//               newestOnTop={true}
//               autoClose={5000}
//             />
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// export default EditprofileForm;
