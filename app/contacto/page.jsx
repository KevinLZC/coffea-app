import Image from 'next/image'
import contacto from '../../public/Contacto.jpg'
import telefono from '../../public/call.png'
import correo from '../../public/email.png'

export default function ContactPage () {
  return (
    <>
      <div className='pb-8'>
        <div className='flex justify-center pt-12'>
          <span className='text-center text-5xl md:text-6xl lg:text-7xl'>Atención a clientes</span>
        </div>
        <div className='flex-col'>
          <div className='lg:flex pt-10'>
            <div className='flex justify-center items-center'>
              <Image className='rounded-2xl shadow-2xl' alt='areaIndividual' src={contacto} />
            </div>
            <div>
              <div className='pt-10 lg:pl-10 text-center'>
                <span className='text-4xl flex justify-center mb-5 md:text-5xl text-center'>¿En qué podemos ayudarte?</span>
                <span className='text-xl flex justify-center text-center md:text-2xl'>En Coffea estamos abiertos a recibir tus comentarios, dudas y observaciones. Nos gusta asegurarnos de que la experiencia sea la mejor.</span>
                <span className='text-4xl flex justify-center pt-12 pb-5 md:text-5xl lg:text-center'>Atención al cliente</span>
                <span className='text-xl flex justify-center text-center md:text-2xl'>Te invitamos a contactarnos en nuestros medios de contacto, en los cuales puedes canalizar todas tus consultas, sugerencias o dudas en un horario  de Lunes a Sábado de 9:00 a.m a 4:00 p.m.</span>
              </div>
              <div className='lg:flex justify-center'>
                <div className='flex flex-col items-center pt-8'>
                  <Image className='w-8 md:w-16' alt='telefono' src={telefono} />
                  <span className='pl-3 md:text-lg text-center'>+52-312-314-4631</span>
                </div>
                <div className='flex flex-col items-center pt-8 md:pl-16'>
                  <Image className='w-8 md:w-16' alt='telefono' src={correo} />
                  <span className='pl-3 md:text-lg text-center'>atencioncliente@coffea.com.mx</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
