import Image from 'next/image'

import areaIndividual from '../../public/AreaIndividual.jpg'
import areaConjunta from '../../public/AreaConjunta.jpg'
import areaComputadoras from '../../public/AreaComputadoras.jpg'
import areaComida from '../../public/AreaComida.jpg'

export default function SpacesPage () {
  return (
    <>
      <div className='justify-center pb-10 lg:pb-2 md:space-x-5'>
        <div>
          <div className='flex justify-center mt-10 text-center'>
            <span className='text-5xl'>Área de estudio</span>
          </div>
          <div className='lg:flex justify-center gap-12'>
            <div className='mt-10 items-center rounded-xl flex justify-center shadow-lg w-fit'>
              <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaIndividual' src={areaIndividual} />
              <div className='pl-8 pr-8 space-y-6 flex flex-col items-center'>
                <span className='text-3xl'>Área individual</span>
                <span className='text-xs lg:text-base text-justify w-[240px]'>
                  Ofrecemos a nuestros clientes un espacio cubículos para estudio además de un ambiente tranquilo y sin distracciones, donde podrán realizar sus actividades laborales y académicas cómodamente.
                </span>
                <div>
                  <div className='h-8 w-64 text-center bg-yellow-400 border-black border-2 rounded-full text-base'>
                    Consumo a partir de $20
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-10 items-center rounded-xl flex justify-center shadow-lg w-fit'>
              <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaConjunta' src={areaConjunta} />
              <div className='pl-8 pr-8 space-y-6 flex flex-col items-center w-fit'>
                <span className='text-3xl'>Área conjunta</span>
                <span className='text-xs lg:text-base text-justify w-[240px] lg:w-[450px]'>
                  Ofrecemos salas para trabajo conjunto, brindando así privacia para nuestros clientes,  donde podrán disponer de una mesa para 5 personas y un pintarron.
                </span>
                <div className='lg:flex lg:gap-6 lg:space-y-0 space-y-5'>
                  <div className='h-8 w-64 text-center bg-yellow-400 border-black border-2 rounded-full text-base'>
                    $350 tres horas y $120 por hora
                  </div>
                  <div className='h-8 w-64 text-center bg-yellow-400 border-black border-2 rounded-full text-base'>
                    $450 tres horas y $170 por hora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:flex w-full justify-center'>
          <div className='jusfity-center pr-5'>
            <div className='flex justify-center mt-10 text-center'>
              <span className='text-5xl'>Área de computadoras</span>
            </div>
            <div className='lg:flex justify-center gap-12'>
              <div className='mt-10 items-center rounded-xl flex justify-center shadow-lg w-fit'>
                <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaIndividual' src={areaComputadoras} />
                <div className='pl-4 pr-4 lg:pl-8 lg:pr-8 space-y-6 flex flex-col items-center'>
                  <span className='text-xs lg:text-base text-justify w-[240px]'>
                    Contamos con un área de computadoras adecuada con las características necesarias, con un ambiente cómodo y sin distracciones. En esta sala nuestros clientes podrán rentar un equipo de cómputo.
                  </span>
                  <div>
                    <div className='h-8 w-60 lg:w-64 text-center bg-yellow-400 border-black border-2 rounded-full text-sm'>
                      $20 por hora y $12 por media hora
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pl-5'>
            <div className='flex justify-center mt-10 text-center'>
              <span className='text-5xl'>Área de comida</span>
            </div>
            <div className='lg:flex justify-center gap-12'>
              <div className='mt-10 items-center rounded-xl flex justify-center shadow-lg w-fit'>
                <Image className='w-[210px] h-[315px] rounded-l-xl' alt='areaComida' src={areaComida} />
                <div className='pl-4 pr-4 lg:pl-8 lg:pr-8 space-y-6 flex flex-col items-center'>
                  <span className='text-xs lg:text-base text-justify w-[240px]'>
                    Contamos con un área de alimentos, en la que nuestros clientes podrán consumir snacks y bebidas durante su visita, así, podrán realizar sus actividades mientras disfrutan este servicio; incluso disfrutar de un pequeño receso.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
