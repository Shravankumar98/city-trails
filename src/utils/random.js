export function getRandomItems(arr, count = 4) {
  return [...arr]
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
}
