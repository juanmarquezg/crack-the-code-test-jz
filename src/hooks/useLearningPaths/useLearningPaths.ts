import { useQuery } from "@tanstack/react-query";

import { crackTheCodeApi } from "../../commons/providers";
import { ApiResponse } from "../../commons/interfaces/types";

const getLearningRoutes = async (): Promise<ApiResponse> => {
  const { data } = await crackTheCodeApi.get("/learning-paths");
  return data;
};

export const useLearningPaths = () => {
  const learningRoutesQuery = useQuery(["learningPaths"], getLearningRoutes, {
    staleTime: 1000 * 60 * 60,
  });

  return { learningRoutesQuery };
};
