---
title: 'Best VSCode Extensions I use for any project'
date: '2022-03-16 01:21:23'
description: As you probably know, Visual Studio Code is one of the most popular code editors for frontend developers and here I will show you which extensions I use in my day-to-day programming.
category: 'Development'
background: '#353b48'
featuredImage: '/assets/img/blog/best-vscode-extensions-i-use-for-any-project.jpg'
---

**I recently changed my old dell laptop for a Macbook pro (I'm writing an article about it) and decided to take the opportunity to review all the extensions I've been using in VSCode and create a post to help you who are looking for ways to also improve your code editor too.**

## List of the best VSCode extensions I use to improve my productivity

### [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Nowadays we are developing projects built on tools like react and angular that use Node to run them, but **sometimes we just want a server to handle static files. And because of this, Live Server is one of my favorite VSCode extensions to improve my productivity**.

And besides allowing you to open static HTML files on a local server, it also works as a live reload server, which means that as soon as you change and save any file in your application, the browser will automatically refresh.

### [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

Created by Microsoft, **this super useful extension allows developers to share a real-time collaborative development environment with others to work with, regardless of what programming languages they are using.**

Live Share certainly deserves an entire article, but here are some other great features of it to highlight: share debugging sessions, localhost web apps, terminal instances, voice calls and more. Also, each developer continues to use their own personal VSCode preferences, as well as having their own cursor. Isn’t it amazing?

### [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

**If you use [git](https://git-scm.com/) as your version control system in any of your work or personal projects, I think this powerful extension will help you a lot.** By simply placing your cursor on any line of your code, you'll get some information about who wrote that code, how long ago it was merged, and what the commit message was. And this is just the beginning of what this tool can offer you.

It doesn't matter if you're using Github or Bitbucket, through GitLens you can also view, explore, and manage commits, repositories, file history, branches, stashes, tags, contributors, and more.

### [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

**This is definitely the best extension to keep some basic consistency of our code formatting across different IDEs and multiple developers through a file called `.editorconfig`.**

On [editorconfig.org](https://editorconfig.org/) you can read how you can use it to configure consistent styles, but here are some of them: indent style (tab or space), indent size, charset, trim trailing whitespace, insert new line in the end of files…

### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Another great way to format your code and maintain consistency between files is by using this extension. **Prettier can works together with [EditorConfig](<(https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)>) adding many other configurations such as removing unnecessary spaces and ensuring the use of single or double quotes through the code, for example.**

I really recommend you to watch this [video to understand how to configure Prettier in VSCode](https://www.youtube.com/watch?v=h3PJjP0nE98&ab_channel=JamesQQuick). And make sure you set this extension to work on saving the files.

### [Advanced new file](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file)

**This VS Code extension really helps me a lot to improve my productivity by providing a way to create files anywhere in my project workspace from my keyboard.** So by pressing `Ctrl/Cmd + N` instead of just creating a new file to be saved somewhere later, the editor first asks me which directory I want to put this new file in, then I set a name for the file and consequently it will already be created in the correct place.

Note: to enable this feature in the `Ctrl/Cmd + N` command, you must change the keyboard shortcuts named 'New Advanced File' in the editor settings. If not, you need to check the default command in the extension's documentation.

### [Auto rename tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

**This is a simple but valuable extension that will basically rename any paired HTML/XML tag you modify, helping you to code faster and reduce errors.** This means that if you change an opening tag, the closing tag will change automatically and vice-versa, regardless of the size of your code.

### [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

**All this extension does is add some visual styles to any CSS/web colours found in your documents, making the code appearance better.**

## VSCode extensions to improve your editor interface

### [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

Dark theme makes my life much easier and there are a lot of benefits using it: it’s good for our eyes if we are staring at the screen for many hours, specially at night. And besides, **this extension makes Visual Studio Code prettier too**.

### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

**This extension adds customized icons to our files and directories, making the project file list in the sidebar better.** The good news is that you can modify some settings through VS Code's Settings.json file by changing the icons according to what works best for you.

### Font Family

**This isn't an extension, but it's another great thing I like to do: change my editor's font family.** There are two wonderful and functional fonts I like best for this: [Fira Code](https://github.com/tonsky/FiraCode) and [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) - both free and open source. The best thing about these fonts is that they are monospaced fonts that contain ligatures for combinations of various common programming characters.

After downloading and installing any of the above fonts (.ttf format), you just need to add the following configuration in the editor's `setting.json` file:

```
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,
```

Talking about changing fonts in VSCode, you might also want to change their size:

```
  "editor.fontSize": 15,
  "editor.lineHeight": 25,
```

## Bonus - More useful VSCode extensions

### [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)

**Instead of testing Javascript in the browser console, you might want to do this directly in your VSCode.** So, after installing this extension you need to open a special file - which will be the JS/Typescript playground in your editor:

> “Once the extension is installed, press `Ctrl/Cmd + Shift + P` to display the editor’s command palette, and then type 'Quokka' to see the list of the available commands. Select and run the 'New JavaScript File command'.” - [Quokka](https://quokkajs.com/docs/#getting-started)

So, have a lot of fun. 😁

### [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)

**As they say: “Polaroid for your code”. As developers (and maybe also writers) sometimes we need to take a screenshot of our code and using this extension we can do it easily.**

After installing this extension you just need to open your command palette (`Ctrl/Cmd + Shift + P`) and search for “Polacode”. Once opened, all you have to do is select some code in your file and this tool will show you a screenshot that you can modify some attributes and generate an image of it.

### DotENV

**Some projects have a file called `.env` to manage their environment variables, so this extension adds some styles to this type of file making it more readable.**

### Bracket Pair Colorizer

This used to be a useful extension for JS files because it colorizes the bracket and parenthesis pairs making our nested code much more readable. Now VSCode has this feature natively and to configure it you can add it in the `settings.json` editor:

```
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs":"active"
```

## Conclusion

**Improving productivity is perhaps the main concern of developers and here I have shown all the VSCode extensions that I have been using for any project I work on.**

**Do you use any other VSCode extension?**

Please feel free to leave a comment if you liked this article and also if you have other suggestions.

See you next time. 😁
