# Front-End Boilerplate

---

Last updated 7/29/2016

### Goals and Purpose

1. Looking to unify the tools, resources, and methodologies between the members of our User Interface Engineering team.
2. Something else...
2. A third thing


## Getting Started

### Before you begin...

Make sure you have the proper build tools and software, as well as the correct version, necessary to use the Front End Boilerplate. The two big programs to check are:

1. ```node@>=0.12.0``` (version 0.12.0 or greater)
2. ```npm@>=2.1.5``` (version 2.1.5 or greater)

You can check that both are installed and at the correct version by running: ```node -v``` and ```npm -v``` from the command line.

If one or both of those programs aren't installed, go to the [Node.js Downloads page](https://nodejs.org/en/download/), downloading it and following the instructions there.

It's also recommended that [Bower](https://bower.io/) and [Gulp](http://gulpjs.com/) are installed globally on your machine. If not, install both packages using the `npm` command with the global flag (you may have to use `sudo`):

```
npm install -g bower gulp
```

---


### Installation

Begin by cloning the latest version of the repo:

```
git clone https://[USERNAME]@bitbucket.org/clique_studios/front-end-boilerplate.git
```

Unless specified otherwise, git will create a new directory from the clone. Using the command line interface (Terminal, iTerm, Console, PuTTY, etc.) access the newly created directory and install the node packages:

```
cd front-end-boilerplate && npm install
```
Once that's complete a second script will run automatically, installing all [Bower dependencies](https://bitbucket.org/clique_studios/front-end-boilerplate/src/622fa120da3503b6720fd4097eda0a461c02ed29/bower.json?fileviewer=file-view-default) and compiling the framework, allowing you to dive right into your code.


## Directory Structure

The file structure is as similar to that of [Sage's](https://github.com/roots/sage) as we could get to ensure an easy hand-off from UIE to Back-End, but there are a few areas of difference, pointed out below:

```
project
│   README.md
│   file001.txt
│
└───assets
    │   manifest.json
    │
    ├─── media* - contains video and audio files
    ├─── other* - houses the browserconfig.xml,
    │             robots & humans.txt files, as well
    │             as other browser-specific files used
    │             to register icons and on-screen assets
    │
    ├─── fonts
    ├─── images
    ├─── styles
    ├─── scripts
    └─── images

└───ssi* - this directory is home to the pre-compiled HTML
    │      files. These files can, and should, be used as
    │      the templates for modular components that make
    │      up the whole of the site.
    │
    │ *.html - All individual files at this level represent
    │          a template to be used in the WordPress theme.
    │
    ├─── footer* - Contains files pertaining to the footer, including
    │              a place to drop in third-party scripts
    │              (Google Analytics, social media widgets, etc.)
    │
    ├─── header* - All header files, with the <head> element seperate
    │              from items like the top navigation and page shell
    │
    └─── modules* - This folder contains templates for any web component
                    that is implemented more than once on the site.
                    Out of the box there is a simple breadcrumbs nav,
                    sample form, and widgets area.

```


## Build Tools

### Gulp

### Bower

When possible, install new libraries via `bower` for version management.

`bower install [packagename]`

If `bower` can't find your package but you know it's on github and has a bower.json file, use:

`bower install [username/packagename.git]`

Libraries included via `bower` will automatically be compiled and included when Gulp builds the scripts folder.

## Config Files

```
...
```


## Basic Usage

```
...
```


## Creating Styles

Styles are written in SCSS and compiled via Gulp. All SCSS files should be included in main.scss--if you create a new file, add it in the appropriate section to make sure it's compiled along with everything else.

Page-specific styles should go in their own file under the templates folder. To target a specific page, the top-level selector should be `.[the name of the file]`, e.g. `.about`. If you want to create a template for, say, the wordpress single article page, you might want to name it single.html for ease of transferring styles to a Wordpress theme.

If you find yourself re-using a number or color in the styles (like a common set of colors, or a font size), consider adding it to common/_variables.scss to help keep things standardized and make things easier to change globally later.

If you find yourself re-using a particular block of code and styles that's not specific to one page, consider pulling the styles into their own file in the components folder.


## Creating Scripts

```
...
```


## Delivery for Production

To deploy a copy of the front-end boilerplate to a server, upload the contents of the top-level `dist` folder to your desired location.

## Bug Reporting

Report issues via the Front-End Boilerplate project in [Redmine](https://red.cliquestudios.com/projects/frontend-boilerplate/issues). When possible, include relevant screenshots and operation system/browser version information, and steps that can be taken to reproduce the problem.

## Third-Party Resources

### Currently-Included Libraries

* [animate.css](https://github.com/daneden/animate.css)
* [Flexbox Grid](http://flexboxgrid.com/)
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/)
* [JQuery](http://jquery.com/)
* [JQuery Validation](https://jqueryvalidation.org/)
* [JQuery Easing](https://jqueryui.com/easing/)
* [Swiper](http://idangero.us/swiper/)

### Suggested Additional Libraries

These libraries are not included by default due to the fact that they are not always necessary, but are recommended as solutions to use cases that come up every once in a while.

* (add libraries here)
