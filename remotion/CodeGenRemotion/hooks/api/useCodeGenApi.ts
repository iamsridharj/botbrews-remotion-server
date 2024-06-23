import { axiosWrapper } from "../../../utils/axios";

interface UseCodeGenApi {
  getJsonData: () => any
}

export const useCodeGenApi = (): UseCodeGenApi => {
  const getJsonData = async () => {
    const response = await axiosWrapper.get("/code-tut/get-data");
    return response.data;
  };

  return {
    getJsonData
  }
};