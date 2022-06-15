const shuffleOptions = (correct, incorrect) => {
    const length = incorrect.length + 1;
    const correctIndex = Math.floor(Math.random() * length);
    shuffleList(incorrect);
    const result = [];
    for (let i = 0; i < length; i++) {
      if (i === correctIndex) {
        result.push(correct);
      } else {
        result.push(incorrect.pop());
      }
    }
    return [result, correctIndex];
  };

  const shuffleList = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  };
  
  export default shuffleOptions;