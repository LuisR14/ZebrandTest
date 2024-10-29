import request from '@app/helpers/request';
import {Response} from '@app/types/response';

const getUserData = async (
  pageParam: number,
  search: string,
): Promise<Response|[]> => {
  try {
    const response = await request.get(`/users?q=${search}&page=${pageParam}&per_page=25`);
    const {data} = response;
    return data;
  } catch (error) {
    return [];
  }
};
export default getUserData;
