function introduction(name) {
  if (name === "Aki") {
    return `Hi, my name is ${name}.`;
  } else if (name === "Samip") {
    return `Hi, my name is ${name}.`;
  }
}

function introductionWithLanguage(name, language) {
  if (name === "Aki" && language === "Ember.js") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  } else if (name === "Samip" && language === "React") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  if (name === "Gracie") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  } else if (name === "Gracie" && language === "Python") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
}
