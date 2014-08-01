function oldestLivingParent(people) {
  var tempParents = [];
  var tempPeople = [];
  var parents = [];
  var daddy;
  people.reverse();
  people.forEach(function(people){
    if(people.parent && people.age){
      tempParents.push(people.name, people.age);
    }
    if(people.name && people.age){
      tempPeople.push(people.parent);
    }
  });
  for(i=0; i<=tempPeople.length; i++) {
    for(j=0; j<=tempPeople.length; j++){
      if(tempPeople[i]===tempParents[j]) {
        parents.push(tempParents[j]);
        daddy = parents[0];
        return daddy;
      }
    }
  }
}
