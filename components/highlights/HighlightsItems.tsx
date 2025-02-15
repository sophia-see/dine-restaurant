import Image from 'next/image'
import React from 'react'
import HighlightTitle from './HighlightTitle'
import HighlightDescription from './HighlightDescription'
import HighlightDivider from './HighlightDivider'
import HighlightTexts from './HighlightTexts'
import useDeviceSize from '@/hooks/use-device-size'

function ItemContainer({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col gap-[54px] md:gap-[24px]'>
      {children}
    </div>
  )
}

function Item({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col md:flex-row md:items-center gap-9'>
      {children}
    </div>
  )
}

export default function HighlightsItems() {
  const {currSize} = useDeviceSize();

  return (
  <div
    className={`
      flex flex-col items-center justify-center md:gap-[24px]
    `}
  >
    <ItemContainer>
      <Item>
        <Image
          src={`/images/homepage/salmon-${currSize}.jpg`}
          sizes='100vw'
          width={0}
          height={0}
          className='w-full h-auto md:w-[128px] md:h-[96px]'
          alt='seared salmon fillet in a plate'
        />
        <HighlightTexts>
          <HighlightTitle title='Seared Salmon Fillet' />
          <HighlightDescription text="Our locally sourced salmon served with a refreshing buckwheat summer salad." />
        </HighlightTexts>
      </Item>
      <HighlightDivider />
    </ItemContainer>
    <ItemContainer>
      <Item>
        <Image
          src={`/images/homepage/beef-${currSize}.jpg`}
          sizes='100vw'
          width={0}
          height={0}
          className='w-full h-auto md:w-[128px] md:h-[96px]'
          alt='rosemary filet mignon in a plate'
        />
        <HighlightTexts>
          <HighlightTitle title='Rosemary Filet Mignon' />
          <HighlightDescription text="Our prime beef served to your taste with a delicious choice of seasonal sides." />
        </HighlightTexts>
      </Item>
      <HighlightDivider />
    </ItemContainer>
    <ItemContainer>
      <Item>
        <Image
          src={`/images/homepage/chocolate-${currSize}.jpg`}
          sizes='100vw'
          width={0}
          height={0}
          className='w-full h-auto md:w-[128px] md:h-[96px]'
          alt='fruit chocolate mousse in a plate'
        />
        <HighlightTexts>
          <HighlightTitle title='Summer Fruit Chocolate Mousse' />
          <HighlightDescription text="Creamy mousse combined with summer fruits and dark chocolate shavings." />
        </HighlightTexts>
      </Item>
    </ItemContainer>
  </div>
  )
}
