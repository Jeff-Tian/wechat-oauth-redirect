require("../common/service-worker");

function component() {
  let element = document.createElement("div");

  element.innerHTML = "跳转中……";
  return element;
}

document.body.appendChild(component());

const query = new URLSearchParams(location.search);
const redirect = query.get("redirect");
if (redirect) {
  location.href = decodeURIComponent(redirect);
}
