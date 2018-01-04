# IIGB folder structure

<!-- toc -->

- [The purpose](#the-purpose)
- [Project/File Structure](#projectfile-structure)

<!-- tocstop -->

## The purpose

This folder contains JSON files that tell metalsmith-page-builder where to find output pages it generates using markdown
from the content folder.


## Folder Structure

Below snippet outlines folder structure. This snippet only lists files of importance.

```
- redirects/
  - ip_redirects.json #Defines the mapping of IP geo locations to the languages used in the website.
- structure/          #Contains files that define the page heirarchy and content sources for each of the languages and locations supported by the website.     
- package.json        
- README.md           

```
