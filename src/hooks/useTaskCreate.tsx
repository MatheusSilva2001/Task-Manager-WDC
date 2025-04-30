import { useMutation } from "@tanstack/react-query";
import { TaskDataTypes } from "../@types/tasks";
import { API } from "../configs/api";
import { toast } from "react-toastify";

async function CreateTask(data: TaskDataTypes) {
    return await API.post("/task", data);
}

export const useTaskCreate = () => {
    const mutate = useMutation({
        mutationFn: CreateTask,
        onSuccess: () => {
            toast.dismiss();
            toast.success("Tarefa criada com sucesso!");
        },

        onError: () => {
            toast.dismiss();
            toast.success("Erro ao criar tarefa");
        },
    });

    return mutate;
}