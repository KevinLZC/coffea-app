import Image from 'next/image'
import home from '../public/Home.jpg'
import wifi from '../public/wifi.png'
import cookie from '../public/cookie.png'
import flor from '../public/flor-de-loto.png'
import laptop from '../public/laptop.png'

export default function HomePage () {
  return (
    <>
      <div>
        <div className='relative mt-16 w-2/4'>
          <span className='lg:text-8xl md:text-7xl text-5xl text-left font-serif'>"Somos el combustible para crear"</span>
        </div>
        <div className='relative md:w-44 lg:w-44 md:h-44 lg:h-44 w-0 h-0 ml-96 -mt-36 bg-gradient-to-b from-black to-gray-500 rounded-full border-solid border-red-400 lg:border-[20px] md:border-[20px]' />
        <div className='relative mt-12 w-3/6'>
          <p className='text-xl font-sans text-justify'>Sabemos que el sentirnos cómodos es lo más importante y cuando trabajamos es un factor crucial. Es por eso que en Coffea ofrecemos esta comodidad a nuestros clientes, brindandoles un espacio en el que puedan trabajar de manera eficiente y sin distracciones.</p>
        </div>
        <div className=' relative w-40 h-80 -mt-96 right-1/3 border-[34px] border-yellow-300 border-l-0 rounded-br-full rounded-tr-full bg-white' />
        <Image className='absolute  md:min-lg:inset-y-10 right-64 w-80 -z-50' alt='Inicio' src={home} />
        <div className='border-solid border-zinc-400 border-b-2 w-5/6 h-16 mx-0 absolute' />
        <div className='mt-24'>
          <span className='text-lg text-gray-400'>¿Por qué escogernos?</span>
        </div>
        <div className='mt-10'>
          <span className='text-5xl font-sans'>Servicios incluidos:</span>
        </div>
        <div className='flex items-center mt-10'>
          <Image className='w-10' src={wifi} alt='wifi' />
          <span className='pl-3'>WiFi</span>
        </div>
        <div className='mt-24 w-60 text-justify'>
          <p>Los clientes tendrán acceso a WIFI gratuito, siempre y cuando consuman alguno de nuestros servicios.</p>
        </div>
        <div className='flex items-center mt-10 ml-72'>
          <Image className='w-10' src={cookie} alt='cookie' />
          <span className='pl-3'>Snacks</span>
        </div>
        <div className='mt-24 w-60 ml-72 text-justify'>
          <p>Los clientes pueden adquirir snacks como barras energéticas, galletas y muffins, además de cafés y bebidas frías.</p>
        </div>
        <div className='flex items-center mt-10 right-72'>
          <Image className='w-10' src={flor} alt='flor' />
          <span className='pl-3'>Ambiente</span>
        </div>
        <div className='mt-24 w-60 right-44 text-justify'>
          <p>Contamos con un ambiente de concentración, sereno y adecuado para el estudio o trabajo.</p>
        </div>
        <div className='flex items-center mt-10 pl-52 ml-96'>
          <Image className='w-10' src={laptop} alt='laptop' />
          <span className='pl-3'>Electrónica</span>
        </div>
        <div className='w-96 mt-24 pl-52 ml-96 text-justify'>
          <p>Contamos con computadoras que los clientes pueden rentar por un tiempo específico para llevar a cabo sus actividades.</p>
        </div>
      </div>
    </>
  )
}
