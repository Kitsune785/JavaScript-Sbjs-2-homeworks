function cachingDecoratorNew(func) {
  let cache = [];  
    function wrapper(...args) {
      const hash = args.join(',');
      let idx = cache.findIndex((item) => item.hash == hash);
      if (idx !== -1) {
        console.log("Из кэша: " + cache[idx].result);
        return "Из кэша: " + cache[idx].result;
      }
  
      let result = func(...args);
      cache.push({hash, result});
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
    return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timer = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

    function wrapper(...args) {

      if (timer === null) {
        func(...args);
        wrapper.count += 1;
        timer = setTimeout(() => {
          func(...args);
          wrapper.count += 1;
        }, delay);
      } else {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          func(...args);
          wrapper.count += 1;
        }, delay);
      }
      wrapper.allCount += 1;  
    }
    return wrapper; 
    }