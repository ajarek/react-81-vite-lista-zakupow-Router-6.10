export const saveStorage = (newData, name) => {
  const localStorageData = localStorage.getItem(name)
  localStorage.setItem(name, JSON.stringify(newData))
}
export const saveStoragePush = (newData, name) => {
  const localStorageDataPush = localStorage.getItem(name)
  let data
  localStorageDataPush === null
    ? (data = [])
    : (data = JSON.parse(localStorageDataPush))
  data.push(newData)
  localStorage.setItem(name, JSON.stringify(newData))
}
export const fetchStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
export const deleteStorage = (key) => {
  return localStorage.removeItem(key)
}
export const getStorage = (key, setTodo) => {
  const newTodo = JSON.parse(localStorage.getItem(key))
  if (newTodo) {
    setTodo(newTodo)
  }
}
