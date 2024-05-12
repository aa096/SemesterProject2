export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  export function load(key) {
    return JSON.parse(localStorage.getItem(key));
  }
//     try {
//       const value = localStorage.getItem(key);
//       return JSON.parse(value);
//     } catch {
//       return null;
//     }
//   }
  
  export function remove(key) {
    localStorage.removeItem(key);
  }
  