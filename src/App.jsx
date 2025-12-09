import { NavBar, Welcome, Dock} from '#components'
import { Terminal } from '#windows'

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
        </div>
    )
}
export default App
