import Breadcrumb from '@/components/ui/BreadCrumb'
import React from 'react'

const Hotel
 = () => {
  return (
    <div>
             <Breadcrumb
          title="Our Hotel"
          image="/img/hero.jpg"
          items={[
            { name: "Home", href: "/" },
            { name: "Hotel" },
          ]}
        />

    </div>
  )
}

export default Hotel
