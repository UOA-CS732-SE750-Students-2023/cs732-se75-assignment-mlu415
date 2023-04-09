# React Firebase Authentication and Authorization

This is a sample React application that demonstrates how to add user authentication and authorization using Firebase. It includes a login and registration form, a protected home page, and custom roles for certain users.

Please note that this tech demo will be focused on the firebase authentication library, and will not run you through how to set up a login and registration page and associated styling due to time constraints, you can copy the files from this project, or find an alternative online!

Heres a video to walk you through the project:
https://www.youtube.com/watch?v=7fg2KkPAWu0 

## Technologies Used

- React
- Firebase Authentication
- Firebase Firestore
- React Router
- Material-UI
- SCSS

## Getting Started

### 1. Clone the repository.

git clone https://github.com/UOA-CS732-SE750-Students-2023/cs732-se75-assignment-mlu415

### 2. Install the dependencies.

```
cd client
npm install
```

### 3. Setup the Email/Password and google sign in.

<img width="703" alt="image" src="https://user-images.githubusercontent.com/61758778/230800179-81b2eef8-2dab-4b0a-8ddd-e0e1407fff7b.png">

### 4. Create a Firebase project and add a web app to it.

https://firebase.google.com/

### 5. Copy the Firebase configuration object from the Firebase console and paste in the /firebase/firebase.ts.

If you are having trouble setting this up, feel free to reach out to: mlu415@aucklanduni.ac.nz, Ill be more than happy to help! :) 

```
apiKey: "YOUR API KEY",
authDomain: "YOUR AUTH DOMAIN",
projectId: "YOUR PROJECT ID",
storageBucket: "YOUR STORAGE BUCKET",
messagingSenderId: "YOUR MESSAGING SENDER ID",
appId: "YOUR APP ID",
measurementId: "YOUR MEASUREMENT ID",
```

### 6. Run the application.

On Client Side:
```
npm run dev
```
On Server Side:
No Server side required to run. (Unnecessary code from Video Demo has been omitted for simplicity to follow)

The application will be available at http://localhost:5173.

### 7. Create a Cloud Firestore

<img width="747" alt="image" src="https://user-images.githubusercontent.com/61758778/230800161-5482158b-7bb0-4507-8712-f62234f49632.png">

Add a firebase collection called "users" with role of string type

<img width="504" alt="image" src="https://user-images.githubusercontent.com/61758778/230800156-e52b7975-6685-4794-bf55-a5869a8654fc.png">

### 8. Update User to Admin

After a user has signed up a new document will appear in the user collection, Edit this so instead of "user", it is "admin" (make sure to update the right doc!)

![image](https://user-images.githubusercontent.com/61758778/230800412-dbe56a85-c406-40bb-85cf-1dab7447284b.png)

Relogin and the new admin user and you should be able to see the "Admin only section"

<img width="424" alt="image" src="https://user-images.githubusercontent.com/61758778/230800143-38f1fb8c-b6c5-4854-afcc-3c6b6d5ebb3d.png">

### 9. Extra

You can set up a seperate set user role component and backend so that you can change the user roles on the app. However due to time restraints in this tutorial it has not been included in this project

## Features

- Login and registration forms.
- Firebase email/password authentication.
- Firebase Google authentication.
- Protected home page that can only be accessed by authenticated users.
- Custom roles for certain users.
