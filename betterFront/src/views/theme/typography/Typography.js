import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          About Epitode
          <DocsLink href="https://github.com/bryanongjx/Epidote" />
        </CCardHeader>
        <CCardBody>
          <p>
            Welcome to Epitode! Epitode is a platform for you to get upskilled and connected to the
            relevant jobs. Here, you can track your health status, manage your schedules, take up
            courses and get connected to employers.
          </p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
