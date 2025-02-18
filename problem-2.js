function validContact(contact) {
    if( typeof contact !== "string"){
        return "Invalid"
    }
  if (contact.length <= 11 && contact.startsWith("01") && contact !== " ") {
    return true;
  }
  return false;
}

