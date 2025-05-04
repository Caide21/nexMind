export default function NeuralGlyphCard({ title, description }) {
    return (
      <div className="theme-glyph">
        <h2 className="glyph-title">💠 Neural Glyph: {title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  