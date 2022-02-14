import "./stats.css";

function Stats() {
  return (
    <>
      <section className="stats">
        <div className="row">
          <div className="col">
            <div className="text">Babu Price:</div>
            <div className="number">$0.01003</div>
          </div>
          <div className="col">
            <div className="text">Holders:</div>
            <div className="number">100,003+</div>
          </div>
          <div className="col">
            <div className="text">MarketCap:</div>
            <div className="number">$176,658,389</div>
          </div>
          <div className="col">
            <div className="text">Twitter:</div>
            <div className="number">123,600+</div>
          </div>
          <div className="col">
            <div className="text">Telegram:</div>
            <div className="number">145,000+</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
