import Image from 'next/image'
import contacto from '../../public/Contacto.jpg'
import telefono from '../../public/call.png'
import correo from '../../public/email.png'

export default function ContactPage () {
  return (
    <>
      <div className='translate-x-[340px] mt-10'>
        <span className='text-center text-5xl'>Atención a clientes</span>
      </div>
      <div className='mt-10 w-5/6 ml-6 items-center rounded-xl flex shadow-lg bg-gradient-to-l from-white to-gray-100'>
        <Image className='w-[350px] h-[350px] rounded-l-xl' alt='areaIndividual' src={contacto} />
        <div className='pl-8 pr-8 space-y-2'>
          <span className='text-4xl m-2'>¿En qué podemos ayudarte?</span>
          <p className='text-xl text-justify'>En Coffea estamos abiertos a recibir tus comentarios, dudas y observaciones. Nos gusta asegurarnos de que la experiencia sea la mejor.</p>
          <span className='text-4xl m-2'>Atención al cliente</span>
          <p className='text-xl text-justify'>Te invitamos a contactarnos en nuestros medios de contacto, en los cuales puedes canalizar todas tus consultas, sugerencias o dudas en un horario  de Lunes a Sábado de 9:00 a.m a 4:00 p.m.</p>
          <div className='flex m-2'>
            <Image className='w-6' alt='telefono' src={telefono} />
            <span className='pl-3'>+52-312-314-4631</span>
          </div>
          <div className='flex m-2'>
            <Image className='w-6' alt='telefono' src={correo} />
            <span className='pl-3'>atencioncliente@coffea.com.mx</span>
          </div>
        </div>
      </div>
    </>
  )
}
