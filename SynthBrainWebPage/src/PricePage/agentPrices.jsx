import "./price.css";

export default function AgentPrices() {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">AI Agent prices</h2>

      <div className="pricing-section">
        <div className="pricing-label">Simple neural networks</div>
        <div className="pricing-description">
          The system performs fairly simple functions.
        </div>
        <div className="pricing-value">
          <span className="price-range">100 – 300</span>
          <span className="euro">€</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="pricing-section">
        <div className="pricing-label">Constructions of medium complexity</div>
        <div className="pricing-description">
          A wide range of features and connections to third-party services
        </div>
        <div className="pricing-value">
          <span className="price-range">450 – 900</span>
          <span className="euro">€</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="pricing-section">
        <div className="pricing-label">Large-scale systems</div>
        <div className="pricing-description">
          Technologies designed for large-scale tasks
        </div>
        <div className="pricing-value">
          <span className="price-range">1000 – 4000</span>
          <span className="euro">€</span>
        </div>
      </div>
    </div>
  );
}
