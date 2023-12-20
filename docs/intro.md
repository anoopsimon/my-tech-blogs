---
sidebar_position: 1
---

# About me

```js
function aboutMe() {
  const anoop = {
    name: "Anoop Simon",
    experience: "13+ years",
    expertiseAreas: ["Test Automation", "Cloud Technologies", "API Development", "Web App Development"],
    languages: ["JavaScript", ".NET Core", "Java", "Python", "C", "Shell", "Powershell", "Groovy"],
    favoriteWebFramework: "React JS",
    cloud: ["AWS", "Azure"],
    ci: ["Jenkins", "Harness", "Azure DevOps", "Docker"],
    automationFrameworksAndLibraries: ["Selenium", "RestAssured", "Cypress", "Playwright", "Appium"],
    testFrameworksDevelopedFor: ["Web", "REST", "SOAP", "Mobile", "Mainframe", "Windows Desktop"],
    testingFrameworks: ["JUnit", "TestNG", "SpecFlow", "Cucumber", "NUnit", "XUnit"],
    other: ["YAML", "JSON", "XML"],
    introduction: function() {
      console.log(`Hello! I'm ${this.name}, with over ${this.experience} in the tech world.`);
      console.log(`My expertise spans areas like ${this.expertiseAreas.join(", ")}, with a rich palette of languages such as ${this.languages.join(", ")}.`);
      console.log(`I have a particular fondness for ${this.favoriteWebFramework} in web development.`);
      console.log(`In the cloud domain, I work with platforms like ${this.cloud.join(" and ")}, and I'm proficient in CI tools like ${this.ci.join(", ")}.`);
      console.log(`My toolkit includes automation frameworks and libraries like ${this.automationFrameworksAndLibraries.join(", ")},`);
      console.log(`and I've developed tests for varied frameworks including ${this.testFrameworksDevelopedFor.join(", ")}.`);
      console.log(`I'm also well-versed in testing frameworks such as ${this.testingFrameworks.join(", ")} and other technologies like ${this.other.join(", ")}.`);
      console.log("Join me in exploring and mastering the dynamic world of test automation and beyond!");
    }
  };

  anoop.introduction();
}

aboutMe();


```
