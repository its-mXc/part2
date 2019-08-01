import React from 'react'
import Part from './Part'

const Content = ({parts}) =>{
  const total = parts.reduce((sum, value) => sum + value.exercises, 0)
  return (
    <>
    {parts.map(parts => <Part key={parts.id} name={parts.name} exercises={parts.exercises} />)}
    <p><strong>Total of {total} exercises</strong></p>
    </>
  )
}

export default Content
