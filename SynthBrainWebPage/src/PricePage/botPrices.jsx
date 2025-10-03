import "./price.css";

export default function BotPrices() {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">BOT prices</h2>

      <div className="pricing-section">
        <div className="pricing-label">Simple bots</div>
        <div className="pricing-description">
          Limited number of required functions
        </div>
        <div className="pricing-value">
          <span className="price-range">100 – 200</span>
          <span className="euro">€</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="pricing-section">
        <div className="pricing-label">Multifunctional bot</div>
        <div className="pricing-description">A wide range of possibilities</div>
        <div className="pricing-value">
          <span className="price-range">250 – 700</span>
          <span className="euro">€</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="pricing-section">
        <div className="pricing-label">Functional bot systems</div>
        <div className="pricing-description">
          Bots that perform service functionality
        </div>
        <div className="pricing-value">
          <span className="price-range">1000 – 2500</span>
          <span className="euro">€</span>
        </div>
      </div>
    </div>
  );
}
