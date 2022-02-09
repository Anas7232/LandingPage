import React from 'react'

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium at sint dolorum libero asperiores perferendis aliquam, nesciunt nostrum, eos, adipisci sapiente doloremque fugiat ut laborum accusantium voluptate possimus optio modi sed magni. Assumenda, ullam quaerat.
                     </p>
                    <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About
