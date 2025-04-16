import { generateFiles } from 'fumadocs-openapi';
 
void generateFiles({
  input: ['./scripts/restful.openapi.json'], // the OpenAPI schemas
  output: './content/docs/api-reference/restful',
});

void generateFiles({
  input: ['./scripts/scraper.openapi.json'], // the OpenAPI schemas
  output: './content/docs/api-reference/scraper',
});