import Part from "./Part";
const Content = (props) => {
    console.log(props)
    return (
        <div>
        <Part part = {props.part[0]} />
        <Part part = {props.part[1]} />
        <Part part = {props.part[2]} />
        </div>
    )
}
export default Content;
