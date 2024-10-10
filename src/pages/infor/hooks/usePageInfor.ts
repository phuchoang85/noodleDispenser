import {getInfoUser, udpateValue} from '@Src/data/infoUser';
import {noodle, save} from '@Src/redux/selector/CodeSlice';
import {useAppDispatch} from '@Src/redux/useRedux';

const usePageInfor = () => {
  const dispatch = useAppDispatch();
  const getInfo = async (code: string) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await getInfoUser(code);
        if (response) {
          dispatch(save(response));
          resolve(response);
        } else {
          reject(false);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const updateInfo = (code: string, noodles: noodle) => {
    return new Promise(async (resolve, reject) => {
      try {
        await udpateValue(code, noodles);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {getInfo, updateInfo};
};

export default usePageInfor;
