import axios from 'axios';
import {API_url} from '@env';

export const get = async (setData, screenStat) => {
  await axios
    .get(API_url)
    .then(req => {
      setData(req.data);
      // screenStat(true);
    })
    .catch(err => {
      console.log(err);
    });
};