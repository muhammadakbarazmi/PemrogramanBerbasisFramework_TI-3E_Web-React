// Agar function arrow HelloComponent bisa berjalan di react maka tambahan react 

import React from 'react';
import './HelloComponent.css';

const HelloComponent = () => {
    return <p className='text-p'> Nama saya adalah Muhammad Akbar Azmi</p>
}

// agar component ini dapat dipakai dimana saja
export default HelloComponent;