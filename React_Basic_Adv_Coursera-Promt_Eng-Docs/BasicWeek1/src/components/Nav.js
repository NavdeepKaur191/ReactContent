export function Nav1(props){
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

const Nav2 = function(props){
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}
export {Nav2}


export const Nav3 = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )   
}

const Nav4 = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )   
}
export {Nav4}


const Nav5 = () => {
    return (
        <ul>
            <li>No Props</li>
        </ul>
    )
}
export {Nav5}

export const Nav6 = () => <ul><li>Implicit Return</li></ul>

