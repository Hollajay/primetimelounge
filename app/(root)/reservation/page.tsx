import Breadcrumb from '@/components/ui/BreadCrumb'
import React from 'react'

const Reservation = () => {
  return (
    <div>
             <Breadcrumb
          title="Book Reservation"
          image="/img/hero.jpg"
          items={[
            { name: "Home", href: "/" },
            { name: "Reservation" },
          ]}
        />
    </div>
  )
}

export default Reservation