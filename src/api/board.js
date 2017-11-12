export function toWrite(comp) {
  comp.setState({writing : true});
}

export function writePost(form, comp) {
  comp.setState({writing : false});
}
