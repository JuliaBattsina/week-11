import { ColorContext } from "./App";
import {useContext} from 'react';

function MyTheme () {

    const myColor = useContext (ColorContext);
    const themeIdeas = {
        backgroundColor: myColor ?'pink': 'blue',
        color: myColor ?'black': 'white',
        padding: '100px',
        margin: '100px'
    }
    return (
        <div style={themeIdeas}>  
            <p>My Block</p>
        </div>
    )
}
export default MyTheme;