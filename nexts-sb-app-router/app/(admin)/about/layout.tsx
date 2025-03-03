import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Next.js App - About',
  description: 'Generated by create next app',
}

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>About Layout</p>
      {children}
    </div>
  )
}

export default AboutLayout
