import Image from 'next/image'
import contacto from '../../public/Contacto.jpg'
import telefono from '../../public/call.png'
import correo from '../../public/email.png'

export default function ContactPage () {
  return (
    <>
      <div className='lg:-mb-40'>
        <div className='flex justify-center mt-10'>
          <span className='text-center text-5xl md:text-6xl lg:text-7xl'>Atención a clientes</span>
        </div>
        <div className='lg:flex lg:ml-10 lg:mr-10'>
          <Image className='w-3/4 mx-auto mt-10 rounded-2xl shadow-xl md:mx-auto md:my-16 lg:my-36 lg:ml-32 lg:w-5/12' alt='areaIndividual' src={contacto} />
          <div className='mt-32 lg:mt-24'>
            <span className='text-4xl flex justify-center mt-10 mb-5 md:text-5xl lg:text-center'>¿En qué podemos ayudarte?</span>
            <p className='text-xl flex justify-center text-center ml-10 mr-10 md:text-2xl'>En Coffea estamos abiertos a recibir tus comentarios, dudas y observaciones. Nos gusta asegurarnos de que la experiencia sea la mejor.</p>
            <span className='text-4xl flex justify-center mt-12 mb-5 md:text-5xl lg:text-center'>Atención al cliente</span>
            <p className='text-xl flex justify-center text-center ml-10 mr-10 md:text-2xl'>Te invitamos a contactarnos en nuestros medios de contacto, en los cuales puedes canalizar todas tus consultas, sugerencias o dudas en un horario  de Lunes a Sábado de 9:00 a.m a 4:00 p.m.</p>
          </div>
        </div>
        <div className='flex justify-center md:mt-8 lg:pl-[950px] lg:-mt-72'>
          <div className='flex flex-col items-center mt-8'>
            <Image className='w-8 md:w-16' alt='telefono' src={telefono} />
            <span className='pl-3 md:text-xl'>+52-312-314-4631</span>
          </div>
          <div className='flex flex-col items-center mt-8 md:pl-16'>
            <Image className='w-8 md:w-16' alt='telefono' src={correo} />
            <span className='pl-3 md:text-xl'>atencioncliente@coffea.com.mx</span>
          </div>
        </div>
      </div>
    </>
  )
}
