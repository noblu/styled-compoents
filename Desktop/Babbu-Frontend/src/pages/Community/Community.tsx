import React from 'react'
import Backdrop from '../../Components/Backdrop/Backdrop';
import Menu from '../../Components/Menu/Menu';
import Topbar from '../../Components/Topbar/Topbar';
import Twitter from './img/Twitter.svg';
import Telegram from './img/Telegram.svg';
import Medium from './img/Medium.svg';
import Discord from './img/Discord.svg';
import Youtube from './img/YoutubeImage.svg';
import Facebook from './img/Facebook.svg';
import GlobalGroup from './img/Community.svg';
import Korea from './img/Korean-Group.svg';
import Russia from './img/Russia-Group.svg';
import India from './img/India-Group.svg';
import Philipphines from './img/Philippines-Group.svg';
import Vietnam from './img/Vietnam-Group.svg';
import './community.css'

function Community() {
    const bodyContent = [
        {
            type: 'channels',
            title: 'BABBU Official Channel',
            data: [
                {
                    name: 'Twitter',
                    link: '@BabbuMetaverse',
                    image: Twitter
                },
                {
                    name: 'Telegram',
                    link: '@BabbuMetaverse',
                    image: Telegram
                },
                {
                    name: 'Medium',
                    link: 'https://babbumetaverse.medium.com/',
                    image: Medium
                },
                {
                    name: 'Discord',
                    link: 'https://discord.com/BabbuMetaverse',
                    image: Discord
                },
                {
                    name: 'Youtube',
                    link: 'https://youtube.com/BabbuMetaverse',
                    image: Youtube
                },
                {
                    name: 'Facebook',
                    link: 'https://facebook.com/BabbuMetaverse',
                    image: Facebook
                },
            ]
        },
        {
            type: 'telegrams',
            title: 'Telegram Community',
            data: [
                {
                    name: 'Global Group',
                    link: 'https://web.telegram.org/',
                    image: GlobalGroup
                },
                {
                    name: 'Korea',
                    link: 'https://web.telegram.org/',
                    image: Korea
                },
                {
                    name: 'Russia',
                    link: 'https://web.telegram.org/',
                    image: Russia
                },
                {
                    name: 'India',
                    link: 'https://web.telegram.org/',
                    image: India
                },
                {
                    name: 'Vietnam',
                    link: 'https://web.telegram.org/',
                    image: Vietnam
                },
                {
                    name: 'Philipphines',
                    link: 'https://web.telegram.org/',
                    image: Philipphines
                },
            ]
        }
    ]

    return (
        <div className="container-xl">
            <Backdrop />
            <Topbar />
            <div id="content">
                <div className="row g-0">
                    <Menu />
                    <div className="col community">
                        <div id="mainContent">
                            {
                                bodyContent.map((e, index) => (
                                    <div className={e.type} key={index}>
                                        <div className='header mb-4'>
                                            <div className='title'>{e.title}</div>
                                            <div className='description'>Join to Follow Babbu Latest News!</div>
                                        </div>
                                        {
                                            e.data.map((channel, i) => (
                                                <div className='channel' key={i}>
                                                    <div className='testtest'>
                                                        <img src={channel.image} alt={channel.name} />
                                                        <div className='ml-3'>
                                                            <div className='channel-name'>{channel.name}</div>
                                                            <div className='channel-link'>
                                                                <a href={channel.link}>{channel.link}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community