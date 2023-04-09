# React Firebase Authentication and Authorization

This is a sample React application that demonstrates how to add user authentication and authorization using Firebase. It includes a login and registration form, a protected home page, and custom roles for certain users.

Please note that this tech demo will be focused on the firebase authentication library, and will not run you through how to set up a login and registration page and associated styling due to time constraints, you can copy the files from this project, or find an alternative online!

## Technologies Used

- React
- Firebase Authentication
- Firebase Firestore
- React Router
- Material-UI
- SCSS

## Getting Started

1. Clone the repository.

git clone https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-mlu415

2. Install the dependencies.

cd client

npm install

3. Setup the Email/Password and google sign in.

image.png

image.png

4. Create a Firebase project and add a web app to it.

https://firebase.google.com/

5. Copy the Firebase configuration object from the Firebase console and paste in the /firebase/firebase.ts.

If you are having trouble setting this up, feel free to reach out on: mlu415@aucklanduni.ac.nz, ill be more than happy to help!

apiKey: "YOUR API KEY",
authDomain: "YOUR AUTH DOMAIN",
projectId: "YOUR PROJECT ID",
storageBucket: "YOUR STORAGE BUCKET",
messagingSenderId: "YOUR MESSAGING SENDER ID",
appId: "YOUR APP ID",
measurementId: "YOUR MEASUREMENT ID",

7. Run the application.

On Client Side:
npm run dev

On Server Side:
No Server side required to run. (Unnecessary code from Video Demo has been omitted for simplicity to follow)

The application will be available at http://localhost:5173.

8. Create a Cloud Firestore

image.png

Add a firebase collection called "users" with role of string type

image.png

9. Update User to Admin

After a user has signed up a new document will appear in the user collection, Edit this so instead of "user", it is "admin" (make sure to update the right doc!)

Relogin and the new admin user and you should be able to see the "Admin only section"

image.png

10. Extra

You can set up a seperate set user role component and backend so that you can change the user roles on the app. However due to time restraints in this tutorial it has not been included in this project

## Features

- Login and registration forms.
- Firebase email/password authentication.
- Firebase Google authentication.
- Protected home page that can only be accessed by authenticated users.
- Custom roles for certain users.
