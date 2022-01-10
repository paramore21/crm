import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilLockUnlocked, cilUser } from '@coreui/icons'
import i18next from 'i18next'
import { useState } from 'react'

const Login = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false)
  function handlePasswordClick() {
    setIsPasswordHidden(!isPasswordHidden)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>{i18next.t('login')}</h1>
                    <p className="text-medium-emphasis">{i18next.t('loginDescription')}</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder={i18next.t('username')} autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4" onClick={handlePasswordClick}>
                      <CInputGroupText>
                        <CIcon icon={isPasswordHidden ? cilLockLocked : cilLockUnlocked} />
                      </CInputGroupText>
                      <CFormInput
                        type={isPasswordHidden ? 'password' : 'text'}
                        placeholder={i18next.t('password')}
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          {i18next.t('login')}
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          {i18next.t('forgotPassword')}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
