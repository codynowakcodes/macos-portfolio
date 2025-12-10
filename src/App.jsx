import { NavBar, Welcome, Dock} from '#components'
import {Terminal, Safari, Resume, Finder, Text, Image, Contact} from '#windows'

import gsap from 'gsap';
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <div>
            <NavBar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <Image />
            <Contact />
        </div>
    )
}
export default App
