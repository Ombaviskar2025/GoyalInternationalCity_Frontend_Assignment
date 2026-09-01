import { Building2, Clock, Globe, Landmark, Flag, LucideIcon } from 'lucide-react';

interface IconItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const icons: IconItem[] = [
  { title: 'Tallest Flag', desc: 'A daily reminder of unity and strength.', icon: Flag },
  { title: 'Eiffel Tower', desc: 'Parisian charm recreated at home.', icon: Building2 },
  { title: 'Big Ben', desc: 'A landmark of heritage and continuity.', icon: Clock },
  { title: 'The Merlion', desc: 'Singapore-inspired grandeur and vibrancy.', icon: Globe },
  { title: 'Ashoka Pillar', desc: 'A symbol of peace and Indian values.', icon: Landmark },
];

export default function Icons() {
  return (
    <section className="section icons-world">
      <div className="container">
        <div className="center-head">
          <p className="eyebrow">A WORLD OF ICONS</p>
          <h2>
            Travel the world without <em>leaving home.</em>
          </h2>
          <p>
            Global landmarks become part of your everyday landscape, creating a township unlike any other in the region.
          </p>
        </div>
        <div className="icon-row">
          {icons.map(({ title, desc, icon: Icon }, index) => (
            <article className="icon-card" key={title}>
              <span className="icon-badge">
                <Icon size={23} />
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="card-number">0{index + 1}</span>
            </article>
          ))}
        </div>
        <div className="center">
          <a href="#contact" className="btn dark-btn">
            Schedule Your Tour <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return <span aria-hidden="true">→</span>;
}

