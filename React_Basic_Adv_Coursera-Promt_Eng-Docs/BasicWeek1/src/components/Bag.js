function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#efefef",
        margin: "20px 20px"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag