import React from 'react'

function Logo({width = '10px'}) {
  return (
    <div className="flex items-center">
      <img src="https://images-platform.99static.com//nzxJEQLSxzvNT0QoJUVxz5DDdnY=/236x859:737x1360/fit-in/500x500/99designs-contests-attachments/125/125088/attachment_125088051" alt="logo" width={width}/>
      <h2 className="text-2xl font-bold mx-2">Mega Blog</h2>
    </div>
  );
}

export default Logo
