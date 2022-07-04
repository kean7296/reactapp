import React from 'react';

const CalcualorButton = ({value, btnValue = value, onClick, colspan = 1}) => {
    colspan = 'col-span-' + colspan;
    var className = 'hover:bg-orange-300 transition-all border border-orange-100 ' + colspan;
    return ( 
        <button value={btnValue} 
            onClick={onClick} 
            className={className}>{value}
        </button>
    );
};

export default CalcualorButton;
