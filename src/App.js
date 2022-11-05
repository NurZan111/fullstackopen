
import Header from "./Header"
import Content from "./Content"

const App = () => {
  const data = [
    {part:'Fundamentals of React', exercises: 10 },
    {part:'Using props to pass data', exercises: 7},
    {part:'State of a component', exercises:14}
  ];
  const course = 'Half Stack application development';
 

  return (
    <div>
      <Header course = {course} />
      <Content part = {data.part} exercises = {data.exercises}/>
      <p>Number of exercises {data[0].exercises + data[1].exercises + data[2].exercises}</p>
    </div>
  )
}

export default App;
