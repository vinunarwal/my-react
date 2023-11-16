import React from "react";
import Post1 from '../Image/post1.png'
import Post2 from '../Image/post2.png'
import Post3 from '../Image/post3.png'
const Section8 = () => {
    return(
        <div>
            <div className="sec8">
                <h4>Practice Advice</h4>
                <h2>Featured Posts</h2>
            </div>
            <div className="sec8-part2">
                <div className="sec8-div1">
                <img src={Post1} alt='Image not available'></img>
            <div className="sec8-post1">
                    <ul className="sec8-ul-1">
                        <li>Google</li>
                        <li>Trending</li>
                        <li>New</li>
                    </ul>
                    <h3>Loudest à la Madison #1 <br/>
                       (L'integral)</h3>
                       <p>We focus on ergonomics and meeting <br/>
                          you where you work. It's only a <br/>
                          keystroke away.</p>
                          <ul className="sec8-ul-2">
                            <li>22 April 2021</li>
                            <li>10 comments</li>
                          </ul>
                          <span>Learn More </span>
                </div>
                </div>

                <div className="sec8-div1">
                <img src={Post2} alt='Image not available'></img>
            <div className="sec8-post1">
                    <ul className="sec8-ul-1">
                        <li>Google</li>
                        <li>Trending</li>
                        <li>New</li>
                    </ul>
                    <h3>Loudest à la Madison #1 <br/>
                       (L'integral)</h3>
                       <p>We focus on ergonomics and meeting <br/>
                          you where you work. It's only a <br/>
                          keystroke away.</p>
                          <ul className="sec8-ul-2">
                            <li>22 April 2021</li>
                            <li>10 comments</li>
                          </ul>
                          <span>Learn More </span>
                </div>
                </div>

                <div className="sec8-div1">
                <img src={Post3} alt='Image not available'></img>
            <div className="sec8-post1">
                    <ul className="sec8-ul-1">
                        <li>Google</li>
                        <li>Trending</li>
                        <li>New</li>
                    </ul>
                    <h3>Loudest à la Madison #1 <br/>
                       (L'integral)</h3>
                       <p>We focus on ergonomics and meeting <br/>
                          you where you work. It's only a <br/>
                          keystroke away.</p>
                          <ul className="sec8-ul-2">
                            <li>22 April 2021</li>
                            <li>10 comments</li>
                          </ul>
                          <span>Learn More </span>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Section8