import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => (
  <>
  <Header name={course.name} />
  <Content part={course.parts} />
  </>
)

const Header = ({name}) => (
  <h1>{name}</h1>
)

const Content = ({part}) => (
  <>
  <Part display={part[0]} />
  <Part display={part[1]} />
  <Part display={part[2]} />
  <Part display={part[3]} />
  <p>total of {part[0].exercises+part[1].exercises+part[2].exercises+part[3].exercises} exercises</p>
  </>
)

const Part = ({display}) => (
  <p>{display.name} {display.exercises}</p>
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
