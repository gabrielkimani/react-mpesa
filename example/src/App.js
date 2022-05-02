import React from 'react'

import { MpesaStk } from 'react-mpesa-stk'
import 'react-mpesa-stk/dist/index.css'

const credentials = {
  title: 'hey',
  number: '254798871229',
  shortcode: '174379',
  passkey: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',
  transactionType: 'CustomerPayBillOnline',
  businessShortcode: '174379',
  amount: '3000',
  phone: '25498871229',
  callbackUrl: 'https://callbackurl',
  accountReference: 'patakenya',
  transactionDesc: 'activation fee',
  mpesaAuth: 'gveFzMszYVOVQGSyTHJzW7FrwFRWfrAI:QCSiYyQ0XTMLLGMd',
  environment: 'sandbox'
}

const App = () => {
  const onSendSuccess = (data) => {
    console.log(data)
  }

  const handleError = (error) => {
    console.log(error)
  }
  return <MpesaStk  credentials={credentials}
  onPaySuccess={onSendSuccess}
  onPayError={handleError}/>
}

export default App
