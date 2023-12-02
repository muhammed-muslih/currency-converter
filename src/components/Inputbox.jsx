import PropTypes from 'prop-types'

const Inputbox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectedCurrency,
    currencyOptions = [],
    amountDisabled = false,
    currencyDisabled=false,
}) => {
    return (
        <div className={`bg-white p-6  rounded-lg text-md flex `}>
            <div className="w-1/2">
                <label htmlFor="" className="text-black/60 inline-block mb-2">{label}</label>
                <input
                 type="number"
                 className="bg-white outline-none w-full bg-transparent py-2 text-lg"
                 placeholder='0'
                 disabled={amountDisabled}
                 value={amount}
                 onChange={(e) => onAmountChange&&onAmountChange(Number(e.target.value))}
                 
                   />
            </div>
            <div className="w-1/2 justify-end flex flex-wrap text-end">
                <p className="w-full text-black/60">Currency Type</p>
                <select name="" id="" 
                className="rounded-lg py-1 px-1 cursor-pointer outline-none"
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange&&onCurrencyChange(e.target.value)}
                disabled={currencyDisabled}
                >
                    {
                        currencyOptions&&currencyOptions.map((currency) =>(
                            <option className="outline-none" key={currency} value={currency}>{currency}</option>
                        ))
                    }
                    
                </select>
            </div>
        </div>
    )
}

Inputbox.propTypes = {
    label: PropTypes.string,
    amount: PropTypes.number,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
    selectedCurrency: PropTypes.string,
    currencyOptions: PropTypes.arrayOf(PropTypes.string),
    amountDisabled: PropTypes.bool,
    currencyDisabled: PropTypes.bool,
}

export default Inputbox