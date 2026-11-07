import { useNavigate } from "react-router-dom";
import { THEME_A, THEME_B, THEME_C } from "../images.js";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Raleway:wght@300;400;500;600&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  .selector-wrap {
    min-height: 100vh;
    background: #080604;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    font-family: 'Raleway', sans-serif;
  }

  .selector-header { text-align: center; margin-bottom: 4rem; }

  .selector-eyebrow {
    font-size: 0.55rem; font-weight: 500; letter-spacing: 0.4em;
    text-transform: uppercase; color: #c4a254; margin-bottom: 1.25rem;
  }

  .selector-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 300;
    color: #faf6f0; line-height: 1.15; margin-bottom: 1rem;
  }
  .selector-title em { font-style: italic; }

  .selector-sub {
    font-size: 0.78rem; font-weight: 300; color: #8a7c6e;
    letter-spacing: 0.05em; line-height: 1.7;
  }

  .selector-divider {
    display: flex; align-items: center; justify-content: center;
    gap: 1rem; margin-bottom: 4rem;
  }
  .sel-line { width: 60px; height: 1px; background: rgba(196,162,84,0.35); }
  .sel-diamond { width: 6px; height: 6px; background: #c4a254; transform: rotate(45deg); }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1200px;
    width: 100%;
  }

  .card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.08);
    transition: border-color 0.4s ease, transform 0.4s ease;
    aspect-ratio: 3/4;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .card:hover { border-color: rgba(196,162,84,0.5); transform: translateY(-6px); }

  .card-bg {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center;
    transition: transform 0.7s ease;
  }
  .card:hover .card-bg { transform: scale(1.05); }

  .card-overlay-a {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(6,4,2,0.97) 0%, rgba(6,4,2,0.5) 50%, rgba(6,4,2,0.15) 100%);
  }
  .card-overlay-b {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,14,20,0.97) 0%, rgba(10,14,20,0.5) 50%, rgba(10,14,20,0.2) 100%);
  }
  .card-overlay-c {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(245,240,232,0.97) 0%, rgba(245,240,232,0.6) 50%, rgba(245,240,232,0.1) 100%);
  }

  .card-badge {
    position: absolute; top: 1.5rem; left: 1.5rem;
    font-size: 0.48rem; font-weight: 600; letter-spacing: 0.3em;
    text-transform: uppercase; padding: 0.35rem 0.8rem;
    border: 1px solid; z-index: 1;
  }
  .badge-a { color: #c4a254; border-color: rgba(196,162,84,0.5); background: rgba(6,4,2,0.6); }
  .badge-b { color: #7aadcf; border-color: rgba(122,173,207,0.5); background: rgba(10,14,20,0.6); }
  .badge-c { color: #2d5a27; border-color: rgba(45,90,39,0.5); background: rgba(245,240,232,0.7); }

  .card-body {
    position: relative; z-index: 1; padding: 2rem;
  }

  .card-label {
    font-size: 0.5rem; font-weight: 600; letter-spacing: 0.3em;
    text-transform: uppercase; margin-bottom: 0.6rem;
  }
  .label-a { color: #c4a254; }
  .label-b { color: #7aadcf; }
  .label-c { color: #2d5a27; }

  .card-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.75rem; font-weight: 300; line-height: 1.2;
    margin-bottom: 0.75rem;
  }
  .name-dark { color: #faf6f0; }
  .name-light { color: #1a1a1a; }

  .card-desc {
    font-size: 0.72rem; font-weight: 300; line-height: 1.75;
    margin-bottom: 1.5rem;
  }
  .desc-dark { color: rgba(240,230,211,0.6); }
  .desc-light { color: rgba(26,26,26,0.65); }

  .card-palette {
    display: flex; gap: 0.4rem; margin-bottom: 1.5rem;
  }
  .swatch {
    width: 18px; height: 18px; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.15);
  }

  .card-btn {
    display: inline-block;
    font-size: 0.55rem; font-weight: 500; letter-spacing: 0.25em;
    text-transform: uppercase; padding: 0.7rem 1.75rem;
    cursor: pointer; border: none; transition: all 0.3s ease;
    font-family: 'Raleway', sans-serif;
  }
  .btn-a { background: #c4a254; color: #080604; }
  .btn-a:hover { background: #d4b87a; }
  .btn-b { background: #7aadcf; color: #0a0e14; }
  .btn-b:hover { background: #92bdd9; }
  .btn-c { background: #2d5a27; color: #f5f0e8; }
  .btn-c:hover { background: #3a7333; }

  .selector-footer {
    margin-top: 3.5rem; text-align: center;
    font-size: 0.6rem; font-weight: 300;
    color: rgba(138,124,110,0.4); letter-spacing: 0.15em;
  }

  @media (max-width: 900px) {
    .cards { grid-template-columns: 1fr; max-width: 420px; }
    .card { aspect-ratio: 4/3; }
  }
`;

const themes = [
  {
    id: "a",
    route: "/theme-a",
    img: THEME_A.hero,
    badge: "Theme A",
    label: "Dark Luxury",
    name: "Handshake\n— Shafer",
    desc: "Full-bleed imagery, deep blacks, and gold accents. Atmospheric and editorial — wine as an experience.",
    palette: ["#0b0906", "#c4a254", "#f0e6d3", "#6b2232"],
    overlayClass: "card-overlay-a",
    badgeClass: "badge-a",
    labelClass: "label-a",
    nameClass: "name-dark",
    descClass: "desc-dark",
    btnClass: "btn-a",
  },
  {
    id: "b",
    route: "/theme-b",
    img: THEME_B.hero,
    badge: "Theme B",
    label: "Editorial Catalog",
    name: "Handshake\n— Veritas",
    desc: "Dark background, cool blue accents, organized portfolio feel. Distributor-forward with a magazine edge.",
    palette: ["#0a0e14", "#7aadcf", "#e8eef2", "#1e3a4f"],
    overlayClass: "card-overlay-b",
    badgeClass: "badge-b",
    labelClass: "label-b",
    nameClass: "name-dark",
    descClass: "desc-dark",
    btnClass: "btn-b",
  },
  {
    id: "c",
    route: "/theme-c",
    img: THEME_C.hero,
    badge: "Theme C",
    label: "Neoclassical Light",
    name: "Handshake\n— Vinifera",
    desc: "Warm cream backgrounds, forest green accents, generous whitespace. Heritage and craft at the forefront.",
    palette: ["#f5f0e8", "#2d5a27", "#1a1a1a", "#8b6914"],
    overlayClass: "card-overlay-c",
    badgeClass: "badge-c",
    labelClass: "label-c",
    nameClass: "name-light",
    descClass: "desc-light",
    btnClass: "btn-c",
  },
];

export default function DemoSelector() {
  const navigate = useNavigate();

  return (
    <>
      <style>{css}</style>
      <div className="selector-wrap">
        <div className="selector-header">
          <p className="selector-eyebrow">Handshake Wines — Design Presentation</p>
          <h1 className="selector-title">
            Three Directions,<br /><em>One Brand</em>
          </h1>
        </div>

        <div className="selector-divider">
          <div className="sel-line" /><div className="sel-diamond" /><div className="sel-line" />
        </div>

        <p className="selector-sub" style={{ marginTop: "-2.5rem", marginBottom: "3.5rem", textAlign: "center" }}>
          Select a design direction to preview the full site experience.
        </p>

        <div className="cards">
          {themes.map((t) => (
            <div className="card" key={t.id} onClick={() => navigate(t.route)}>
              <img src={t.img} className="card-bg" alt={t.name} />
              <div className={t.overlayClass} />
              <div className={`card-badge ${t.badgeClass}`}>{t.badge}</div>
              <div className="card-body">
                <p className={`card-label ${t.labelClass}`}>{t.label}</p>
                <h2 className={`card-name ${t.nameClass}`}>
                  {t.name.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h2>
                <p className={`card-desc ${t.descClass}`}>{t.desc}</p>
                <div className="card-palette">
                  {t.palette.map((c) => (
                    <div key={c} className="swatch" style={{ background: c }} />
                  ))}
                </div>
                <button className={`card-btn ${t.btnClass}`}>Preview Theme →</button>
              </div>
            </div>
          ))}
        </div>

        <p className="selector-footer">
          Handshake Wines — Design Mock Presentation &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
}
