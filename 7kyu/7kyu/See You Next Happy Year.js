// Scenario
// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend!

function nextHappyYear(year) {
  let i = year + 1
  while (new Set(String(i)).size < 4) {
    i++;
  }
  return i;
}
