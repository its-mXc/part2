import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
  </>
)

const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) =>{
  const total = parts.reduce((sum, value) => sum + value.exercises, 0)
  return (
    <>
    {parts.map(parts => <Part key={parts.id} name={parts.name} exercises={parts.exercises} />)}
    <p><strong>Total of {total} exercises</strong></p>
    </>
  )
}

const Part = ({name,exercises}) => (
  <p>{name} {exercises}</p>
)



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
