'use server';

interface FormState {
  error: string;
}

export const createTask = async (taskId: number, state:FormState, formData: FormData) => {
  console.log('タスクを作成しました');
  console.log(formData.get("name"));
  console.log(taskId);
  state.error = 'エラーが発生しました'
  return state;
}
