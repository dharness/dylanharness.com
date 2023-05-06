import { Project, projectData } from "./projectData";

// Takes an kebab-case-string, and converts it to a Title Case String
function kebabToTitle(str: string) {
  // Split the string into an array of words
  const words = str.split("-");

  // Capitalize the first letter of each word and join them together
  const titleCase = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return titleCase;
}

// Find the project data for a given project name
function getProjectData(projectName: string) {
  const project =
    projectData.find((p) => p.name == projectName) || ({} as Project);
  return project;
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export { kebabToTitle, getProjectData, isMobileDevice };
