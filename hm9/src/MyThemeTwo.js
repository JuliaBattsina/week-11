import { ColorContext } from "./App";
import {useContext} from 'react';

function MyThemeTwo () {

    const myColor = useContext (ColorContext);
    const themeIdeas = {
        backgroundColor: myColor ?'green': 'red',
        color: myColor ?'black': 'white',
        padding: '100px',
        margin: '100px'
    }
    return (
        <div style={themeIdeas}>  
            <p>My BlockTwo</p>
        </div>
    )
}
export default MyThemeTwo;