import React from "react";
import "./faq.css";

const dataFaq = [
  {
    title: `1. What’s the tokenomics of “Babbu”? And how do we expect the price of
      “Babbu”?`,
    description: `At the genesis of Metaverse, more than 50% of Babbu tokens will be
    burned by sending to “Black Hole Account”. In the operation of
    Metaverse, 4% of transaction fees will be distributed to all holders
    including Black Hole Account, resulting in exponential burn of the
    total supply, 3% of transaction fees will be locked in liquidity pool,
    3% of transaction fees will be allocated to NFT Farming. These have
    guaranteed a continuously rising price floor.`,
  },
  {
    title: `2. How do I buy $BABU? Is it safe?`,
    description: `Placeholder content for this accordion, which is intended to
  demonstrate the <code>.accordion-flush</code> class. This is the
  second item's accordion body. Let's imagine this being filled
  with some actual content.`,
  },
  {
    title: `3. Is there a presale or team allocation?`,
    description: `Placeholder content for this accordion, which is intended to
  demonstrate the <code>.accordion-flush</code> class. This is the
  third item's accordion body. Nothing more exciting happening
  here in terms of content, but just filling up the space to make
  it look, at least at first glance, a bit more representative of
  how this would look in a real-world application.`,
  },
  {
    title: `4. Is the $BABU auto-staking? Could I get tokens just by holding
  it on my wallet?`,
    description: `Placeholder content for this accordion, which is intended to
  demonstrate the <code>.accordion-flush</code> class. This is the
  third item's accordion body. Nothing more exciting happening
  here in terms of content, but just filling up the space to make
  it look, at least at first glance, a bit more representative of
  how this would look in a real-world application.`,
  },
  {
    title: `5. What’s the NFT blind-box (Farming)? How do we participate in
  ”Babbu Farm”?`,
    description: `Placeholder content for this accordion, which is intended to
  demonstrate the <code>.accordion-flush</code> class. This is the
  third item's accordion body. Nothing more exciting happening
  here in terms of content, but just filling up the space to make
  it look, at least at first glance, a bit more representative of
  how this would look in a real-world application.`,
  },
  {
    title: `6. Do you have any plan in marketing and listing?`,
    description: `Placeholder content for this accordion, which is intended to
  demonstrate the <code>.accordion-flush</code> class. This is the
  third item's accordion body. Nothing more exciting happening
  here in terms of content, but just filling up the space to make
  it look, at least at first glance, a bit more representative of
  how this would look in a real-world application.`,
  },
  {
    title: `7. Why is it named “Babbu”?`,
    description: `Placeholder content for this accordion, which is intended to
    demonstrate the <code>.accordion-flush</code> class. This is the
    third item's accordion body. Nothing more exciting happening
    here in terms of content, but just filling up the space to make
    it look, at least at first glance, a bit more representative of
    how this would look in a real-world application.`,
  },
];

function SubFaq(data: any) {
  const { title, description } = data.data;
  const [show, setShow] = React.useState(false);
  const onShowBody = () => {
    setShow(!show);
  };
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapse-faq-1"
          aria-expanded="false"
          onClick={onShowBody}
        >
          {title}
        </button>
      </h2>

      <div
        id="flush-collapse-faq-1"
        className={
          show
            ? "accordion-collapse collapse show"
            : "accordion-collapse collapse"
        }
        data-bs-parent="#accordionFaq"
      >
        <div className="accordion-body">{description}</div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <>
      <section className="faq">
        <h2 className="sectionHeading">Frequently Asked Question</h2>
        <div className="accordion accordion-flush style-1" id="accordionFaq">
          {dataFaq.map((item, index) => (
            <SubFaq data={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Faq;
