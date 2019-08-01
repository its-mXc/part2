import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => (
  <>
  <Header name={course.name} />
  <Content parts={course.parts} />
  </>
)

const Header = ({name}) => (
  <h1>{name}</h1>
)

const Content = ({parts}) => (
  <>
  {parts.map(parts => <p>{parts.name} {parts.exercises}</p>)}
  <p>total of {parts[0].exercises+parts[1].exercises+parts[2].exercises+parts[3].exercises} exercises</p>
  </>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
