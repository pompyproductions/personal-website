import React from 'react';
import Bubbles from '../../canvas/Bubbles.jsx';
import TextCouple from '../../components/TextCouple.jsx';

const Passions = () => {
    return (
        <article className="content-card">
            <Bubbles/>
            <h2>Passions</h2>

            <section className="content-bit">
                <h3>Programming</h3>
                <p>Self-taught programmer & web developer, with a sensibility toward good and intuitive interfaces.</p>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Basics">Solid foundation in HTML+CSS+JS, and some knowledge of Python.</TextCouple></li>
                    <li><TextCouple title="Technologies">Git, Node.js, React, Sass, Webpack, Gulp.</TextCouple></li>
                    <li><TextCouple title="Other">Godot (GDScript).</TextCouple></li>
                </ul>
            </section>

            <section className="content-bit">
                <h3>Architecture</h3>
                <p>Architect with 2+ years of professional experience, from Portuguese and Italian schools of architecture. Solid drafting, modelling, design, and communication skills.</p>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="CAD">
                        AutoCAD, Rhinoceros, Blender, SketchUp.
                    </TextCouple></li>
                    <li><TextCouple title="Graphics">
                        Adobe Creative Suite, Aseprite, Figma.
                    </TextCouple></li>
                    <li><TextCouple title="Experiences">
                        Gonçalo Byrne Arquitectos (Lisbon, PT), Atelier Bugio (Lisbon, PT), 02Arch (Milan, IT).
                    </TextCouple></li>
                    <li><TextCouple title="Degrees">
                        BSc. in Architectural Sciences (Politecnico di Milano, IT); MSc. in Architecture (Universidade Autónoma de Lisboa, PT).
                    </TextCouple></li>
                </ul>
            </section>

            <section className="content-bit">
                <h3>Music Production</h3>
                <p>Self-taught composer, multi-instrumentalist, and bedroom producer. Began learning to play guitar in 2007, composing and arranging in 2009, and recording in 2011. Currently working on a solo project named GRANOTURCO.</p>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Software">Reaper, Ableton, Cubase, Guitar Pro.</TextCouple></li>
                    <li><TextCouple title="Instruments">Electric/Acoustic Guitar, Bass, Drums/Percussion, Keyboard.</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default Passions;