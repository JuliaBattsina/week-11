import { Context } from "./Context";
import {useContext} from 'react';

function ComponentOne () {
    const [context, setContext] = useContext (Context);
    return (<div>
        <p>Component ONE</p>
        <button onClick={()=> setContext ("Новое значение!")}>Нажми сюда,чтобы поменять надпись</button>
        </div>
    )
}
export default ComponentOne;