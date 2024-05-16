import React from 'react'

const TaskEditIdPage = ({ params }:{
  params: { id:string }
}) => {
  return <div>{ params.id }</div>;
};

export default TaskEditIdPage;
