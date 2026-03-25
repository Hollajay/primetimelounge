import Breadcrumb from '@/components/ui/BreadCrumb'
import React from 'react'

const Recreation
 = () => {
  return (
    <div>
          <Breadcrumb
       title="Recreation"
       image="/img/hero.jpg"
       items={[
         { name: "Home", href: "/" },
         { name: "Recreation" },
       ]}
     />
    </div>
  )
}

export default Recreation
