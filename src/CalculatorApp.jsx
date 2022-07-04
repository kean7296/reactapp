import React, {useState} from 'react';
import CalcualorButton from './component/calculator/CalculatorButton';
import ScreenResult from './component/calculator/ScreenResult';

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
            <ScreenResult subResult={subResult} screenResut={screenResut} operatorHandler={operatorHandler} />
            <div className='flex h-full font-bold'>
                <div className='grid grid-cols-3 text-2xl flex-1'>
                    <CalcualorButton value={7} onClick={onHandle} />
                    <CalcualorButton value={8} onClick={onHandle} />
                    <CalcualorButton value={9} onClick={onHandle} />
                    <CalcualorButton value={4} onClick={onHandle} />
                    <CalcualorButton value={5} onClick={onHandle} />
                    <CalcualorButton value={6} onClick={onHandle} />
                    <CalcualorButton value={1} onClick={onHandle} />
                    <CalcualorButton value={2} onClick={onHandle} />
                    <CalcualorButton value={3} onClick={onHandle} />
                    <CalcualorButton colspan={2} value={0} onClick={onHandle} />
                    <CalcualorButton value='.' onClick={onHandle} />
                    <CalcualorButton btnValue={operatorHandler} colspan={3} value='=' onClick={onResult} />
                </div>
                <div className='grid w-20'>
                    <CalcualorButton value='clear' onClick={onClear} />
                    <CalcualorButton value='+' onClick={onResult} />
                    <CalcualorButton value='-' onClick={onResult} />
                    <CalcualorButton value='*' onClick={onResult} />
                    <CalcualorButton value='/' onClick={onResult} />
                </div>
            </div>
        </div>
    );
}

export default CalculatorApp;