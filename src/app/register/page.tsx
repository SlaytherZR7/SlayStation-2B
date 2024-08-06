'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const formSchema = z.object({
  userName: z.string().min(2),
  userLastName: z.string().min(2),
  userNickname: z.string().min(2),
  userPhone: z.string().length(10),
  userType: z.number(),
  userEmail: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export default function Page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      userLastName: '',
      userEmail: '',
      userNickname: '',
      userPhone: '',
      password: '',
      userType: 1,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    //Hacer POST a la API
  }

  return (
    <div className='min-h-screen w-full flex flex-col gap-6 justify-center items-center'>
      <h1 className='text-3xl'>SlayStation - Registrarte</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-[500px]'>
          <div className='grid grid-cols-2 gap-4 items-center'>
            {/* Username */}
            <FormField
              control={form.control}
              name='userName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Slayther' type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* UserLastName */}
            <FormField
              control={form.control}
              name='userLastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellido</FormLabel>
                  <FormControl>
                    <Input placeholder='Zamora' type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name='userEmail'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='slayther.zr@gmail.com'
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* UserNickName */}
            <FormField
              control={form.control}
              name='userNickname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NickName</FormLabel>
                  <FormControl>
                    <Input placeholder='Mr-DuDu' type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* UserPhone */}
            <FormField
              control={form.control}
              name='userPhone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de celular</FormLabel>
                  <FormControl>
                    <Input placeholder='0963267168' type='tel' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Ingresa la contraseña'
                      type='password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit */}
          <Button className='block mx-auto mt-6' type='submit'>
            Registrarse
          </Button>
        </form>
      </Form>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <Link href='/login' passHref>
          <Button variant='link'>Inicia Sesión aquí</Button>
        </Link>
      </p>
    </div>
  );
}
