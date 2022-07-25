import React from 'react'

const Content = ({content, color}) => {
  console.log(color);
  return (
    <div style={{color: `#${color}`}}>{content}</div>
  );
}

export default Content