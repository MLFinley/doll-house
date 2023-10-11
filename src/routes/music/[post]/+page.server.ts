import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export const load = async ({ params }) => {
  const { post } = params;
    // The path to your markdown files might be different. Adjust accordingly.
    const filePath = path.join('./static/music', `${post}.md`);
    console.log(filePath);

    if (fs.existsSync(filePath)) {
    console.log('exists')
      const fileContents = fs.readFileSync(filePath, 'utf8');
      console.log(fileContents);
      const html = marked(fileContents);

      // The title is the name of the markdown file.
      const title = post;

      return {
        html, // this is the HTML string to be rendered
        title, // this is the title of the page
      };
    }
};
