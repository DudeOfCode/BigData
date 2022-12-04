# About The BigData App
This is a cost effective decentralized cloud storage app that is meant to store files (images,videos and texts) in a smart contract in such a way that users can have access to them at any time they want without having to get permission from any third party body.It is sort of like a permanent archive for files.(This project was deployed to the polygon mumbai testnet)
# How The App Works
The app has many features but because of limited time we were only able to create the upload and get file path functions. In order to upload, the user has to click on the store data button located on the navigation-bar,the user would have to input the name of the file,the file type and choose the file itself .Once the user clicks on the upload button he/she would be prompted to pay a little amount of matic to store the file,if the user clicks accept the app would capture the file with respect to the connected metamask address. Below the upload section is the "click to preview" stored apps button, if the user clicks on it, it will display the ipfs file path of the stored files the connected account (defaultAccount) added to the smart contract(This was supposed to show the files but the IPFS server is no more public, we were trying to find a work around but time did not permit us to do so).
After the hackathon we may add other features like payment of a specific amount of matic after seven days of free trial, preview of the files stored and interacting with the stored file.

Get the code and try the app out by navigating to the directory of the app,copying the path and pasting it into node.js.Type cd before the pasted path and press enter to have access to the things in the app folder.Run
 
### 'npm install'
### 'npm start'
THis may not be a very good documentation but please try the app out.
# Description
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

If you notice any ipfs-http-client error use the code below in your node.js to install it

### 'npm install --save ipfs-http-client

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
