import Image from 'next/image'
import mapa from '../../public/Mapa.jpg'
import pin from '../../public/pin.png'
export default function LocationPage () {
  return (
    <>
      <div className='flex justify-center pt-12'>
        <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Nos encontramos en...</span>
      </div>
      <div className='lg:pt-12 pt-6 flex max-lg:flex-col items-center justify-center space-x-8 lg:pb-10 md:pb-8'>
        <Image className='w-3/4 md:w-2/3 lg:w-[500px] mt-10 rounded-3xl shadow-xl' alt='Mapa' src={mapa} />
        <div className='lg:flex-col lg:my-auto lg:w-[600px]'>
          <div className='flex justify-center mt-10'>
            <Image className='w-24 lg:w-80' alt='pin' src={pin} />
          </div>
          <div className='flex justify-center pt-10 pl-10 pr-10'>
            <span className='text-2xl text-center lg:text-4xl'>Paul P Harris #31 col. Lomas Vista Hermosa 28016 Colima, Colima, México.</span>
          </div>
        </div>
      </div>
    </>
  )
}
