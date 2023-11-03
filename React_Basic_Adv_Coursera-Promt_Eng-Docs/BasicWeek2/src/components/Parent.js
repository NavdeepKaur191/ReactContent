import Child from "./Child";

function Parent(){
    const date = new Date();

    return (
        <div>
            <Child message={date.toLocaleTimeString()} />
        </div>
    )
};
export default Parent;