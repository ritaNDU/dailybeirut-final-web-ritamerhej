# Daily Beirut - Web Version

## Testing Account

### email:

Pay attention to the case. The email input is case sensitive.

rita@test.com

### Password:

1234567890

## Description

Daily Beirut is a Digital Newspaper. It is available as an application to install on your phone, or as a website you can access using any browser you have available.

This repository provides the website version of Daily Beirut.
The native mobile application is available at this [repository](https://github.com/ritaNDU/beiruttimes-final-ritamerhej).

Tokens are stored in localstorage, and for security reasons they are encrypted. So, you will stay logged in as long as localstorage has not been cleared. Therefore, make sure that your browser does not clear data stored in it automatically, to have this feature enabled.

To start reading news on Daily Beirut, you have to create an account, login, and start reading all the latest news.

Or, you can use the provided testing account.

## How to run the code

1. Clone the repository using the following command:
   `git clone https://github.com/ritaNDU/dailybeirut-final-web-ritamerhej.git`
2. Inside the cloned repository run either of the following commands:
   `yarn` or `npm install`
3. To start the server, run either of these commands:
   `yarn dev` or `npm run dev`

## How I Got Organized

I drew a plan for my app on pen and paper. I then figured out how the data should flow in the app, and what data was needed and what was its architecture. As the deadline for the project changed, I had to adapt my requirements.

I first implemented the mobile app, then I reused all the code that could be reused in this version.

I implemented all the core requirements, one at a time.

Regarding other features, I will be implementing them on my free time, for fun.

## Challenges Faced

### Design

Still an ongoing issue. So I went with the simplest design I found, that works.

I showed the design to my familly and to friends and got good reviews.

### Authentication

I had to learn how to use interceptors. At the end, it turned out to be pretty easy.

## Folder Structure

The code is all located in the src/ folder.

### The src/ folder:

It is divided into:

### The assets/ folder:

It's where all icons and illustrations in general are stored.

### The components/ folder:

It is divided into:

1. **atoms/** which is where the smallest pieces of components like buttons are implemented.
2. **molecules/** which is where the atoms are used to create the structures that need to be used in the interface, like card components for example that specify how a single card should be rendered.
3. **organisms/** is where molecules are used to create features for the app.
4. **templates/** is where all templates are found.

### The hooks/ folder:

This is where all custom hooks are stored.

### The features/ folder:

This is where all pages are implemented.

### The store/ folder:

This is where the redux store is implemented.

### The data/ folder:

It contains data, and interfaces to structure data objects.

### The navigation/ folder:

This is where navigation is implemented.

### The utils/ folder:

This is where some utility functions are implemented.

### The service/ folder:

All api functions are implemented here, as well as interceptors.

## Attribution

The background image used for the login and signup screens is made by [freepik](https://www.freepik.com/free-photo/top-view-newspaper-pieces-assortment_23994213.htm#query=newspaper%20background&position=1&from_view=keyword&track=ais&uuid=52000741-bb36-4006-ba0e-c94400154db0)

The website and application icon has been generated using [IconKitchen](https://icon.kitchen/)
