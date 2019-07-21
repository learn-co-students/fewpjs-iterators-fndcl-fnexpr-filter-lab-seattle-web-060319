// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(e => e.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(e => e.toUpperCase().indexOf(string.toUpperCase()) === 0 );
}

function matchName(drivers, string) {
  return drivers.filter(e => e.name.toUpperCase() === string.toUpperCase());
}