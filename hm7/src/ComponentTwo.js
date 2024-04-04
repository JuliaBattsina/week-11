import { Context } from "./Context";
import {useContext} from 'react';

function ComponentTwo () {
    const [context, setContext] = useContext (Context);
    return (<div>
        <p>Component TWO</p>
        <p>{context}</p>
        </div>
    )
}
export default ComponentTwo;