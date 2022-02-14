import "./galaxy.css";
import percent from './img/icon-percent.png'
import whale from './img/icon-whale.png'
import lock from './img/icon-lock.png'
import fair from './img/icon-fair.png'

function Galaxy() {
  return (
    <>
      <section className="galaxy">
									<h2 className="sectionHeading">Galaxy Hole</h2>
									<h3 className="sectionSubHeading">Black Hole Algorithm</h3>
									<div>The Black Hole owned over 50% of supply at launch. The Black Hole counts as one of the wallet holders that 4% of transactions are distributed to. This results in exponential growth of the black hole and exponential burn of the token supply.</div>
									<div className="row">
										<div className="col-md-6">
											<div className="item">
												<img src={percent} alt=""/>
												<h6 className="title">Safe Auto-farming</h6>
												<div>4% of all transaction fees are distributed to holders. Liquidity is locked in PancakeSwap, and the ownership of the contract has been transferred to the burning address.</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="item">
												<img src={whale} alt=""/>
												<h6 className="title">Whale Shock Safety</h6>
												<div>No wallet holds more than 1% of token supply and no transaction can involve more than 5M tokens.</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="item">
												<img src={lock} alt=""/>
												<h6 className="title">100% Decentralized</h6>
												<div>Babbu token is community-led and managed by volunteers, since ownership of contract has been burned and launch was completely seeded as liquidity.</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="item">
												<img src={fair} alt=""/>
												<h6 className="title">Fair Launch</h6>
												<div>100% of BABBU supply is seeded as liquidity, which means that there is no presale and no allocation to team members.</div>
											</div>
										</div>
									</div>
								</section>
    </>
  );
}

export default Galaxy;
