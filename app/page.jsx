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
        <div className='flex items-center justify-center gap-10 sm:gap-12 md:gap-12 lg:gap-24 pt-12'>
          <div className='lg:w-[900px] md:w-[500px] sm:w-[300px] w-[150px]'>
            <span className='lg:text-[110px] md:text-7xl sm:text-4xl text-3xl text-left font-serif'>"Somos el combustible para crear"</span>
          </div>
          <Image className='w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-[450px] lg:h-[450px] rounded-full sm:rounded-full md:rounded-2xl lg:rounded-3xl' alt='Inicio' src={home} />
        </div>
        <div className='w-0 h-0 bg-gradient-to-b from-black to-gray-500 rounded-full border-solid border-white lg:border-[35px] md:border-[20px]' />
        <div className='relative flex justify-center'>
          <p className='text-base sm:text-lg font-sans text-center md:text-xl lg:text-3xl pt-10'>Sabemos que el sentirnos cómodos es lo más importante y cuando trabajamos es un factor crucial. Es por eso que en Coffea ofrecemos esta comodidad a nuestros clientes, brindandoles un espacio en el que puedan trabajar de manera eficiente y sin distracciones.</p>
        </div>
        <div className='pt-12 text-center'>
          <span className='text-sm sm:text-base md:text-lg lg:text-2xl text-gray-400'>¿Por qué escogernos?</span>
        </div>
        <div className='pt-12 flex justify-center items-center'>
          <span className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-sans'>Servicios incluidos</span>
        </div>
        <div className='lg:flex lg:justify-center gap-8'>
          <div className='pl-12 pr-12'>
            <div className='flex items-center justify-center pt-10'>
              <Image className='w-10' src={wifi} alt='wifi' />
              <span className='pl-3 sm:text-lg md:text-xl lg:text-2xl'>WiFi</span>
            </div>
            <div className='pt-8 flex justify-center text-center'>
              <p className='sm:text-base md:text-lg lg:text-xl'>Los clientes tendrán acceso a WIFI gratuito, siempre y cuando consuman alguno de nuestros servicios.</p>
            </div>
          </div>
          <div className='pl-12 pr-12'>
            <div className='flex items-center justify-center pt-10'>
              <Image className='w-10' src={cookie} alt='cookie' />
              <span className='pl-3 sm:text-lg md:text-xl lg:text-2xl'>Snacks</span>
            </div>
            <div className='pt-8 flex justify-center text-center'>
              <p className='sm:text-base md:text-lg lg:text-xl'>Los clientes pueden adquirir snacks como barras energéticas, galletas y muffins, además de cafés y bebidas frías.</p>
            </div>
          </div>
          <div className='pl-12 pr-12'>
            <div className='flex items-center justify-center pt-10'>
              <Image className='w-10' src={flor} alt='flor' />
              <span className='pl-3 sm:text-lg md:text-xl lg:text-2xl'>Ambiente</span>
            </div>
            <div className='pt-8 flex justify-center text-center'>
              <p className='sm:text-base md:text-lg lg:text-xl'>Contamos con un ambiente de concentración, sereno y adecuado para el estudio o trabajo.</p>
            </div>
          </div>
          <div className='pl-12 pr-12'>
            <div className='flex items-center justify-center mt-10'>
              <Image className='w-10' src={laptop} alt='laptop' />
              <span className='pl-3 sm:text-lg md:text-xl lg:text-2xl'>Electrónica</span>
            </div>
            <div className='pt-8 flex justify-center text-center'>
              <p className='sm:text-base md:text-lg lg:text-xl'>Contamos con computadoras que los clientes pueden rentar por un tiempo específico para llevar a cabo sus actividades.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
