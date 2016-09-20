# Class 02 – 2016-09-23: Git, HTML, CSS. _reading: EJ.Intro, EJ.12_

## Omissions from last week
* The importance of making interesting mistakes.
* If you are not making mistakes your not learning.
* Minimalist first. No frameworks for now.
* About grading …
* Openness and working in public & on github …
* Browser caching (!) (dev tools)
* People still need to register? Tell me QUICK!

## Check on reading
* Summarize 'How To Survive A Critique'?
* Summarize 'Social Rules for Learning'?
* Tell me about 'well actually …'?
* Tell me what `git pull` does?
* What do we think of Daniel Shiffman?

## Q & A and review of problem set
* [ps-01](../01/ps01.html)
* Missing from the assignments list? slack me your deets!

## Git wrapup
* Did anyone make a few repositories?
* Did anyone make multiple commits?
* Did anyone experiment with making branches?

### Critical git concepts & terms
* Git is a source control tool.
* Git saves versions of your project.
* Use `git commit` to make changes part of the permanent record.
* Use `git status` to see if you have 'dirty' files.
* Use `git log` to review your history.
* Git can be used to `push` or `pull` changes from remote locations. (like github)
* Pictures and demo from github desktop client.
* Alternate git client: [source tree](https://www.sourcetreeapp.com/)

### Important git concepts & ideas
* historic versions of your project have a `sha1` label.
* you can ignore some files. such as '.DS_Store'
  * lets try removing it from github, and then ignoreing it.
* you can use `git ceckout <sha1>` to time-travel to specific commits.
* you can use `git checkout -b` to create a new branch.
* you can include change from one branch into another using `git merge`
* pictures and demo

### git magic
* git rebase <commit>
* git reset <commit>

### Where to go for help
* [stack overflow](http://stackoverflow.com/)
* [slack](https://2016-swc.slack.com/messages/general/)
* google

### The web: HTML and CSS lecture / slides
* WE CANT DO THIS. ITS TOO MUCH.
* Zines of the 1980s, 1990s.
* Open source software.
* Velcro or the WWW?
* Tim Berners-Lee @ Cern in 1989
  * 1.1B$ Annual budget. (NASA 2016 ~19B)
  * Largest particle physics laboratory in the world. Established in 1954.
  * The Wikipedia page for CERN Gushes about HTML & HTTP. Quieter about sub-atomic discoveries
  * simulated [demo of first website](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)
  * ['modern' experience](http://info.cern.ch/hypertext/WWW/TheProject.html)
* 'On 30 April 1993 CERN put the World Wide Web software in the **public domain**.'
* Hyper Text Transfer Protocol.
* Open [a page in Chrome](https://knowuh.github.io/2016-SWC/).  
  * View Source.
  * Copy and paste made the web explode.
  * Echos of DIY zine culture.
  * View developer tools.
* HTML Documentation from the Mozilla Developer Network
  * [Mozilla guide HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
   [introduction](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction)
  * [reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

#### A sample document

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>title</title>
    <meta name="author" content="name">
    <meta name="description" content="description here">
    <meta name="keywords" content="keywords,here">
    <link rel="stylesheet" href="path/to/stylesheet.css" type="text/css">
    <script type="text/javascript" src="path/to/script1.js" defer></script>
  </head>
  <body>
    <img src="../img/favicon-32x32.png" alt="favicon" />
    <h1> This is a heading </h1>
    <div class='main-content' id='body1'>
      <p class='lead'> First paragraph. </p>
    </div>
  </body>
</html>
```

* Experiment with the 'fault tolerant' nature of HTML.
* Use [HTML Validator](https://validator.w3.org/).
* Check with the browser.
* Q: Whats the problem with this?  Why does HTML suck?


### HTML Tags and the DOM.
Related reading and notes from [MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
* Anatomy of a Tag
* Tags without children
* Tags with children


### CSS
Related reading and notes from
[MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics). See also  [Code Pen](http://codepen.io/)
* Anatomy of CSS Rule Set.
* CSS selection of DOM Elements.
* Basic CSS styles.
  * fonts
  * borders
  * colors
  * margins
  * backgrounds
* Position and display
  * Absolute and relative positioning
  * floating
  * blocks vs. inline
  * flexbox (!) -- see [flexbox in 5](http://flexboxin5.com/)


### Online CSS Tools & resources:
* CSS [validator](https://jigsaw.w3.org/css-validator/)

## Tools to install
* install [chrome](https://www.google.com/chrome/browser/desktop/)
* install [atom](https://atom.io/)

### Atom packages to install:

#### Required
* atom-live-server
* linter
* linter-jshint

#### Recommended
* emmet
* pretty-json
* linter-jsonlint
* pretty-json
* jade

##### Stretch:
* Find other plugins that help with CSS / HTML, present them to class next week, but contact me first so I can schedule it.  HTML / CSS compilers / pre-processors.

##### Lets Build a web page.
* [sample](./sample.html) [source](view) 
