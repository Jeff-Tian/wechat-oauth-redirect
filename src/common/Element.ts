export default class Element {
  static create(text: string) {
    let element = document.createElement("div");

    element.innerHTML = text;

    return element;
  }
}
