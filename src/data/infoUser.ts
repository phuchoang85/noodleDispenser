import database from '@react-native-firebase/database';
import {noodle} from '@Src/redux/selector/CodeSlice';

export const getInfoUser = async (code: string) => {
  try {
    // Tìm kiếm user theo trường 'code'
    const snapshot = await database()
      .ref('/user')
      .orderByChild('code')
      .equalTo(code)
      .once('value');
      return snapshot.val()[1] ? snapshot.val()[1] : snapshot.val()[Object.keys(snapshot.val())[0]];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const udpateValue = async (code: string, newNoodlesData: noodle) => {
  try {
    const getdata = await database()
      .ref('/user')
      .orderByChild('code')
      .equalTo(code)
      .once('value', data => {
        if (data.exists()) {
          const record = data.val();
          const recordId = Object.keys(record)[1] ? Object.keys(record)[1] : Object.keys(record)[0];
          console.log(Object.keys(record))
          database()
            .ref(`user/${recordId}`)
            .update({noodles: newNoodlesData})
        } else {
          console.log('No record found with code:', code);
        }
      });
    return;
  } catch (error) {
    console.log(error);
  }
};
