import Part from "./Part";
const Content = (props) => {
  
    return (
        <div>
        <Part part = {props.data.part[0]} exercises = {props.data.exercises[0]}/>
        <Part part = {props.data.part[1]} exercises = {props.data.exercises[1]}/>
        <Part part = {props.data.part[2]} exercises = {props.data.exercises[2]}/>
        </div>
    )
}
export default Content;
