// Takes an kebab-case-string, and converts it to a Title Case String
function kebabToTitle(str: string) {
    // Split the string into an array of words
    const words = str.split('-');
  
    // Capitalize the first letter of each word and join them together
    const titleCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    return titleCase;
  }
export { kebabToTitle }