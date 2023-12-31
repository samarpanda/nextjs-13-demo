// import SimpleForm from '@/components/simple'
// import Rhf from '@/components/rhf'
// import RhfWithZod from '@/components/rhf-with-zod'
import RHfWithAction from '@/components/with-action'

const FormPage = () => {
  return (
    <section className="py-5 px-5">
      <div className="container">
        <h1 className="mb-10 text-2xl font-medium">React Forms</h1>
        {/* <SimpleForm /> */}
        {/* <Rhf /> */}
        {/* <RhfWithZod /> */}
        <RHfWithAction />
      </div>
    </section>
  )
}

export default FormPage
