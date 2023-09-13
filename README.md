# Mining React

This project is based on React. The source code is under the src fold. I'll give the basic introduction below:

1. api/ --- This is the fold in which provides the api calling functions;
2. common/ --- All the common components which has nothing to do with the business logics are put in it, it also includes common css styles, fonts, icons;;
3. components/ --- Business components are put in it
4. constants/ --- Global vars is set in it
5. layout/ --- Set the layout of the app
6. router/ --- router
7. pages/ --- Main pages are in it
8. App.js --- The home page
9. http.js --- Do some injections in axios, here we do some common error handlings
10. index.js --- Then entry point of the project
11. socket.js --- Websocket connection

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
