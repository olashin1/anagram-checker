document.addEventListener("DOMContentLoaded", (event) => {
  const checkBtn = document.querySelector("#check-btn");

  checkBtn.addEventListener("click", () => {
    const str1 = document.querySelector("#word1").value;
    const str2 = document.querySelector("#word2").value;
    const result = document.querySelector("#result");

    if (!str1 || !str2) {
      alert("Enter both words!");
      return;
    }
    if (checkAnagram(str1, str2)) {
      result.textContent = "They are Anagrams!";
      return;
    } else {
      result.textContent = "Not Anagrams!";
    }
  });

  function checkAnagram(str1, str2) {
    if (str1.length != str2.length) {
      result.textContent = "Not Anagrams!";
      return;
    }

    let count1 = countCharOccurences(str1);
    let count2 = countCharOccurences(str2);

    // iterate through and check if each count is equal

    for (let char in count1) {
      if (count1[char] !== count2[char]) {
        return false;
      }
    }
    return true;
  }

  function countCharOccurences(str) {
    // using a hash map technique
    const charTracker = {};

    for (const char of str) {
      // checks if the character exists, if its not it returns undefined and then is
      // initialized with zero, or if it does then it's incremented by one
      charTracker[char] = charTracker[char] ? charTracker[char] + 1 : 1;
    }

    return charTracker;
  }
});
