// save item in localStorage
const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

// get an item from localStorage with its key
const getItem = (key) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};

// remove specific item with its key from localStorage
const removeItem = (key) => {
  if (getItem(key) === false) return false;
  localStorage.removeItem(key);
};

// cleare all localStorage of this site
const clearStorage = () => {
  localStorage.clear();
};
const getItemGeneric = (key) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};
const setItemGeneric = (key, value) => {
  localStorage.setItem(key, value);
};

const getUserInformation = (key) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};
const setUserInformation = (key, value) => {
  localStorage.setItem(key, value);
};
export {
  setItem,
  getUserInformation,
  setUserInformation,
  getItem,
  removeItem,
  clearStorage,
  getItemGeneric,
  setItemGeneric,
};
