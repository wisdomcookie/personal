import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'project-data');

export async function getSortedProjectData() {

  // Get file names from /project-data
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map(async (fileName) => {
    // id is the file name without ".md"
    const id = fileName.replace(/\.md$/, '');

    // Read file into string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    // Parse metadata
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    const projectEntry: ProjectEntry = {
      id,
      name: matterResult.data.name,
      date: matterResult.data.date,
      type: matterResult.data.type,
      link: matterResult.data.link,
      status: matterResult.data.status,
      description: contentHtml,
    };

    return projectEntry;
  });

  const allProjects = await Promise.all(allProjectsData);

  return allProjects.sort((a, b) => a.date < b.date ? 1: -1);

}

