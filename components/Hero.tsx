'use client';
import { ArrowRight, Play, ShieldCheck, TreePine, Building2, Sparkles } from 'lucide-react';

export default function Hero(){return <section id="top" className="hero">
  <div className="hero-bg" aria-hidden="true"/><div className="hero-overlay" aria-hidden="true"/>
  <div className="hero-orb orb-one" aria-hidden="true"/><div className="hero-orb orb-two" aria-hidden="true"/>
  <div className="container hero-grid">
    <div className="hero-copy">
      <div className="hero-kicker"><span className="kicker-line"/> THE WORLD RISES IN GWALIOR</div>
      <h1>Where Gwalior<br/><em>Meets The World.</em></h1>
      <p className="hero-text">A landmark township of luxury villas and premium plots, crafted around nature, community and iconic global experiences.</p>
      <div className="hero-actions"><a href="#contact" className="btn primary">Schedule a Visit <ArrowRight size={18}/></a><a href="#gallery" className="btn ghost"><Play size={16}/> Explore Gallery</a></div>
      <div className="hero-proof"><span><ShieldCheck/> RERA Approved</span><span><TreePine/> 1.5 Lakh sq.ft. Garden</span><span><Building2/> Signature Clubhouse</span></div>
    </div>
    <aside className="hero-card">
      <div className="card-icon"><Sparkles size={17}/></div><p className="card-label">PRIVATE SITE VISIT</p><h3>See your future address in person.</h3><p>Share your details and our team will arrange a guided visit.</p><a href="#contact">Request a callback <ArrowRight size={16}/></a>
    </aside>
  </div>
  <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i/></a>
</section>}
