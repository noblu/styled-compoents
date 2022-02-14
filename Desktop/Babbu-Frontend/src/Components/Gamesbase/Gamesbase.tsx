import React from 'react';
import './gamesbase.css';

function Gamesbase() {
    return (
        <>
            <section className="gamebase">
                  <h2 className="sectionHeading">Gamebase</h2>
                  <h3 className="sectionSubHeading">
                    Blind Boxes sale
                  </h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="item rounded-16 chestOpen">
                        <div className="phase badge md bg-soft-yellow rounded-16">Phase 1: Dec-16 12:00 PM +UTC</div>
                        <h4 className="title">Babbu Welcome</h4>
                        <div className="d-flex align-items-center">
                          <span className="me-2">Start time:</span>
                          <span className="time">DD : HH : MM : SS</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="item rounded-16 chestClose">
                        <div className="phase badge md bg-soft-yellow rounded-16">Phase 2</div>
                        <h4 className="title">Babbu Explorer</h4>
                        <div className="d-flex align-items-center">
                          <span className="me-2">Coming soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        </>
    )
}

export default Gamesbase
