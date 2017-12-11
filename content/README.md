# IIGB website content

<!-- toc -->

- [The purpose](#the-purpose)
- [Getting Started with development](#getting-started-with-development)
- [Structure](#projectfile-structure)
- [Deployment & Release](#deployment--release)

<!-- tocstop -->

## The purpose
This folder contains markdown files for any textual content that on the IIGB website.

## Structure

Below snippet outlines the folder structure. This snippet only lists files of importance.

```
- content/
  - _labels/                #Contains nav headings, button text etc. for the IIGB website
  - _labels-great.gov.uk/   #Contains nav headings, button text etc. for the great website
  - beta/                   #Contains page content for IIGB website
  - great.gov.uk/           #Contains page content for great website
- geoip/                  
  - country_redirects.json  #Defines the mapping of IP geo locations to the languages used in the website.
- media/                    #Contains all the images used across the site.
- _prose.yml                #Defines the folder structure for the repository.
- package.json        
- README.md           

```

