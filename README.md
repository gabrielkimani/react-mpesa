# react-mpesa-stk

>  A simple react component for 2bc payments through stk push

[![NPM](https://img.shields.io/npm/v/react-mpesa-stk.svg)](https://www.npmjs.com/package/react-mpesa-stk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mpesa-stk
```

## Usage

```jsx
import React from 'react'

import { MpesaStk } from 'mpesa-react-button'

//load the styles
import 'react-mpesa-stk/dist/index.css'

const credentials = {
  title: '', //eg. 'Pay for your order'
  number: '',
  shortcode: '', //eg 174379---obtained from M-Pesa daraja portal
  passkey: '', //obtained from mpesa daraja portal
  transactionType: '', //eg. CustomerPayBillOnline
  businessShortcode: '', //eg 174379
  amount: '', //Amount to be paid by the customer eg. 100
  phone: '', //Phone number of the customer eg. 254712345000
  callbackUrl: '', //Callback url to be called after payment
  accountReference: '', //Account reference eg. order number
  transactionDesc: '', //Transaction description eg. Order for pizza
  mpesaAuth: '', //Mpesa auth token obtained from mpesa daraja portal
  environment: '' //environment to be used eg. sandbox or production--you can use sandbox for testing
}

const App = () => {
  const onSendSuccess = (data) => {
    //handle success
    console.log(data)
  }

  const handleError = (error) => {
    //handle error
    console.log(error)
  }
  return (
    <MpesaButton
      credentials={credentials} //credentials object
      onPaySuccess={onSendSuccess} //returned afer a successful payment
      onPayError={handleError} //returned after a failed payment
    />
  )
}

export default App
```


## License

MIT © [gabrielkimani](https://github.com/gabrielkimani)
