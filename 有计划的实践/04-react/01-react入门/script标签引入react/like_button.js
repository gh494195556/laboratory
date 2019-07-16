function e() {
  return <h2>hello world.</h2>;
}
const LikeButton = e;

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(LikeButton, domContainer);
