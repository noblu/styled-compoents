import './community.css';
import {Link} from 'react-router-dom'
import tele from './img/icon-tele-circle.svg'
import reddit from './img/icon-reddit-circle.svg'
import twitter from './img/icon-twitter-circle.svg'
import discord from './img/icon-discord-circle.svg'
import medium from './img/icon-tele-circle.svg'
function Community():JSX.Element {
    return (
        <>
            <section className="community">
                  <h2 className="sectionHeading">Join Our Community</h2>
                  <h3 className="sectionSubHeading">
                    Join our vibrant community of game players and NFT enthusiasts and study all the latest tips and tricks.
                  </h3>
                  <div className="d-flex">
                    <Link to="#">
                      <img src={tele} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={reddit} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={twitter} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={discord} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={medium} alt="" />
                    </Link>
                  </div>
                </section>
        </>
    )
}

export default Community
