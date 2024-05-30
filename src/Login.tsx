import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { Link } from 'react-router-dom';
import { schema } from './SchemaValidator';


// const schema = z.object({
//   email: z.string().email('Invalid email address').nonempty('Email is required'),
//   password: z.string().min(6, 'Password must be at least 6 characters long')
// });
 type Inputs = z.infer<typeof schema>;

const Login: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };
  //watching the feilds to filled and then showing the button
  const allFields=watch(['email','password']);
  const isAllFieldsFilled=allFields.every(field => field && field.length > 0 );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-green-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              //placeholder='enter a email'
              {...register("email", { required: 'Email is required'})}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: 'Password is required'})}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
             {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
          </div>
          <div>
            {/* {isAllFieldsFilled && (
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
              Login
            </button>
            )} */}
            <button type="submit" className={`w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${isAllFieldsFilled ?  "bg-blue-500":"bg-slate-400 cursor-not-allowed" }`} 
            disabled={!isAllFieldsFilled}>
              Login
            </button>
          </div>
        </form>
        <p className='text-center text-gray-600'>
            Don't have an account? <Link to="/signup" className='text-blue-500 hover:unnderline'>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


