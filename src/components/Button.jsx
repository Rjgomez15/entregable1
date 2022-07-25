import React from 'react';

const Button = ({cb, color}) => {
  return (
    <button  style={{color: `#${color}`}} onClick={cb}><i class='bx bx-skip-next'></i></button>
  );
}

export default Button;