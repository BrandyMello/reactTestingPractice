import React from 'react'
import  { Link } from 'react-router-dom';
import './image-display.css'

const Creatures = ({ data }) => {
  const displayCreatures = data.map(creature => {
    const { id, image, type } = creature;
    return <Link to={`/${type}/${id}`}><img src={image} alt='' className='app-img' key={id} /></Link>
  });

  return (
    <section>
      <h1>Creatures</h1>
      {displayCreatures}
    </section>
  )
}

export default Creatures;