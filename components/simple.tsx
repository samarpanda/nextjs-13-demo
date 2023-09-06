'use client'
import { FormEvent, useState } from 'react'

const SimpleForm = () => {
  const [data, setData] = useState()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const formDataObject = Object.fromEntries(formData)

    /**
     * Validate form data if required
     * Skipping validation for this example
     */

    /**
     * Send form data to API
     */
    const data = await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(formDataObject),
    }).then((response) => response.json())

    /**
     * Update state with response
     */
    setData(data)
    form.reset()
  }

  return (
    <section className="flex gap-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col gap-4 sm:w-1/2"
      >
        <input className="rounded-lg" name="name" placeholder="name" required />
        <input
          className="rounded-lg"
          name="message"
          placeholder="message"
          required
        />
        <button className="rounded-lg bg-black py-2 text-white" type="submit">
          Submit
        </button>
      </form>
      <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  )
}
export default SimpleForm
