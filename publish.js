const { exec } = require("child_process");
let args = process.argv.slice(1);

const app = "treinta-app";
const uikit = "treinta-ui-kit";
const package_uikit = "native-ui-kit";
const mfe = "treinta-app-module-wallet";
const basePath = process.env.PWD;
const executeFolder = basePath.split("/").pop();

const { version } = require(`${basePath}/package.json`);

console.log({ executeFolder });
console.log({ basePath });
console.log({ args });
console.log({ packageVersion: version });

let cmdExcute;
switch (executeFolder) {
  case uikit:
    console.log("command add to mfe");
    cmdExcute = `cd ${basePath} && yalc publish && cd ../${mfe} && yalc add @30SAS/${package_uikit}@${version} --dev`;
    try {
      exec(cmdExcute);
    } catch (error) {
      console.log(error);
    }
    break;
  case mfe:
    console.log("command add to treinta-app");
    cmdExcute = `cd ${basePath} && yalc publish && cd ../${app} && yalc add @30SAS/${executeFolder}@${version}`;
    try {
      exec(cmdExcute);
    } catch (error) {
      console.error(error);
    }
    break;
  default:
    break;
}
