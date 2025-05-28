import CompanionCard from '@/components/companionCard'
import CompanionsList from '@/components/companionsList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id = "1"
          name = "a"
          topic = "b"
          subject = "c"
          duration = {45}
          color = "#ffda6e"
        />
        <CompanionCard
          id = "1"
          name = "a"
          topic = "b"
          subject = "c"
          duration = {45}
          color = "#ffda6e"
        />
        <CompanionCard
          id = "3"
          name = "a"
          topic = "b"
          subject = "c"
          duration = {45}
          color = "#ffda6e"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title = "Recently completed sessions"
          companions = {recentSessions}
          classNames = "w-2/3 max-lg:w-full"
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page