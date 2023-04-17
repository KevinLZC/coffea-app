import Image from 'next/image'
import home from '../public/Home.jpg'
import wifi from '../public/wifi.png'
import cookie from '../public/cookie.png'
import flor from '../public/flor-de-loto.png'
import laptop from '../public/laptop.png'

export default function HomePage () {
  return (
    <>
      <div className='mb-10'>
        <div className='flex'>
          <div className='mt-12 lg:w-[900px] md:w-[500px] w-[300px] lg:pl-56 md:pl-28 pl-10 sm:translate-x-8'>
            <span className='lg:text-[136px] md:text-7xl text-5xl text-left lg:translate-y-10 font-serif'>"Somos el combustible para crear"</span>
          </div>
          <Image className='rounded-full h-40 w-40 translate-y-10 translate-x-6 sm:h-48 sm:w-48 sm:rounded-full sm:translate-x-28 sm:translate-y-4 md:h-60 md:rounded-lg lg:h-[450px] lg:w-[450px] lg:translate-x-72 lg:translate-y-8' alt='Inicio' src={home} />
        </div>
        <div className='relative w-0 h-0 md:w-36 md:h-36 md:translate-x-40 md:-translate-y-12 lg:w-64 lg:h-64 lg:translate-x-[680px] lg:-translate-y-48 ml-96 -mt-36 bg-gradient-to-b from-black to-gray-500 rounded-full border-solid border-white lg:border-[35px] md:border-[20px]' />
        <div className='relative flex justify-center ml-10 mr-10 sm:ml-10 sm:mr-10 translate-y-48 md:translate-y-16 lg:translate-y-4 lg:ml-56 lg:mr-56'>
          <p className='text-base sm:text-lg font-sans text-center md:text-xl lg:text-4xl'>Sabemos que el sentirnos cómodos es lo más importante y cuando trabajamos es un factor crucial. Es por eso que en Coffea ofrecemos esta comodidad a nuestros clientes, brindandoles un espacio en el que puedan trabajar de manera eficiente y sin distracciones.</p>
        </div>
        <div className='pt-56 pl-10 md:pt-28 md:pl-10 lg:pl-56 lg:pr-56'>
          <span className='text-sm sm:text-base md:text-lg lg:text-3xl text-gray-400'>¿Por qué escogernos?</span>
        </div>
        <div className='pt-8 flex justify-center'>
          <span className='text-4xl md:text-6xl lg:text-7xl font-sans'>Servicios incluidos</span>
        </div>
        <div className='lg:flex lg:justify-center lg:m-16 lg:-space-x-36'>
          <div>
            <div className='flex items-center justify-center mt-10'>
              <Image className='w-10' src={wifi} alt='wifi' />
              <span className='pl-3 sm:text-lg md:text-xl lg:text-3xl'>WiFi</span>
            </div>
            <div className='mt-8 mr-28 ml-28 md:ml-36 md:mr-36 flex justify-center text-center'>
              <p className='sm:text-lg md:text-xl lg:text-2xl'>Los clientes tendrán acceso a WIFI gratuito, siempre y cuando consuman alguno de nuestros servicios.</p>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center mt-10'>
              <Image className='w-10' src={cookie} alt='cookie' />
              <span className='pl-3 sm:text-lg md:text-xl lg:text-3xl'>Snacks</span>
            </div>
            <div className='mt-8 mr-28 ml-28 md:ml-36 md:mr-36 flex justify-center text-center'>
              <p className='sm:text-lg md:text-xl lg:text-2xl'>Los clientes pueden adquirir snacks como barras energéticas, galletas y muffins, además de cafés y bebidas frías.</p>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center mt-10'>
              <Image className='w-10' src={flor} alt='flor' />
              <span className='pl-3 sm:text-lg md:text-xl lg:text-3xl'>Ambiente</span>
            </div>
            <div className='mt-8 mr-28 ml-28 md:ml-36 md:mr-36 flex justify-center text-center'>
              <p className='sm:text-lg md:text-xl lg:text-2xl'>Contamos con un ambiente de concentración, sereno y adecuado para el estudio o trabajo.</p>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center mt-10'>
              <Image className='w-10' src={laptop} alt='laptop' />
              <span className='pl-3 sm:text-lg md:text-xl lg:text-3xl'>Electrónica</span>
            </div>
            <div className='mt-8 mr-28 ml-28 md:ml-36 md:mr-36 flex justify-center text-center'>
              <p className='sm:text-lg md:text-xl lg:text-2xl'>Contamos con computadoras que los clientes pueden rentar por un tiempo específico para llevar a cabo sus actividades.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
