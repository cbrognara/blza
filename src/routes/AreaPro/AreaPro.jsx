import React from 'react'
import { Header } from '../../components/Header/Header'

// Dados da aplicação
import { proInfo } from '../../components/Data/Data'

export default function AreaPro() {
  return (
    <div>
      <Header userData={proInfo} />
    </div>
  )
}
