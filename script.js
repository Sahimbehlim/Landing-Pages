const projectsWrapper = document.getElementById("projects-wrapper");

const sortedProjects = projects.sort((a, b) => a.name.localeCompare(b.name));

const projectHTML = sortedProjects
  .map(
    (project, index) => `
    <a id="${index}" href="${project.path}" target="_blank">
        <div
        class="w-full h-[500px] bg-[url('${project.imgURL}')] bg-cover bg-no-repeat bg-top transition-all ease-linear duration-1000 rounded-md overflow-hidden hover:bg-bottom"
        ></div>
    </a>`
  )
  .join("");

projectsWrapper.innerHTML = projectHTML;
