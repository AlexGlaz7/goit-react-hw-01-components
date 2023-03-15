// export let randomColor = Math.floor(Math.random() * 16777215).toString(16);
export function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
