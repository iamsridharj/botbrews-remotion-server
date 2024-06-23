import { axiosWrapper } from "../../../utils/axios";

interface UseBrighterSideApi {
  getJsonData: () => any
}

export const useBrighterSideApi = (): UseBrighterSideApi => {
  const getJsonData = async () => {
    const response = await axiosWrapper.get("/brighter-side/get-data");
    return response.data;
  };

  return {
    getJsonData
  }
};