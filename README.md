# Daily Beirut

## Testing Account

### email:

Pay attention to the case. The email input is case sensitive.

roy@testing.com

### Password:

123456789

## Description

Daily Beirut is a digital newspaper app. To use it, you have to create an account, login, and start reading all the latest news.

## How to run the code

1. Clone the repository using the following command:
   `git clone https://github.com/ritaNDU/beiruttimes-final-ritamerhej.git`
2. Inside the cloned repository run either of the following commands:
   `yarn` or `npm install`
3. To start the server, run either of these commands:
   `yarn start` or `npm run start`

## How I Got Organized

I drew a plan for my app on pen and paper. I then figured out how the data should flow in the app, and what data was needed and what was its architecture. I had planned plenty of other feature,but had to cut them out for now due time restrictions.

I will implement them over time whenever I have some free time.

## Challenges Faced

### Design

Still an ongoing issue. So I went with the simplest design I found, that works.

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

### The screens/ folder:

This is where all screens are stored.

### The store/ folder:

This is where the redux storeis implemented.

### The styles/ folder:

This is where the theme is stored.

### The data/ folder:

It contains data, and interfaces to structure data objects.

### The navigation/ folder:

This is where navigation is implemented. react-navigation is being used for navigation.

### The utils/ folder:

This is where some utility functions are implemented.

### The service/ folder:

All api functions are implemented here, as well as interceptors.

## Attribution

The background image used for the login and signup screens is made by [freepik](https://www.freepik.com/free-photo/top-view-newspaper-pieces-assortment_23994213.htm#query=newspaper%20background&position=1&from_view=keyword&track=ais&uuid=52000741-bb36-4006-ba0e-c94400154db0)
