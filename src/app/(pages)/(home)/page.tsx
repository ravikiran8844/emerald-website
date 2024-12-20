import React from 'react'
import HomeSection1 from './HomeSection1'
import ScrollingText from '@/components/ui/ScrollingText'
import LogoList from '@/components/LogoList'

const page = () => {
  return (
    <main>
      <HomeSection1/>
      <ScrollingText/>
      <LogoList/>
    </main>
  )
}

export default page