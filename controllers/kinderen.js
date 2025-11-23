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

// bij de controller van de geschenken gaf ik het mooie voorbeeld
// const { sinterklaasGeschenken: geschenken } = require("../databank/data");
// hierdoor moet je niet geschenken.geschenken doen, maar kan je 
// gewoon geschenken gebruiken.
const kinderen = require("../databank/data")


const getAll = (req,res) => {
  // door jou manier van importeren moet je kinderen.kindjes doen --> dit is dubbel
  // geen goeie benaming van variabelen.
  // bij je declaratie had je dan beter 'databank' als naam gebruik.
  // databank.kindjes is beter. 
    res.json(kinderen.kindjes)
}

const addOne = (req,res) => {
    const newKind =
    {
      id: newID(kinderen.kindjes), // goed dat gebruik maakt van de functie die ik reeds maakte
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