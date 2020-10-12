// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles

(() => {
  // your code here
  let articlesArray = ["articleOne", "articleTwo"];
  document.getElementById("run").addEventListener("click", () => {
    function getPosts(callback) {
      alert(`Open the console to see callback`);
      callback();
    }

    getPosts(function (null, ariclesArray) {
      return articlesArray;
    });
  });
})();
