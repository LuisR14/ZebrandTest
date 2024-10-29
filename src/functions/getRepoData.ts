import request from '@app/helpers/request';
import {Response} from '@app/types/response';

const getRepoData = async (
  pageParam: number,
  search: string,
): Promise<Response | []> => {
  try {
    console.log('pageParam', pageParam, 'search', search);
    const response = await request.get(
      `/repositories?q=${search}&page=${pageParam}&per_page=25`,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
};
export default getRepoData;
