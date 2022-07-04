import React from 'react';

const ScreenResult = ({screenResut, subResult, operatorHandler}) => (
    <div className='p-2 pr-10 border bg-white text-end h-40'>
        <h1 className='text-7xl'>{screenResut.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        <h5>{subResult !== null ?subResult:null} <span className='text-md'>{operatorHandler}</span></h5>
    </div>
);

export default ScreenResult;
