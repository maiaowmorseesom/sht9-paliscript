/**
 * JavaScript Functions Showcase
 * A comprehensive collection of JavaScript function examples demonstrating various concepts
 */

// ---------------------------------------------------------------------------
// Basic Function Declarations
// ---------------------------------------------------------------------------

// Standard function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const sayGoodbye = function(name) {
  return `Goodbye, ${name}!`;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with multiline body
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("I execute immediately!");
})();

// ---------------------------------------------------------------------------
// Advanced Function Patterns
// ---------------------------------------------------------------------------

// Function with default parameters
function createUser(name, age = 30, role = "user") {
  return {
    name,
    age,
    role
  };
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Function with destructuring parameters
function processUser({ name, email, id }) {
  return `Processing user ${name} (${id}) with email: ${email}`;
}

// Curried function
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); // Returns a function that multiplies by 5

// Function composition
const compose = (f, g) => (x) => f(g(x));
const double = x => x * 2;
const square = x => x * x;
const doubleSquare = compose(double, square);

// Memoization helper
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Expensive function that benefits from memoization
const memoizedFibonacci = memoize(function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

// ---------------------------------------------------------------------------
// Higher-Order Functions
// ---------------------------------------------------------------------------

// Function that takes another function as argument
function executeAndLog(fn, ...args) {
  console.log(`Executing function with args: ${args}`);
  const result = fn(...args);
  console.log(`Result: ${result}`);
  return result;
}

// Function that returns a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

// Function throttling
function throttle(fn, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args);
    }
  };
}

// Function debouncing
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// ---------------------------------------------------------------------------
// Async Functions
// ---------------------------------------------------------------------------

// Basic Promise
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    // Simulate a fetch request
    setTimeout(() => {
      if (url.includes('error')) {
        reject(new Error('Failed to fetch data'));
      } else {
        resolve({ data: 'Some data', url });
      }
    }, 1000);
  });
}

// Async/await function
async function fetchUserData(userId) {
  try {
    const response = await fetchDataPromise(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

// Promise.all implementation
async function fetchMultipleUsers(userIds) {
  try {
    const promises = userIds.map(id => fetchUserData(id));
    return await Promise.all(promises);
  } catch (error) {
    console.error('Error fetching multiple users:', error);
    return [];
  }
}

// Custom retry mechanism for async functions
async function retryOperation(operation, maxAttempts = 3, delay = 1000) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.log(`Attempt ${attempt} failed. Retrying...`);
      lastError = error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error(`Operation failed after ${maxAttempts} attempts: ${lastError.message}`);
}

// ---------------------------------------------------------------------------
// Generators and Iterators
// ---------------------------------------------------------------------------

// Simple generator function
function* countUpTo(max) {
  let count = 0;
  while (count < max) {
    yield count++;
  }
}

// Generator for infinite sequence
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

// Async generator
async function* asyncGenerator() {
  for (let i = 0; i < 5; i++) {
    await new Promise(resolve => setTimeout(resolve, 100));
    yield i;
  }
}

// Generator for pagination
function* paginate(array, pageSize = 10) {
  const totalPages = Math.ceil(array.length / pageSize);
  for (let page = 0; page < totalPages; page++) {
    const start = page * pageSize;
    yield array.slice(start, start + pageSize);
  }
}

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

// Deep clone an object
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const cloned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

// Format a date string
function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

// Get URL parameters as an object
function getUrlParams(url = window.location.href) {
  const params = {};
  const queryString = url.split('?')[1];
  if (!queryString) return params;

  queryString.split('&').forEach(param => {
    const [key, value] = param.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
  });

  return params;
}

// Escape HTML to prevent XSS
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Generate random string
function randomString(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// ---------------------------------------------------------------------------
// DOM Manipulation Functions
// ---------------------------------------------------------------------------

// Create and append an element with attributes and content
function createElement(tag, attributes = {}, content = '') {
  const element = document.createElement(tag);

  for (const [attr, value] of Object.entries(attributes)) {
    if (attr.startsWith('on') && typeof value === 'function') {
      element.addEventListener(attr.substring(2).toLowerCase(), value);
    } else {
      element.setAttribute(attr, value);
    }
  }

  if (content) {
    element.textContent = content;
  }

  return element;
}

// Add event delegation to a parent element
function delegateEvent(parent, eventType, selector, handler) {
  parent.addEventListener(eventType, event => {
    const targetElement = event.target.closest(selector);
    if (targetElement && parent.contains(targetElement)) {
      handler(event, targetElement);
    }
  });
}

// ---------------------------------------------------------------------------
// Data Processing Functions
// ---------------------------------------------------------------------------

// Group array of objects by a key
function groupBy(array, key) {
  return array.reduce((grouped, item) => {
    const value = typeof key === 'function' ? key(item) : item[key];
    grouped[value] = grouped[value] || [];
    grouped[value].push(item);
    return grouped;
  }, {});
}

// Chunk array into smaller arrays
function chunk(array, size) {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, index) => array.slice(index * size, (index + 1) * size)
  );
}

// Filter unique values from array
function uniqueBy(array, key) {
  const seen = new Set();
  return array.filter(item => {
    const value = typeof key === 'function' ? key(item) : item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

// Flatten nested arrays
function flatten(array, depth = Infinity) {
  return depth > 0
    ? array.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val),
        []
      )
    : array.slice();
}

// Sort objects by multiple properties
function multiSort(array, ...sorters) {
  return [...array].sort((a, b) => {
    for (const sorter of sorters) {
      const { key, direction = 'asc' } = typeof sorter === 'string'
        ? { key: sorter }
        : sorter;

      let valueA = typeof key === 'function' ? key(a) : a[key];
      let valueB = typeof key === 'function' ? key(b) : b[key];

      // Handle string comparisons
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        const result = valueA.localeCompare(valueB);
        if (result !== 0) return direction === 'asc' ? result : -result;
      }
      // Handle number comparisons
      else if (valueA !== valueB) {
        return direction === 'asc' ? valueA - valueB : valueB - valueA;
      }
    }
    return 0;
  });
}

// Export all functions for use in other files
export {
  // Basic functions
  greet,
  sayGoodbye,
  multiply,
  calculateArea,

  // Advanced patterns
  createUser,
  sum,
  processUser,
  curriedMultiply,
  compose,
  double,
  square,
  doubleSquare,
  memoize,
  memoizedFibonacci,

  // Higher-order functions
  executeAndLog,
  createMultiplier,
  throttle,
  debounce,

  // Async functions
  fetchDataPromise,
  fetchUserData,
  fetchMultipleUsers,
  retryOperation,

  // Generators
  countUpTo,
  fibonacci,
  asyncGenerator,
  paginate,

  // Utility functions
  deepClone,
  formatDate,
  getUrlParams,
  escapeHtml,
  randomString,

  // DOM manipulation
  createElement,
  delegateEvent,

  // Data processing
  groupBy,
  chunk,
  uniqueBy,
  flatten,
  multiSort
};