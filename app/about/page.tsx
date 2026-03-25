import Breadcrumb from '@/components/ui/BreadCrumb'
import React from 'react'

const About = () => {
  return (
    <div>
        <Breadcrumb
  title="Gallery"
  image="/img/hero.jpg"
  items={[
    { name: "Home", href: "/" },
    { name: "Gallery" },
  ]}
/>
    </div>
  )
}

export default About