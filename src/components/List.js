import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    <>
      {listx.map((item) => {
        // console.log(item)
        return <ListItems key={item} valuex={item} />
      })}
    </>
  )
}

export default List;
