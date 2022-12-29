import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  ProductName: yup.string().required(),
  UnitPrice: yup.number().positive().integer().required(),
  UnitsInStock: yup.number().positive().integer().required(),
}).required();

export default function HookForm() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    
    console.log(data)
    fetch(`https://northwind.vercel.app/api/products/`, 
    { method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token',
    },
    body: JSON.stringify(data)
    })
        .then(res => {
           console.log(res)
        })

        
  
  };

  return (

    <div className="hookform">
      <h1>Form with HookForm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("ProductName")} />
      <p>{errors.ProductName?.message}</p>
        
      <input {...register("UnitPrice")} />
      <p>{errors.UnitPrice?.message}</p>

      <input {...register("UnitsInStock")} />
      <p>{errors.UnitsInStock?.message}</p>
      
      <input type="submit" />
    </form>
    </div>
  );
}

