import { Link } from 'react-router-dom';
import { Image } from '../Images/Image';
import styled from 'styled-components';
import './auction.css';
import banker from './img/nft-babbu-banker.png'
import logo from './img/icon-logo.svg'

const NavLink = styled(Link)`
width: 25px;
`;

function Auction():JSX.Element {
    return (
        <>
           <section className="auction">
                  <h2 className="sectionHeading">Latest Auction</h2>
                  <h3 className="sectionSubHeading d-flex justify-content-between">
                    <div>You can chose $BNB or $BABU to bid.</div>
                    <div><Link to="#" className="more">View all</Link></div>
                  </h3>
                  <div className="listNft">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="item">
                          <div className="top bg-soft-pink">
                            <span className="percent badge md rounded bg-yellow-grad">160x</span>
                            <Image src={banker} alt="" />
                            <h4 className="title">Babbu Banker (#20410)</h4>
                          </div>
                          <div className="bottom">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div>Live in:</div>
                              <div className="fw-bold">02h:40m:35s</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>Start Price:</div>
                              <div className="text-green">≈ $15,176</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                              <div><NavLink to="img/icon-logo.svg" />$BABU</div>
                              <div>66,500,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="item end">
                          <div className="top bg-natural">
                            <span className="percent badge md rounded bg-yellow-grad">160x</span>
                            <Image src={banker} alt="" />
                            <h4 className="title">Babbu Banker (#20410)</h4>
                          </div>
                          <div className="bottom">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="badge sm bg-dark-brown rounded">END</span>
                              <div className="fw-bold text-soft-brown">00h:00m:00s</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>Start Price:</div>
                              <div className="text-green">≈ $15,176</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                              <div><Image src={logo} width={25} />$BABU</div>
                              <div>66,500,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="item">
                          <div className="top bg-grey">
                            <span className="percent badge md rounded bg-yellow-grad">160x</span>
                            <Image src={banker} alt="" />
                            <h4 className="title">Babbu Banker (#20410)</h4>
                          </div>
                          <div className="bottom">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div>Live in:</div>
                              <div className="fw-bold">02h:40m:35s</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>Start Price:</div>
                              <div className="text-green">≈ $15,176</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                              <div><Image src={logo} width={25} />$BABU</div>
                              <div>66,500,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="item">
                          <div className="top bg-soft-green">
                            <span className="percent badge md rounded bg-yellow-grad">160x</span>
                            <Image src={banker} alt="" />
                            <h4 className="title">Babbu Banker (#20410)</h4>
                          </div>
                          <div className="bottom">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div>Live in:</div>
                              <div className="fw-bold">02h:40m:35s</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>Start Price:</div>
                              <div className="text-green">≈ $15,176</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                              <div><Image src={logo} width={25} />$BABU</div>
                              <div>66,500,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="item">
                          <div className="top bg-purple">
                            <span className="percent badge md rounded bg-yellow-grad">160x</span>
                            <Image src={banker} alt="" />
                            <h4 className="title">Babbu Banker (#20410)</h4>
                          </div>
                          <div className="bottom">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div>Live in:</div>
                              <div className="fw-bold">02h:40m:35s</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>Start Price:</div>
                              <div className="text-green">≈ $15,176</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                              <div><Image src={logo} width={25} />$BABU</div>
                              <div>66,500,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="item">
                          <div className="top bg-soft-blue">
                            <span className="percent badge md rounded bg-yellow-grad">160x</span>
                            <Image src={banker} alt="" />
                            <h4 className="title">Babbu Banker (#20410)</h4>
                          </div>
                          <div className="bottom">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div>Live in:</div>
                              <div className="fw-bold">02h:40m:35s</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>Start Price:</div>
                              <div className="text-green">≈ $15,176</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                              <div><Image src={logo} width={25} />$BABU</div>
                              <div>66,500,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="item">
                          <div className="top bg-purple-1">
                            <span className="percent badge md rounded bg-yellow-grad">160x</span>
                            <Image src={banker} alt="" />
                            <h4 className="title">Babbu Banker (#20410)</h4>
                          </div>
                          <div className="bottom">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div>Live in:</div>
                              <div className="fw-bold">02h:40m:35s</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>Start Price:</div>
                              <div className="text-green">≈ $15,176</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                              <div><Image src={logo} width={25} />$BABU</div>
                              <div>66,500,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="item">
                          <div className="top bg-mint">
                            <span className="percent badge md rounded bg-yellow-grad">160x</span>
                            <Image src={banker} alt="" />
                            <h4 className="title">Babbu Banker (#20410)</h4>
                          </div>
                          <div className="bottom">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div>Live in:</div>
                              <div className="fw-bold">02h:40m:35s</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div>Start Price:</div>
                              <div className="text-green">≈ $15,176</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between fw-bold">
                              <div><Image src={logo} width={25} />$BABU</div>
                              <div>66,500,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> 
        </>
    )
}
export default Auction
