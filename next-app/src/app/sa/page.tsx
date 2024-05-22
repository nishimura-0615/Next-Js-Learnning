'use client'

import { useFormState, useFormStatus } from "react-dom";
import { createTask } from "@/actions/sampleActions";
import { useActionState } from "react";
import { error } from "console";


const ServerActionsPage = () => {
  const taskId = 1;
  const createTaskWithTaskId = createTask.bind(null, taskId);
  const initialState = { error: ''}
  const[state,formAction] =useFormState(createTaskWithTaskId,)
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return  (
      <button
        type="submit"
        className="bg-gray-400 ml-2 px-2 disabled:bg-gray-300"
        disabled={pending}
      >
        送信
      </button>
    );
  }

  return (
    <div>
      <form action={formAction}>
        <input type="text" id="name" className='bg-gray-200'/>
        <SubmitButton />
      </form>
      <div>{state.error}</div>
    </div>
  )
}

export default ServerActionsPage;
