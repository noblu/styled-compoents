import "./tokenomic.css";
import tokenomic from './img/tokenomic.png'

function Tokenomic() {
  return (
    <>
      <section className="tokenomic">
        <div className="row">
          <div className="col-md-6">
            <h2 className="sectionHeading">Tokenenomic</h2>
            <h3 className="sectionSubHeading">$BABBU Token</h3>
            <p>
              Token is issued based on the Binance Smart Chain, which is
              completely decentralized, without any private equity and team
              reservations, Besides, by combining burning mechanism, innovative
              Auto-Liquidity function and NFT together, Babbu liquidity is
              allowed to increase rapidly.{" "}
            </p>
            <p>
              With a combination of features that other tokens don't have. users
              are able to get a power house token out of the hands of anyone,
              except the community.
            </p>
            <div className="total">Total: 1,100,000,000 $BABU</div>
          </div>
          <div className="col-md-6 text-center">
            <img src={tokenomic} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Tokenomic;
