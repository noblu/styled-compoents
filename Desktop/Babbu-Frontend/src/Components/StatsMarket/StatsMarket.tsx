import "./statsMarket.css"

function StatsMarket() {
  return (
    <section className="stats bg-yellow rounded-16">
      <div className="row">
        <div className="col-md-3 item">
          <div className="number">$39,557,856</div>
          <div className="text">Total Turnover</div>
        </div>
        <div className="col-md-3 item">
          <div className="number">45,194</div>
          <div className="text">Total Transaction Times</div>
        </div>
        <div className="col-md-3 item">
          <div className="number">12,381</div>
          <div className="text">Total Auction Times</div>
        </div>
        <div className="col-md-3 item">
          <div className="number">$1,019,089</div>
          <div className="text">Total Auction Commission</div>
        </div>
      </div>
    </section>
  );
}

export default StatsMarket;
