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
  question1: z.string().min(2),
  answer1: z.string().min(2),
  question2: z.string().min(2),
  answer2: z.string().min(2),
  question3: z.string().min(2),
  answer3: z.string().min(2),
});

export default function Page() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question1: '',
      answer1: '',
      question2: '',
      answer2: '',
      question3: '',
      answer3: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    //Hacer POST a la API
  }

  return (
    <div className='min-h-screen w-full flex flex-col gap-6 justify-center items-center'>
      <h1 className='text-3xl'>SlayStation - Preguntas de seguridad</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-[500px]'>
          {/* Question1 */}
          <FormField
            control={form.control}
            name='question1'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pregunta 1</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Ingresa la pregunta de seguridad 1'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Answer1 */}
          <FormField
            control={form.control}
            name='answer1'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Respuesta 1</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Ingresa la respuesta para la pregunta de seguridad 1'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Question2 */}
          <FormField
            control={form.control}
            name='question2'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pregunta 2</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Ingresa la pregunta de seguridad 2'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Answer2 */}
          <FormField
            control={form.control}
            name='answer1'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Respuesta 2</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Ingresa la respuesta para la pregunta de seguridad 2'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Question1 */}
          <FormField
            control={form.control}
            name='question2'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pregunta 1</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Ingresa la pregunta de seguridad 2'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Answer3 */}
          <FormField
            control={form.control}
            name='answer3'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Respuesta 1</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Ingresa la respuesta para la pregunta de seguridad 3'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button className='block mx-auto mt-6' type='submit'>
            Guardar respuestas
          </Button>
        </form>
      </Form>
    </div>
  );
}
