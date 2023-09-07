'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormDataSchema } from '@/lib/schema'

type Inputs = z.infer<typeof FormDataSchema>

const RhfWithZod = () => {
  const [data, setData] = useState<Inputs>()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(FormDataSchema) })
  const processForm: SubmitHandler<Inputs> = (data) => {
    reset()
    setData(data)
  }

  return (
    <section className="flex gap-6">
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-1 flex-col gap-4 sm:w-1/2"
      >
        <input
          placeholder="name"
          className="rounded-lg"
          {...register('name')}
        />
        {errors.name?.message && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
        <input
          placeholder="message"
          className="rounded-lg"
          {...register('message')}
        />
        {errors.message?.message && <p>{errors.message.message}</p>}

        <button className="rounded-lg bg-black py-2 text-white">Submit</button>
      </form>

      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  )
}

export default RhfWithZod
