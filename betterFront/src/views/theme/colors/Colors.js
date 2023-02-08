import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Profile
          <DocsLink href="https://coreui.io/docs/content/typography/" />
        </CCardHeader>
        <CCardBody>
          <p>The details of the user is given.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Information</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">Name</code>
                  </p>
                </td>
                <td>
                  <span className="h6">Devanshu Bisht</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">Status</code>
                  </p>
                </td>
                <td>
                  <span className="h6">Kidney Stone Stage 3</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">Age</code>
                  </p>
                </td>
                <td>
                  <span className="h6">23</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <code className="highlighter-rouge">Availability</code>
                  </p>
                </td>
                <td>
                  <span className="h6">9AM to 5PM</span>
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Colors
