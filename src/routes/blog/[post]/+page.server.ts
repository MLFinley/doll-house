import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export const load = async ({ params }) => {
  const { post } = params;
    // The path to your markdown files might be different. Adjust accordingly.
    const filePath = path.join('./static', `${post}.md`);
    console.log(filePath);

    if (fs.existsSync(filePath)) {
    console.log('exists')
      const fileContents = fs.readFileSync(filePath, 'utf8');
      console.log(fileContents);
      const html = marked(fileContents);

      return {
        html,
      };
    }
};
