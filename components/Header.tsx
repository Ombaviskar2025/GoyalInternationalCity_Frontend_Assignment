'use client';
import { useEffect, useState } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

const links = [['About','about'],['Highlights','highlights'],['Amenities','amenities'],['Plans','plans'],['Gallery','gallery'],['Location','location']];

export default function Header(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24); window.addEventListener('scroll',onScroll,{passive:true}); return()=>window.removeEventListener('scroll',onScroll)},[]);
  return <header className={`site-header ${scrolled?'scrolled':''}`}>
    <div className="nav-wrap">
      <a href="#top" className="brand" onClick={()=>setOpen(false)} aria-label="Goyal International City home">
        <span className="brand-mark">GI</span><span><b>GOYAL</b><small>INTERNATIONAL CITY</small></span>
      </a>
      <nav className={open?'nav open':'nav'} aria-label="Primary navigation">
        {links.map(([label,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>Book a Visit <ArrowUpRight size={14}/></a>
      </nav>
      <a className="phone" href="tel:+919090701701"><Phone size={15}/> +91 9090 701 701</a>
      <button className="menu-btn" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
  </header>
}
