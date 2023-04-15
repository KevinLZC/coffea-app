import Image from 'next/image'
import mapa from '../../public/Mapa.jpg'
import pin from '../../public/pin.png'
export default function LocationPage () {
  return (
    <>
      <div className='mt-12 w-[570px] h-[50px]'>
        <span className='text-6xl'>Nos encontramos en...</span>
      </div>
      <div className='m-auto flex'>
        <Image className='w-3/4 mt-10' alt='Mapa' src={mapa} />
        <Image className='h-[200px] w-[200px] translate-x-48 translate-y-24' alt='pin' src={pin} />
      </div>
      <div className='w-[480px] text-center translate-x-[560px] -translate-y-[280px]'>
        <span className='text-2xl'>Paul P Harris #31 col. Lomas Vista Hermosa 28016 Colima, Colima, México.</span>
      </div>
    </>
  )
}
