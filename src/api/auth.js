import 'whatwg-fetch';

export function loginRequest(form, comp) {
  fetch('/adsf', {
    method: 'POST',
    body: new FormData(form)
  }).then(function (response) {
    if(response.status !== 200) {
      console.log('login request failed : ' + response.status.toString());
    }
    else {
      comp.setState({logined : true});
    }
  }).catch(function (ex) {
    console.error('Exception in loginRequest : ' + ex.toString());
  });
}

export function registerRequest(form, comp) {
  fetch('/qwer', {
    method: 'POST',
    body: new FormData(form)
  }).then(function (response) {
    if(response.status !== 200) {
      console.log('register request failed : ' + response.status.toString());
    }
    else {
      comp.setState({registered : true});
    }
  }).catch(function (ex) {
    console.error('Exception in registerRequest : ' + ex.toString());
  });
}
