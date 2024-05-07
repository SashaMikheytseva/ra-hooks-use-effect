import React from 'react'

export const ListItem = ({item, selected, onClick}) => {
  const className = selected ? 'list-item selected' : 'list-item';
  return (
    <div className={className} onClick={onClick}>
        <span className='name-item'>{item.name}</span>
    </div>
  )
}
