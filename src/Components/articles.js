import React from 'react'
import ArrowDown from '../Assets/arrow_down.png'
import join from '../Assets/join.png'
import card_img1 from '../Assets/card_img1.png'
import card_img2 from '../Assets/card_img2.png'
import card_img3 from '../Assets/card_img3.png'
import user1 from '../Assets/user1.png'
import user2 from '../Assets/user2.png'
import user3 from '../Assets/user3.png'
import user4 from '../Assets/user4.png'
import share from '../Assets/share.png'
import job from '../Assets/job.png'
import location from '../Assets/location.png'
import calendar from '../Assets/calendar.png'
import edit from '../Assets/edit.png'

const Articles = () => {
    return (
        <>
            <div className='articles_header'>
                <div className='articles_top'>
                    <h4 id='all_post'>All Posts(32)</h4>
                    <h4>Article</h4>
                    <h4>Event</h4>
                    <h4>Education</h4>
                    <h4>Job</h4>
                </div>
                <div className='articles_top_btn'>
                    <button className='post_btn'>Write a Post <img src={ArrowDown} /></button>
                    <button className='join_btn'><img src={join} /> Join Group</button>
                </div>
            </div>
            <div className='divider'></div>
            <div className='articles'>
                <section className='article_section'>
                    <div className="card article">
                        <img src={card_img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>✍️ Article</h4>
                            <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <h6 className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h6>
                            <div className='article_users'>
                                <div className='user'>
                                    <img src={user1} />
                                    <h3>Sarthak Kamra</h3>
                                </div>
                                <div className='share'>
                                    <p>1.4k views</p>
                                    <button className="share_btn"><img src={share} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card article'>
                        <img src={card_img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>🔬️ Education</h4>
                            <h5 className="card-title">Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                            <h6 className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h6>
                            <div className='article_users'>
                                <div className='user'>
                                    <img src={user2} />
                                    <h3>Sarah West</h3>
                                </div>
                                <div className='share'>
                                    <p>1.4k views</p>
                                    <button className="share_btn"><img src={share} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card article'>
                        <img src={card_img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4>🗓️ Meetup</h4>
                            <h5 className="card-title">Finance & Investment Elite Social Mixer @Lujiazui</h5>
                            <div className='article_detail'>
                                <div className='calendar'>
                                    <img src={calendar} alt="calendar" />
                                    <p>Fri, 12 Oct, 2018</p>
                                </div>
                                <div className='location'>
                                    <img src={location} alt="location" />
                                    <p>Ahmedabad, India</p>
                                </div>
                            </div>
                            <button className='meet_btn'>Visit Website</button>
                        </div>
                        <div className='article_users'>
                            <div className='user'>
                                <img src={user3} />
                                <h3>Ronal Jones</h3>
                            </div>
                            <div className='share'>
                                <p>1.4k views</p>
                                <button className="share_btn"><img src={share} /></button>
                            </div>
                        </div>
                    </div>
                    <div className='card article'>
                        <div className="card-body">
                            <h4>💼️ Job</h4>
                            <h5>Software Developer</h5>
                            <div className='article_detail2'>
                                <div className='job'>
                                    <img src={job} alt="job" />
                                    <p>Innovaccer Analytics Private Ltd.</p>
                                </div>
                                <div className='location'>
                                    <img src={location} alt="location" />
                                    <p>Noida, India</p>
                                </div>
                            </div>
                            <button className='job_btn'>Apply on Timesjobs</button>
                            <div className='article_users'>
                                <div className='user'>
                                    <img src={user4} />
                                    <h3>Joseph Gray</h3>
                                </div>
                                <div className='share'>
                                    <p>1.4k views</p>
                                    <button className="share_btn"><img src={share} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='groups'>
                    <div className='groups_location'>
                        <div className='location'>
                            <img src={location} alt="location" />
                            <p>Noida, India</p>
                        </div>
                        <div>
                            <img src={edit} alt="edit" />
                        </div>
                    </div>
                    <div className='divider2'></div>
                    <h6>Your location will help us serve better and extend a personalised experience.</h6>
                </section>
            </div>
        </>
    )
}

export default Articles