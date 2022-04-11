const { exec } = require("child_process");

const app = "treinta-app";
const uikit = "treinta-ui-kit";
const package_uikit = "native-ui-kit";
const mfe = "treinta-app-module-wallet";
const basePath = process.env.PWD;
const executeFolder = basePath.split("/").pop();

const { version } = require(`${basePath}/package.json`);

let cmdExcute;
switch (executeFolder) {
  case uikit:
    try {
      console.log(`command add ${package_uikit} to ${mfe}`);
      cmdExcute = `cd ${basePath} && yalc publish && cd ../${mfe} && yalc add @30SAS/${package_uikit}@${version} --dev`;
      exec(cmdExcute);
      console.log(`command add ${package_uikit} to ${app}`);
      cmdExcute = `cd ../${app} && yalc add @30SAS/${package_uikit}@${version} --dev`;
      exec(cmdExcute);
    } catch (error) {
      console.log(error);
    }
    break;
  case mfe:
    console.log(`command add ${mfe} to ${app}`);
    cmdExcute = `cd ${basePath} && yalc publish && cd ../${app} && yalc add @30SAS/${executeFolder}@${version}`;
    try {
      exec(cmdExcute);
    } catch (error) {
      console.error(error);
    }
    break;
  default:
    console.log(`Is ${app}`);
    break;
}
