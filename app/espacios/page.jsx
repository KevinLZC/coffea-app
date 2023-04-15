import Image from 'next/image'

import areaIndividual from '../../public/AreaIndividual.jpg'
import areaConjunta from '../../public/AreaConjunta.jpg'
import areaComputadoras from '../../public/AreaComputadoras.jpg'
import areaComida from '../../public/AreaComida.jpg'

export default function SpacesPage () {
  return (
    <>
      <div className='mt-14'>
        <span className='text-6xl'>Área de estudio</span>
      </div>
      <div className='mt-10 w-5/6 ml-6 items-center rounded-xl flex shadow-lg bg-gradient-to-l from-white to-gray-100'>
        <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaIndividual' src={areaIndividual} />
        <div className='pl-8 pr-8 space-y-6'>
          <span className='text-5xl'>Área individual</span>
          <p className='text-xl text-justify'>Ofrecemos a nuestros clientes un espacio cubículos para estudio además de un ambiente tranquilo y sin distracciones, donde podrán realizar sus actividades laborales y académicas cómodamente.</p>
          <div className='flex translate-x-1/2'>
            <div className='h-8 w-2/6 pl-4 translate-x-8 border-gray-500 border-2 rounded-full text-lg'>Costos</div>
            <div className='h-8 w-64 text-center -translate-x-36 bg-yellow-400 border-black border-2 rounded-full text-lg'>
              Consumo a partir de $20
            </div>
          </div>
        </div>
      </div>
      <div className='mt-12 w-5/6 ml-6 items-center rounded-xl flex shadow-lg bg-gradient-to-l from-white to-gray-100'>
        <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaConjunta' src={areaConjunta} />
        <div className='pl-8 pr-8 space-y-6'>
          <span className='text-5xl'>Área conjunta</span>
          <p className='text-xl text-justify'>Ofrecemos salas para trabajo conjunto, brindando así privacia para nuestros clientes,  donde podrán disponer de una mesa para 5 personas y un pintarron.</p>
          <div className='flex translate-x-[120px] items-center'>
            <span className='text-lg'>Estudiantes</span>
            <div className='h-8 w-2/6 pl-4 translate-x-8 border-gray-500 border-2 rounded-full text-lg'>Costos</div>
            <div className='h-8 w-72 text-center -translate-x-36 bg-yellow-400 border-black border-2 rounded-full text-lg'>
              $350 tres horas y $120 por hora
            </div>
          </div>
          <div className='flex translate-x-[66px] items-center'>
            <span className='text-lg'>Público en general</span>
            <div className='h-8 w-2/6 pl-4 translate-x-8 border-gray-500 border-2 rounded-full text-lg'>Costos</div>
            <div className='h-8 w-72 text-center -translate-x-36 bg-yellow-400 border-black border-2 rounded-full text-lg'>
              $450 tres horas y $170 por hora
            </div>
          </div>
        </div>
      </div>
      <div className='mt-14'>
        <span className='text-6xl'>Área de computadoras</span>
      </div>
      <div className='mt-10 w-5/6 ml-6 items-center rounded-xl flex shadow-lg bg-gradient-to-l from-white to-gray-100'>
        <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaComputadora' src={areaComputadoras} />
        <div className='pl-8 pr-8 space-y-6'>
          <p className='text-xl text-justify'>Contamos con un área de computadoras adecuada con las características necesarias, con un ambiente cómodo y sin distracciones. En esta sala nuestros clientes podrán rentar un equipo de cómputo.</p>
          <div className='flex translate-x-[340px]'>
            <div className='h-8 w-2/6 pl-4 translate-x-8 border-gray-500 border-2 rounded-full text-lg'>Costos</div>
            <div className='h-8 w-80 text-center -translate-x-36 bg-yellow-400 border-black border-2 rounded-full text-lg'>
              $20 por hora y $12 por media hora
            </div>
          </div>
        </div>
      </div>
      <div className='mt-14'>
        <span className='text-6xl'>Área de comida</span>
      </div>
      <div className='mt-10 w-5/6 ml-6 items-center rounded-xl flex shadow-lg bg-gradient-to-l from-white to-gray-100'>
        <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaComida' src={areaComida} />
        <div className='pl-8 pr-8 space-y-6'>
          <p className='text-xl text-justify'>Contamos con un área de computadoras adecuada con las características necesarias, con un ambiente cómodo y sin distracciones. En esta sala nuestros clientes podrán rentar un equipo de cómputo.</p>
        </div>
      </div>
    </>
  )
}
