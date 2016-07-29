import React from 'react';
import Surface from './plus/surface'
const style='.MyUI{position:relative;overflow:hidden;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.material-ink{position:absolute;background:#fff;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);opacity:.4}.material-ink.animate{-webkit-animation:a .6s linear;animation:a .6s linear}@-webkit-keyframes a{to{-webkit-transform:scale(2.5);transform:scale(2.5);opacity:0}}@keyframes a{to{-webkit-transform:scale(2.5);transform:scale(2.5);opacity:0}}.material-card{background:#fff;border-radius:2px;display:block;margin:1rem;position:relative}.material-shadow-1{box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:all .2s ease-in-out}.material-shadow-2{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);transition:all .2s ease-in-out}.material-shadow-3{box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23);transition:all .2s ease-in-out}.material-shadow-4{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:all .2s ease-in-out}.material-shadow-5{box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);transition:all .2s ease-in-out}.material-hover:hover{box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}';
const btnStyle='button{border-style:solid;border-width:0;cursor:pointer;font-family:inherit;font-weight:700;line-height:normal;margin:0 0 1.25em;position:relative;text-decoration:none;text-align:center;display:inline-block;padding-top:.75em;padding-right:1.5em;padding-bottom:.8125em;padding-left:1.5em;font-size:1em;border-radius:4px;outline:0}';
const MyUI= ({ children }) => {
  return (
    <div>
      <style>
        {style}
        {btnStyle}
      </style>
      {children}
    </div>
  )
}
module.exports = MyUI;