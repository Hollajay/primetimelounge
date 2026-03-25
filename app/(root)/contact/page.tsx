import Breadcrumb from '@/components/ui/BreadCrumb'
import React from 'react'

const ContactPage
 = () => {
  return (
    <div>
        <Breadcrumb
     title="Contac Us"
     image="/img/hero.jpg"
     items={[
       { name: "Home", href: "/" },
       { name: "Contact" },
     ]}
   />
    </div>
  )
}

export default ContactPage
