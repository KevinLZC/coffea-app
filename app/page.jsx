import Image from 'next/image'
import home from '../public/Home.jpg'
import wifi from '../public/wifi.png'
import cookie from '../public/cookie.png'
import flor from '../public/flor-de-loto.png'
import laptop from '../public/laptop.png'

export default function HomePage () {
  return (
    <>
      <h1>"Somos el combustible para crear"</h1>
      <p>Sabemos que el sentirnos cómodos es lo más importante y cuando trabajamos es un factor crucial. Es por eso que en Coffea ofrecemos esta comodidad a nuestros clientes, brindandoles un espacio en el que puedan trabajar de manera eficiente y sin distracciones.</p>
      <Image src={home} alt='Vista general' />
      <p>Escoge una sala</p>
      <p>Espacio de trabajo</p>
      <p>Comienza</p>
      <p>¿Por qué escogernos?</p>
      <h2>Servicios incluidos:</h2>
      <Image src={wifi} alt='wifi' />
      <h3>WiFi</h3>
      <p>Los clientes tendrán acceso a WIFI gratuito, siempre y cuando consuman alguno de nuestros servicios.</p>
      <Image src={flor} alt='flor' />
      <h3>Ambiente</h3>
      <p>Contamos con un ambiente de concentración, sereno y adecuado para el estudio o trabajo.</p>
      <Image src={cookie} alt='cookie' />
      <h3>Snacks</h3>
      <p>Los clientes pueden adquirir snacks como barras energéticas, galletas y muffins, además de cafés y bebidas frías.</p>
      <Image src={laptop} alt='laptop' />
      <h3>Electrónica</h3>
      <p>Contamos con computadoras que los clientes pueden rentar por un tiempo específico para llevar a cabo sus actividades.</p>
    </>
  )
}
