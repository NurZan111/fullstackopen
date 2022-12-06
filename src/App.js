
import Header from "./Header"
import Content from "./Content"

const App = () => {
  const course = {
   name:'Half Stack application development',
   parts:[
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
   {
    name: 'Using props to pass data',
    exercises: 7
  },
   {
    name: 'State of a component',
    exercises: 14
  }
  ]
}
  return (
    <div>
     <Header course={course.name}/>
     <Content part = {course.parts}/>
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

export default App;
