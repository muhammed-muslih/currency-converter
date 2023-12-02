import { useState } from 'react'
import './App.css'
import Inputbox from './components/Inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }
  const swap = (e) => {
  e.preventDefault()
  const tempForTo = to;
  setTo(from);
  setFrom(tempForTo);
  const tempForConvertedAmount = convertedAmount;
  setConvertedAmount(amount);
  setAmount(tempForConvertedAmount);
  }

  return (  
    <div className='w-full h-screen flex flex-wrap bg-cover bg-no-repeat justify-center items-center'
    style={{backgroundImage:`url(https://images.pexels.com/photos/7267611/pexels-photo-7267611.jpeg)`}}>
   <div className='w-full p-0.5'>
  <div className='w-full max-w-xl mx-auto bg-blur bg-white/50 p-6 rounded-lg border border-white text-md'>
    <form onSubmit={(e) => {
      e.preventDefault()
      convert()
    }} >
    <div className='w-full mb-2'>
    <Inputbox
    label='from'
    amount={amount}
    onAmountChange={(amount) => setAmount(amount)}
    onCurrencyChange={(currency) => setFrom(currency)}
    selectedCurrency={from}
    currencyOptions={options}
    />
    </div>
    <div className='relative w-full h-1'>
      <button className='absolute left-1/2 bg-blue-600 text-white rounded-md border-2
       border-white px-4 py-2 -translate-y-1/2 -translate-x-1/2' onClick={swap}>swap</button>
    </div>
    <div className='w-full mb-3'>
    <Inputbox
    label='to'
    amount={convertedAmount}
    onCurrencyChange={(currency) => setTo(currency)}
    selectedCurrency={to}
    currencyOptions={options}
    amountDisabled
    />
    </div>
    <button type='submit' className='w-full bg-blue-600 rounded-lg text-white px-4 py-3'>Convert</button>
    </form>
  </div>
   </div>
    </div>
  )
}

export default App
