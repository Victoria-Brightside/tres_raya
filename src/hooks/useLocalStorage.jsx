

export function useLocalStorage (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  return value
}