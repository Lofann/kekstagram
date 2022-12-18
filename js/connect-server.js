  // eslint-disable-next-line no-unused-vars
const Urls = {
    'GET': 'https://26.javascript.pages.academy/kekstagram/data',
    'POST': 'https://26.javascript.pages.academy/kekstagram'
  };

const setData = (onSuccess, onFail, method, body) => {
    fetch(Urls[method], {
      method: method,
      body
    })
    .then((response) => response.json())
    .then((pictures) => {
        onSuccess(pictures);
    })
    .catch((message) => {
        onFail(message);
    });
};

  export {setData};
