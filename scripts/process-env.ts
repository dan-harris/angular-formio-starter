/**
 * script that grabs the current process variables and stores them in a json file
 * (used so that angular can access environment variables post-build)
 */

// get package json
const projectPackage: any = require('../package.json'); // tslint:disable-line:no-require-imports
// jsonfile package (imported as common module)
const jsonfile: any = require('jsonfile'); // tslint:disable-line:no-require-imports

// used process env keys
const USEABLE_PROCESS_KEYS: Array<string> = ['BUILD_BUILDNUMBER'];

// filename (includes path) for output
const FILE_NAME: string = '.env.process.json';

// filter to only include needed env vars (if they exist)
const useableProcessEnvKeys: Array<string> = Object.keys(process.env).filter((key: string) => USEABLE_PROCESS_KEYS.includes(key));
// get package version
const PACKAGE_VERSION: string = projectPackage ? projectPackage.version : '0.0.0-alpha';
// create env object with only required keys
const env: NodeJS.ProcessEnv = { ['PACKAGE_VERSION']: PACKAGE_VERSION };
// add values to env object
useableProcessEnvKeys.map((key: string) => {
  env[key] = process.env[key];
});

console.info(''); // tslint:disable-line:no-console
console.info(`Writing ${Object.keys(env).length} process environment variables to ${FILE_NAME}`); // tslint:disable-line:no-console
console.info(''); // tslint:disable-line:no-console

// write to file
jsonfile.writeFileSync(FILE_NAME, env, { spaces: 2, EOL: '\r\n' });
