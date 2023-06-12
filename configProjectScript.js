const { error, log } = require('console');
const fs = require('fs');
const os = require('os');

console.log('Configurating Project');
/* config local.properties */
const username = os.userInfo().username;
let content;
switch (process.platform) {
  case 'darwin':
    content = String.raw`sdk.dir = /Users/${username}/Library/Android/sdk`;
    break;
  case 'linux':
    content = String.raw`sdk.dir = /home/${username}/Android/Sdk`;
    break;
  default:
    content = String.raw`sdk.dir = C:\\Users\\${username}\\AppData\\Local\\Android\\Sdk`;
    break;
}
const path = './android/local.properties';
/* update file */
fs.writeFile(path, content, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`${path} file has been updated`);
});


const pathModule = './node_modules/react-native-camera/src/RNCamera.js'
const pathModuleI = './node_modules/react-native-check-box/index.js'

fs.readFile(pathModule, 'utf-8', (error, data) => {
  if (error) throw error
  const lines = data.split('\n')
  //delete import ViewPropTypes from react-native
  lines.splice(7, 1)
  //insert new one from deprecated 
  lines.splice(15, 0, "import { ViewPropTypes } from 'deprecated-react-native-prop-types';")

  const content = lines.join('\n')
  fs.writeFile(pathModule, content, (error) => {
    if (error) throw error
    console.log(`${pathModule} file has been updated`);
  })

})


fs.readFile(pathModuleI, 'utf-8', (error, data) => {
  if (error) throw error
  const lines = data.split('\n')
  //delete import ViewPropTypes from react-native
  lines.splice(16, 1)
  //insert new one from deprecated 
  lines.splice(19, 0, "import { ViewPropTypes as RNViewPropTypes}  from 'deprecated-react-native-prop-types';")

  const content = lines.join('\n')
  fs.writeFile(pathModuleI, content, (error) => {
    if (error) throw error
    console.log(`${pathModuleI} file has been updated`);
  })

})