import React from 'react';
import './App.css';

const navItems = ['home', 'about', 'login/signin', 'contact']

function App() {
  return (
    <div className="w-screen h-screen bg-slate-100">
      <div className="w-screen h-screen bg-home-bg bg-center bg-cover px-[200px]">
        <nav className='h-10 flex justify-between'>
          <img className='h-full' src="/logo.png" alt="think big logo" />
          <div className="nav-items uppercase w-1/2 flex justify-between items-center">
            {navItems.map((item, i) => {
              return <p className='cursor-pointer hover:underline underline-offset-4' key={i}>{item}</p>
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
