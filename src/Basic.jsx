import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      ProductName: '',
      UnitPrice: '',
      UnitsInStock: '',
    },

    validationSchema: Yup.object({
        ProductName: Yup.string().required(),
        UnitPrice: Yup.number().positive().integer().required(),
        UnitsInStock: Yup.number().positive().integer().required()
    }),
    onSubmit: values => {
        console.log(values);
      fetch(`https://northwind.vercel.app/api/products/`, 
      { method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
      },
      body: JSON.stringify(values)
      })
          .then(res => {
             console.log(res)


          })
      
    },
  });
  return (
    <div className='formik-form'>
      <h1>Form With Formik</h1>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="ProductName">ProductName</label>
      <input
        id="ProductName"
        name="ProductName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.ProductName}
      />
      {/* {formik.touched.ProductName && formik.errors.ProductName ? (
        <div>{formik.errors.ProductName}</div>
      ) : null} */}

      <label htmlFor="UnitPrice">UnitPrice</label>
      <input
        id="UnitPrice"
        name="UnitPrice"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.UnitPrice}
      />
      {formik.touched.UnitPrice && formik.errors.UnitPrice ? (
        <div>{formik.errors.UnitPrice}</div>
      ) : null}

      <label htmlFor="UnitsInStock">UnitsInStock</label>
      <input
        id="UnitsInStock"
        name="UnitsInStock"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.UnitsInStock}
      />
      {formik.touched.UnitsInStock && formik.errors.UnitsInStock ? (
        <div>{formik.errors.UnitsInStock}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};


export default SignupForm