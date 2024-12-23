import React from 'react'
import HomeSection1 from './HomeSection1'
import ScrollingText from '@/components/ui/ScrollingText'
import LogoList from '@/components/LogoList'
import TrustBadges from './TrustBadges'
import HomeSection6 from './HomeSection6'

const page = () => {
  return (
    <main>
      <HomeSection1/>
      <TrustBadges/>
      <ScrollingText/>
      <HomeSection6/>
      <LogoList/>
    </main>
  )
}

export default page