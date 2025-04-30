import { useMutation } from "@tanstack/react-query";
import { TaskDataTypes } from "../@types/tasks";
import { API } from "../configs/api";
import { toast } from "react-toastify";

async function updateTask(data: TaskDataTypes) {
  const { id, ...rest } = data;
  return await API.put(`task/${id}`, rest);
}

export const useTaskUpdate = () => {
  const mutate = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Tarefa atualizada com sucesso");
    },
    onError: () => {
      toast.dismiss();
      toast.error("Erro ao atualizar tarefa");
    },
  });

  return mutate;
};
