import Breadcrumb from '@/components/ui/BreadCrumb'
import React from 'react'

const About = () => {
  return (
    <div>
        <Breadcrumb
  title="About Us"
  image="/img/hero.jpg"
  items={[
    { name: "Home", href: "/" },
    { name: "About" },
  ]}
/>
    </div>
  )
}

export default About