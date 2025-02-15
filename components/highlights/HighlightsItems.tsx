import Image from 'next/image'
import React from 'react'
import HighlightTitle from './HighlightTitle'
import HighlightDescription from './HighlightDescription'
import HighlightDivider from './HighlightDivider'
import HighlightTexts from './HighlightTexts'

function ItemContainer({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col gap-[54px]'>
      {children}
    </div>
  )
}

function Item({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col gap-9'>
      {children}
    </div>
  )
}

export default function HighlightsItems() {
  return (
  <div
    className={`
      flex flex-col items-center justify-center
    `}
  >
    <ItemContainer>
      <Item>
        <Image
          src={"/images/homepage/salmon-mobile.jpg"}
          sizes='100vw'
          width={0}
          height={0}
          className='w-full h-auto'
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
          src={"/images/homepage/beef-mobile.jpg"}
          sizes='100vw'
          width={0}
          height={0}
          className='w-full h-auto'
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
          src={"/images/homepage/chocolate-mobile.jpg"}
          sizes='100vw'
          width={0}
          height={0}
          className='w-full h-auto'
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
