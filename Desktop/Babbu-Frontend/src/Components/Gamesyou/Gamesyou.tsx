import { Link } from 'react-router-dom'
import { Image } from '../Images/Image'
import './gamesyou.css'
import game1 from './img/banner-game-1.png'
import game2 from './img/banner-game-2.png'
import arrow2 from './img/icon-arrow-2-side.svg'
import logo from './img/icon-logo.svg'
import facebook from './img/icon-facebook.svg'
import discord from './img/icon-discord.svg'
import twitter from './img/icon-twitter.svg'
import dribble from './img/icon-dribble.svg'
import twitch from './img/icon-twitch.svg'
import union from './img/icon-union.svg'
function Gamesyou() {
    return (
        <>
            <section className="gameForYou">
                  <h2 className="sectionHeading">Games for you</h2>
                  <h3 className="sectionSubHeading d-flex justify-content-between">
                    <div>Gamebase is only available when there is new project launching NFT-based IDO.</div>
                    <div><Link to="#" className="more">View all</Link></div>
                  </h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="item">
                        <div className="thumbWrap">
                          <Image src={game1} className="thumb" />
                          <div className="inner">
                            <h5 className="title">
                              <Image src={arrow2} alt="" /> Play and win!
                            </h5>
                            <div className="price d-flex align-items-center">
                              <Image src={logo} alt="" /> <span>$10,000</span>
                            </div>
                            <div className="time">
                              <div className="badge">
                                BID in:  1m 20s
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom col-auto d-flex justify-content-between align-items-center">
                          <div className="col-auto">
                            <Link to="#" className="btn bg-green rounded">Play now!</Link>
                          </div>
                          <div className="col-auto social d-flex align-items-center">
                            <Link to="#">
                              <Image src={facebook} alt="" />
                            </Link>
                            <Link to="#">
                              <Image src={discord} alt="" />
                            </Link>
                            <Link to="#">
                              <Image src={twitter} alt="" />
                            </Link>
                            <Link to="#">
                              <Image src={dribble} alt="" />
                            </Link>
                            <Link to="#">
                              <Image src={twitch} alt="" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="item">
                        <div className="thumbWrap">
                          <Image src={game2} className="thumb" />
                          <div className="inner">
                            <h5 className="title">
                              <Image src={union} alt="" /> Jackpot Millions
                            </h5>
                            <div className="price d-flex align-items-center">
                              <Image src={logo} alt="" /> <span>$10,000</span>
                            </div>
                            <div className="time">
                              <div className="badge">
                                Draws in 01h 14m 20s
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bottom col-auto d-flex justify-content-between align-items-center">
                          <div className="col-auto">
                            <Link to="#" className="btn bg-green rounded">Play now!</Link>
                          </div>
                          <div className="col-auto social d-flex align-items-center">
                            <Link to="#">
                              <Image src={facebook} alt="" />
                            </Link>
                            <Link to="#">
                              <Image src={discord} alt="" />
                            </Link>
                            <Link to="#">
                              <Image src={twitter} alt="" />
                            </Link>
                            <Link to="#">
                              <Image src={dribble} alt="" />
                            </Link>
                            <Link to="#">
                              <Image src={twitch} alt="" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        </>
    )
}

export default Gamesyou
