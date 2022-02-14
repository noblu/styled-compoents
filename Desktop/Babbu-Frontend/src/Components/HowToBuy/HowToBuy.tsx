import React from "react";
import "./howToBuy.css";
import hexagon1 from "./img/number-hexagon-1.svg";
import hexagon2 from "./img/number-hexagon-2.svg";
import hexagon3 from "./img/number-hexagon-3.svg";
import up from "./img/up.svg";
import down from "./img/down.svg";

const dataHowToBuy = [
  {
    image: hexagon1,
    title: "Create a wallet",
    description: `On Google Chrome, visit metamask.io to download the extension
  and set up the wallet. Android and iOS users can download the
  Trust Wallet app.`,
  },
  {
    image: hexagon2,
    title: `Send $BNB to Binance Chain Wallet`,
    description: `Buy BNB from Binance Exchange and transfer to your Trust Wallet
  wallet address.`,
  },
  {
    image: hexagon3,
    title: "Use $BNB to exchange $BABBU",
    description: (
      <ul>
        <li>
          Go to the DApps tab at the bottom, find PancakeSwap V2 , click “Choose
          Currency”, enter the contract address in the search bar, and you
          should be able to find BABBU.
        </li>
        <li>BABBU contract address: 0xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>
          Before the exchange, click the gear and set the slide to 12-15% , set
          the amount you want to buy and click the exchange button.
        </li>
        <li>
          If you are operating on the PC, please enter the PancakeSwapV2
          official website and click “Connect Wallet” at the top right of the
          website.
        </li>
        <li>PancakeSwap: https://exchange.pancakeswap.finance</li>
      </ul>
    ),
  },
];

function SubHowToBuy(data: any) {
  const { image, title, description } = data.data;
  const [show, setShow] = React.useState(false);
  const onShow = () => {
    setShow(!show);
  };
  return (
    <div className={show ? "accordion-item active" : "accordion-item"}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapse-htb-1"
          aria-expanded="false"
          onClick={onShow}
        >
          <img src={image} alt="" /> {title}
        </button>
        <img
          src={show ? up : down}
          className={show ? "up" : ""}
          width={20}
          alt=""
        />
      </h2>
      <div
        id="flush-collapse-htb-1"
        className={
          show
            ? "accordion-collapse collapse show"
            : "accordion-collapse collapse"
        }
        data-bs-parent="#accordionHtb"
      >
        <div className="accordion-body">{description}</div>
      </div>
    </div>
  );
}

function HowToBuy() {
  return (
    <>
      <section className="howToBuy">
        <h2 className="sectionHeading">How To Buy $BABBU?</h2>
        <div className="accordion accordion-flush style-2" id="accordionHtb">
          {dataHowToBuy.map((item, index) => (
            <SubHowToBuy data={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HowToBuy;
