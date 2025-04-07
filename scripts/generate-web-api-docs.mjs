import { generateFiles } from 'fumadocs-openapi';
 
void generateFiles({
  input: ['./scripts/web-api.json'], // the OpenAPI schemas
  output: './content/docs/api-reference',
});