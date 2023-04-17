import Image from 'next/image'

import areaIndividual from '../../public/AreaIndividual.jpg'
/* import areaConjunta from '../../public/AreaConjunta.jpg'
import areaComputadoras from '../../public/AreaComputadoras.jpg'
import areaComida from '../../public/AreaComida.jpg' */

export default function SpacesPage () {
  return (
    <>
      <div className='flex justify-center mt-10'>
        <span className='text-6xl'>Área de estudio</span>
      </div>
      <div className='mt-10 items-center rounded-xl flex justify-center shadow-lg bg-red-400'>
        <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaIndividual' src={areaIndividual} />
        <div className='pl-8 pr-8 space-y-6 flex flex-col'>
          <span className='text-3xl'>Área individual</span>
          <span className='text-xs text-justify w-[240px]'>
            Ofrecemos a nuestros clientes un espacio cubículos para estudio además de un ambiente tranquilo y sin distracciones, donde podrán realizar sus actividades laborales y académicas cómodamente.
          </span>
          <div className='flex translate-x-[130px]'>
            <div className='h-8 w-64 text-center -translate-x-36 bg-yellow-400 border-black border-2 rounded-full text-lg'>
              Consumo a partir de $20
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
