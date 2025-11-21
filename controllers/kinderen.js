/**
 * zorg ervoor dat je onderstaande zaken kan verwezelijken met deze API:
 *
 * 1. Van 1 kind alle info verkrijgen.
 * 2. Van 1 kind alle info + de id en naam van de geschenkjes
 * 3. Kinderen toevoegen aan te lijst
 * 4. Geschenken kan toevoegen aan het lijstje van een kind
 * 5. Geschenken kan wissen van de lijst van een kind
 *
 * succes!!
 */

const kinderen = require("../databank/data")
const getAll = (req,res) => {
    res.json(kinderen.kindjes)
}

const addOne = (req,res) => {
    const newKind =
    {
      id: newID(kinderen.kindjes),
      voornaam: req.body.voornaam,
      naam: req.body.naam,
      geschenkId: req.body.geschenkId
    }
    kinderen.kindjes.push(newKind)
    res.json(newKind)
}
const newID = (lijstMetID) => {
  lijstMetID.forEach((item) => {
    maxID = 0;
    item.id > maxID ? (maxID = item.id) : (maxID = maxID);
  });
  return maxID + 1;
};

module.exports = {
    getAll,
}