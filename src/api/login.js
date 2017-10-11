import 'whatwg-fetch';

export function loginRequest(form, comp) {
  fetch('/adsf', {
    method: 'POST',
    body: new FormData(form)
  }).then(function (response) {
    if(response.status !== 200) {
      console.log('DEBUG: login request failed : ' + response.status.toString());
    }
    else {
      console.log('DEBUG: login success');
      comp.setState({redirect : true});
    }
  }).catch(function (ex) {
    console.log('exception' + ex.toString());
  });
}
