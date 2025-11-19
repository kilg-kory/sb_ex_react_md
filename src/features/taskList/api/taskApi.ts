import type { ITask } from "entities/task";
import type { TResponseTodos } from "./types";
import { baseApi } from "shared/api/baseApi";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => "/todos",
      transformResponse: (response: TResponseTodos) =>
        response.todos.map((rt) => ({
          id: rt.id.toString(),
          title: rt.todo,
          completed: rt.completed,
        })),
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;
