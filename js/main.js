import {uploadForm} from './upload-form.js';
import {setData} from './connect-server.js';
import {onRecieveSuccess, showUnloadingErrorMessage} from './upload-data.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
  },
  'GET');

uploadForm();
