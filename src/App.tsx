import React from 'react'
import { Popover, Transition } from '@headlessui/react';
import { StoryBox } from './components/StoryBox';
import meAndGuitarPlayers from './assets/me-and-guitar-players.jpeg';
import meWithMyMom from './assets/me-with-my-mom.jpg';
import meAndGuitar from './assets/me-and-guitar.jpeg'

export function App() {
  return (
    <>
      <header className='w-full py-32 flex items-center justify-center bg-slate-400 bg-[url("./assets/guitar.jpeg")] bg-center bg-cover bg-no-repeat'>
        <div>
          <h1 className='text-white'>linha do tempo.</h1>
        </div>
      </header>
      <div className='min-h-full p-12 flex items-center justify-center'>
        <ul className='flex flex-col gap-y-6'>
          <li>
            <StoryBox time='2009'>
              <p>No dia 27 de abril de 2009, eu venho a Terra com uma história de diversas aventuras pela frente.</p>
              <p className='mt-2'>
                Alguns dias depois do meu nascimento, vem a terra meu irmão mais novo. Meu pai sempre deu muito mais atenção a ele, afinal, ele era separado da minha mãe.
              </p>
            </StoryBox>
          </li>
          <li>
            <StoryBox time='2013-2019'>
              <p>No período de 2013 até 2019, eu era simplesmente apaixonado pela guitarra, sempre admirava os solos desse instrumento, e sempre parava pra pensar comigo mesmo: <span className='font-semibold'>"será que um dia vou conseguir conhecer um pouco mais desse intrumento?"</span></p>
              <img src={meAndGuitarPlayers} alt="Daniel com musicos" className="mt-6 rounded-md w-72" />
            </StoryBox>
          </li>
          <li>
            <StoryBox time='2019'>
              <p>No ano de 2019, surge uma oportunidade para eu aprender esse instrumento que tanto almejava. Eu estava muito animado para aprender, porém, quando começaram as aulas, me entregam um violão, fiquei chateado e com um até co raiva, não vou mentir.</p>
              <p className="mt-2">Apesar de tudo, me dediquei. Os professores escolheram uma música para aprendermos completa, e colocaram uma menina que já tinha um conhecimento maior do que o meu para tocar guitarra.</p>
              <p className="mt-2">Eu fiquei chateado, mas "dei a volta por cima", e aprendi o solo que ela iria fazer em menos de uma semana, ou seja, minha história para tocar relativamente bem hoje, foi por causa de uma "inveja", isso é um tanto que engraçado.</p>
              <p className="mt-2">A partir daí, só fui evoluindo mais e mais e me inspirando em guitarristas com o Slash (Guns n' roses), Juninho Afram (Oficina G3), Mateus Asato (Bruno Mars) entre vários outros que poderia passar o dia inteiro falando sobre.</p>
            </StoryBox>
          </li>
          <li>
            <StoryBox time='2020'>
              <p>No ano de 2020, eu tive uma aula com um amigo que já é mais experiente no intrumento, nessa aula ele me ensinou a famosa pentatônica (conjunto de todas as escalas formadas por cinco notas musicais ou tons), que é a escala mais usada no instrumento, a qual todos os guitarristas desse mundo conhecem, e o quão esse aula me é útil para mim até hoje, eu não saberia explicar.</p>
              <img src={meWithMyMom} className='h-80 my-6 rounded-md' />
              <p>De acordo com minha evolução, meu pai foi dando importância a isso, e em 2020, ele ajudou numa espécie de "arrecadação" para comprar minha primeira guitarra, meus irmãos me ajudaram também, e comprei minha guitarra numa tarde de segunda feira, que é que está na abertura dessa linha do tempo. A partir daí eu comecei a imaginar notas na minha cabeça, e reproduzia no meu instrumento, era como algo sobrenatural.</p>
            </StoryBox>
          </li>
          <li>
            <StoryBox time='2022'>
              <p>Nos dias atuais, passei por várias correções em minha maneira de tocar, mas creio que foi para cooperar com minha evolução, mas sigo em busca de evoluir mais e mais a cada vez que toco aquelas 6 cordas 🤘</p>
              <img src={meAndGuitar} className="mt-6 rounded-md w-80" />
            </StoryBox>
          </li>
        </ul>
      </div>
    </>
  )
}
