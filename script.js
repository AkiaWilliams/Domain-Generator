window.onload = function() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  for (let i = 0; i < pronoun.length; i++) {
    this.console.log(pronoun[i]);
    for (let j = 0; j < adj.length; j++) {
      this.console.log(adj[j]);
      for (let g = 0; g < noun.length; g++) {
        this.console.log(noun[g]);
        this.console.log(`${pronoun[i]}${adj[j]}${noun[g]}`);
      }
    }
  }
};
