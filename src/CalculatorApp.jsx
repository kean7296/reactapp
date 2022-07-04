import React, {useState} from 'react';

const CalculatorApp = () => {
    const [result, setResult] = useState(0);
    const [screenResut, setScreenResult] = useState(0);
    const [subResult, setsubResult] = useState(null);
    const [operatorHandler, setOperatorHandler ] = useState('');

    const onHandle = (e) => {
        // setScreenResult(result.toString() + e.target.value);
        var concatinate = result.toString() + e.target.value;
        var reg = concatinate.match(/(?!^0[\d])\d*.\d*/);
        setScreenResult(reg);
        setResult(reg);
    };
    
    const onClear = () => {
        setResult(0);
        setScreenResult('0');
        setsubResult(null);
        setOperatorHandler('');
    }

    const onResult = (e) => {
        var _result = subResult;

        if (operatorHandler === '+' && _result !== null)
            _result = Number(_result) + Number(result);
        else if (operatorHandler === '-' && _result !== null)
            _result -= Number(result);
        else if (operatorHandler === '*' && _result !== null)
            _result *= Number(result);
        else if (operatorHandler === '/' && _result !== null)
            _result /= Number(result);
        else 
            _result = result;

        setOperatorHandler(e.target.value);
        setsubResult(_result);
        setScreenResult(0);
        setResult(0);
    }

    return (
        <div className='mx-auto  text-center text-2xl h-screen flex flex-col max-w-lg border bg-orange-50'>
            <h1 className='bg-orange-300 py-2 font-serif text-4xl'>Calculator</h1>
            <div className='p-2 pr-10 border bg-white text-end h-40'>
                <h1 className='text-7xl'>{screenResut.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                <h5>{subResult !== null ?subResult:null} <span className='text-md'>{operatorHandler}</span></h5>
            </div>
            <div className='flex h-full font-bold'>
                <div className='grid grid-cols-3 text-2xl flex-1'>
                    <button value={7} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>7
                    </button>
                    <button value={8} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>8
                    </button>
                    <button value={9} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>9
                    </button>
                    <button value={4} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>4
                    </button>
                    <button value={5} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>5
                    </button>
                    <button value={6} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>6
                    </button>
                    <button value={1} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>1
                    </button>
                    <button value={2} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>2
                    </button>
                    <button value={3} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>3
                    </button>
                    <button value={0} 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100 col-span-2'>0
                    </button>
                    <button value='.' 
                        onClick={onHandle} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>.
                    </button>
                    <button
                        value={operatorHandler}
                        onClick={onResult} 
                        className='col-span-3 hover:bg-orange-300 transition-all border border-orange-100'>=
                    </button>
                </div>
                <div className='grid w-20'>
                    <button
                        onClick={onClear} 
                        className='hover:bg-orange-300 transition-all border border-orange-100'>clear
                    </button>
                    <button 
                        value='+'
                        onClick={onResult}
                        className='hover:bg-orange-300 transition-all border border-orange-100'>+
                    </button>
                    <button 
                        value='-'
                        onClick={onResult}
                        className='hover:bg-orange-300 transition-all border border-orange-100'>-
                    </button>
                    <button 
                        value='*'
                        onClick={onResult}
                        className='hover:bg-orange-300 transition-all border border-orange-100'>*
                    </button>
                    <button 
                        value='/'
                        onClick={onResult}
                        className='hover:bg-orange-300 transition-all border border-orange-100'>/
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CalculatorApp;