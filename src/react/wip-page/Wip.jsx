import React, { Component } from "react";
import AnimText from "./AnimText.jsx";

const PageGreeting = props => {
    const greetings = {
        // template: generic, morning, generic, afternoon, generic
        "tr": ["Selam", "Günaydın", "Selam", "Tünaydın", "İyi akşamlar"],
        "en": ["Hello", "Good morning", "Hello", "Good afternoon", "Good evening"],
        "fr": ["Salut", "Bonjour", "Salut", "Salut", "Bonsoir"],
        "es": ["¡Hola", "¡Buenos días", "¡Buenos días", "¡Buenas tardes", "¡Buenas noches"],
        "it": ["Ciao", "Buongiorno", "Ciao", "Ciao", "Buonasera"]
    }
    let hour = new Date();
    hour = hour.getHours();
    
    let greetingIndex = 0;
    for (let breakpoint of [6, 11, 16, 20]) {
        if (hour > breakpoint) {
        greetingIndex++
        } else {break};
    }
    
    const [message, setMessage] = React.useState(greetings["tr"][greetingIndex]);
    const [currentLang, setLang] = React.useState("tr");    
   
    const nextGreeting = () => {
        const langs = Object.keys(greetings);
        const nextLang = langs[(langs.indexOf(currentLang) + 1) % langs.length];
        setLang(nextLang);
        setMessage(greetings[nextLang][greetingIndex]);
    }
    
    return (
        <span onClick={nextGreeting} className="typing">
            <AnimText content={`${message}!`} tag="h1" delay={30} />
        </span>
      )
  }

const Wip = () => {
    return (
        <>
            <PageGreeting />
            <p>The website is under construction.</p>
        </>
    )
}

export default Wip;