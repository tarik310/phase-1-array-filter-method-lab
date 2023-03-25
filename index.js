function findMatching(drivers, name){
    return drivers.filter(drvname => name.toLowerCase() === drvname.toLowerCase())
}
function fuzzyMatch(drivers, name){
    return drivers.filter(drvname =>drvname.startsWith(name))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }