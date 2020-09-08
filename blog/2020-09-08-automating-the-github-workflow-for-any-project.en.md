---
title: 'Automating the Github workflow for any project'
date: '2020-09-08 01:21:23'
description: "In this article, I will share with you three amazing GitHub tools that I use to automate processes for all my projects from the beginning. This helps me deal with one of the biggest challenges for software developers: managing code changes."
category: Development
background: '#353b48'
featuredImage: '/assets/img/blog/automating-the-github-workflow-for-any-project.jpg'
---

**It doesn’t matter if you are developing a feature-rich application or just a small project, you know that Github is the best place for versioning your code, right?** I recently started to define a workflow for my projects that saved me a lot of time - in addition to ensuring that the code is more reliable, of course.

**So, there are 3 GitHub tools to improve and automate the workflow of our projects:**

- **GitHub Project Management**: similar to Trello, but much more advanced, it's a free Github tool to manage all tasks of the project. And as you are figuring out, it’s totally integrated with issues and pull requests.
- **Github Actions**: this is the secret to Github's entire automated workflow. When using this feature, Github is able to test the code after a pull request and deploy it to production, for instance.
- **Dependabot**: recently acquired by Github, this tool ensures that all project dependencies are updated automatically through pull requests.

Below I talk a little more about each one of those brilliant tools and show you how you can use it on your projects. Let’s go?

## GitHub Project Management

I strongly believe that all projects start with planning, right? (Or should, at least)

**[GitHub Project Management tool](https://github.com/features/project-management/ ) helps us report bugs, discuss tasks, propose ideas, prioritize work and monitor progress similar to Trello. But the difference here is that everything is integrated with issues and pull requests.**

### Advantages of Github Project Management

There are so many advantages of using this tool and below you’ll see some of the most important of them:

- **We can create an automated kanban**. So, when you create a Pull Request, it will automatically move a referenced issue from In progress to To-do column, for example.
- **Assign issues to a specific person or people** responsible for solving those problems.
- **Apply custom labels** to an issue to categorize it by feature, priority or any other context.
- Last but not least, **Github tracks the changes you make to the issue itself**, so everything is transparent and complete for historical references and discussions.

We can also use [milestones](https://docs.github.com/en/github/managing-your-work-on-github/about-milestones ) to group related issues and pull requests around a shared goal or deadline (such as a planned release or a major feature) and check all the progress of them together. It is really good to have an overview of the development process.

### How to use GitHub Project Management

This tutorial will give you a good idea on how you can use the GitHub Project Management and I confess that I apply almost the same settings for my projects.

https://www.youtube.com/watch?v=ff5cBkPg-bQ&ab_channel=goobar

## GitHub Actions

Automation is one of the best ways to increase productivity in a software project and [GitHub Actions](https://github.com/features/actions) provides an easy way to improve the quality of our code and make life more productive.

**Every time an event happens to the repo (merge or pull request, for example), we can trigger it to an automated workflow: test the code, deploy the code to production... That's when [GitHub Actions](https://github.com/features/actions) take place.**

### Advantages of Github Actions

Have you ever heard the phrase: “The sky's the limit”? So, by using GitHub Actions you have so many possibilities. Below are some of them:

- **Continuous Integration (CI)**: we can create a test suite to run anytime developers submit their code to the main code base. If everything goes through the PR will be done, on the other hand GitHub will provide a log to see what went wrong.
- **Continuous Deployment (CD)**: by using actions, we can deploy the project to production everytime master receives a new merge. If you've worked with Netlify or GitHub Pages, you've already had experience with it.
- **Integration of other tools beyond GitHub**: if you use any communication tool, you may be able to integrate it into your GitHub project. For example, on Slack you can get updates on what's happening on GitHub without leaving the tool. You can also integrate Jira, Trello ... There are so many possibilities here.

### How to use Github Actions

All you need to do is create a `.yml` extension in `.github/workflows` directory containing the necessary instructions for the actions. In the video below you will see how to do it. And you can also see the [GitHub Actions documentation here](https://docs.github.com/en/actions).

https://www.youtube.com/watch?v=eB0nUzAI7M8&ab_channel=Fireship

Despite the simplicity of managing Actions, instead of writing your own steps from scratch, you can use some [GitHub Actions developed by the community](https://github.com/marketplace?type=actions ).

## Dependabot

Keeping dependencies up to date is very important for better security, performance and bug fixing, don't you agree? Read more about it in [this article](https://dependabot.com/blog/why-bother/).

**[Dependabot](https://dependabot.com/) is another excellent, free tool acquired in early 2019 for GitHub. It provides a quick and easy way to manage project dependencies by automatically sending pull requests to your repository whenever it makes an update. Then you’ll be able to review and merge the PR to your master.**

### Advantages of Dependabot

Check out the main advantages of this tool below and don't feel surprised to think "Why am I not using this yet?"

- Monitoring project dependencies for vulnerabilities and creating automatic pull requests to fix security vulnerabilities as they are found.
- It keeps the code up-to-date, which improves performance and bug fixes.
- Dependabot shares a CI pass rate using a badge on the pull request. So you can check if there is any breaking change before merging the update with more confidence.
- It currently supports JavaScript, Python, Ruby, PHP, Docker, GitHUb Actions and more.

### How to use Dependabot

You will see how easy it is to configure Dependabot for your projects in the video below. You can also create a custom configuration with more details on how this tool should behave depending on your project needs.

https://www.youtube.com/watch?v=7sHwEN5UNus&ab_channel=EmberMap

## Conclusion

**Even though there is no universal workflow for code changes management, we can improve many development workflows just by using some excellent, free tools from Github to automate some processes and ensure more reliable code, as you can see.**

I strongly recommend that you try these tools and discover the power that they can bring to your projects.

And, as always, leave me a comment if this post was useful for you and let me know if you use any other tools to automate the processes in your work. See you next time! ✌
