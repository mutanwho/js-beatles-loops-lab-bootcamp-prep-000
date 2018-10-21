function theBeatlesPlay(["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"])
 console.log(theBeatlesPlay(["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]))
 function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!"
        i++
    }
    return facts
 }