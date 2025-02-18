function validProposal(person1, person2) {
  if (
    typeof person1 !== "object" ||
    typeof person2 !== "object" ||
    Array.isArray(person1) ||
    Array.isArray(person2)
  ) {
    return "Invalid";
  } 
  if (
    person1.gender !== person2.gender &&
    Math.abs(person1.age - person2.age) <= 7
  ) {
    return true;
  }
  return false;
}

