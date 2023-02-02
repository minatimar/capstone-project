export function translateCategory(categoryInEnglish) {
  switch (categoryInEnglish) {
    case "fruits&vegetables":
      return "Obst & Gemüse";

    case "homemade":
      return "Selbstgemacht";

    case "pastry":
      return "Backwaren";

    case "dairy":
      return "Käse, Eier & Molkerei";

    case "frozen":
      return "Tiefkühlkost";

    case "sweet&salty":
      return "Süßes & Salziges";

    case "beverage":
      return "Getränke";

    case "meat&fish":
      return "Fleisch & Fisch";

    default:
      return "Da ist etwas falsch gelaufen...";
  }
}
