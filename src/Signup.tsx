import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { schema } from './SchemaValidator';

// const schema = z.object({
//   firstName: z.string().min(1, 'First name is required'),
//   lastName: z.string().min(1, 'Last name is required'),
//   email: z.string().email('Invalid email address').min(1, 'Email is required'),
//   password: z.string().min(6, 'Password must be at least 6 characters long'),
//   confirmPassword: z.string().min(1, 'Confirm Password is required')
// }).superRefine(({ password, confirmPassword }, ctx) => {
//   if (password !== confirmPassword) {
//     ctx.addIssue({
//       code: z.ZodIssueCode.custom,
//       message: 'Passwords do not match',
//       path: ['confirmPassword'],
//     });
//   }
// });

type Inputs = z.infer<typeof schema>;

const Signup: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  //watching the feilds to filled the data and then showing the button 
  const allFields = watch(['firstName', 'lastName', 'email', 'password', 'confirmPassword']);
  const isAllFieldsFilled = allFields.every(field => field && field.length > 0);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-green-100 shadow-md rounded-lg md:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className='flex sm:flex-col gap-4 lg:flex-row md:flex-row justify-between'>
          <div className='w-full'>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              {...register('firstName')}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.firstName && <span className="text-sm text-red-600">{errors.firstName.message}</span>}
          </div>
          
          <div className='w-full'>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              {...register('lastName')}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.lastName && <span className="text-sm text-red-600">{errors.lastName.message}</span>}
          </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
          </div>
          <div className='flex sm:flex-col gap-4 lg:flex-row justify-between'>
          <div className='w-full'>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
          </div>
          <div className='w-full'>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register('confirmPassword')}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.confirmPassword && <span className="text-sm text-red-600">{errors.confirmPassword.message}</span>}
          </div>
          </div>
          <div className='flex justify-center'>
            {/* {isAllFieldsFilled && (
            <button type="submit" className="w-1/2 justify-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
              Sign Up
            </button>
            )} */}
            <button type="submit" className={`w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${isAllFieldsFilled ?  "bg-blue-500":"bg-slate-400 cursor-not-allowed" }`} 
            disabled={!isAllFieldsFilled}>
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
