# Add CyberSmart to your existing portfolio

## 1. Upload the demo

In your current portfolio repository, create this folder structure:

```text
your-portfolio-repository/
├── index.html
├── README.md
├── ...existing files...
└── projects/
    └── cybersmart/
        ├── index.html
        ├── styles.css
        ├── script.js
        └── README.md
```

In GitHub:
1. Open your portfolio repository.
2. Select **Add file → Create new file**.
3. In the filename field, enter `projects/cybersmart/index.html`, then paste the contents of the demo's `index.html`.
4. Repeat for `projects/cybersmart/styles.css`, `projects/cybersmart/script.js`, and `projects/cybersmart/README.md`.
5. Commit the changes to your `main` branch.

You can also upload files from the folder using **Add file → Upload files**, but ensure they end up inside `projects/cybersmart/`.

## 2. Find the live demo URL

If your existing portfolio is published from the root of the repository, your demo should be available at:

`https://YOUR-USERNAME.github.io/REPOSITORY-NAME/projects/cybersmart/`

Replace the placeholders with your GitHub username and repository name. If your repository itself is named `YOUR-USERNAME.github.io`, the URL is usually:

`https://YOUR-USERNAME.github.io/projects/cybersmart/`

GitHub Pages can take a few minutes to publish changes.

## 3. Add a project card to the homepage

Find the projects section in your existing `index.html`. Add a card similar to the following, adapting its class names to match your current design:

```html
<article class="project-card">
  <p class="project-type">INTERACTIVE ELEARNING · CYBERSECURITY</p>
  <h3>CyberSmart: Cybersecurity Awareness</h3>
  <p>
    A short scenario-based learning demo covering phishing warning signs,
    safer account practices, and incident reporting. Built with HTML, CSS,
    and JavaScript.
  </p>
  <p class="project-tools">HTML · CSS · JavaScript · GitHub Pages</p>
  <a href="projects/cybersmart/" target="_blank" rel="noopener noreferrer">
    Launch interactive demo ↗
  </a>
</article>
```

If your homepage already has a project-card component, reuse its existing class names and structure so the new card matches your site.

## 4. Add a case-study section

Suggested copy:

**Challenge:** Employees need short, practical reminders that help them recognise common cybersecurity risks and choose safer next steps.

**Design response:** I created a short microlearning experience with three measurable objectives, workplace scenarios, knowledge checks, immediate feedback, and a completion summary.

**Learning strategy:** Scenario-based practice, concise content, explanatory feedback, and reinforcement of three key habits: pause, protect, report.

**My contribution:** Learning objectives, content structure, scenario writing, feedback design, interaction flow, front-end development, and manual QA.

**Evaluation plan:** Test the module with representative learners, collect usability feedback, review quiz performance, and revise confusing content. Do not claim measured learning impact until you have gathered evaluation data.

## 5. Final test

- [ ] Homepage project card appears correctly.
- [ ] Launch link opens the demo.
- [ ] No missing CSS or JavaScript files.
- [ ] All answer choices provide feedback.
- [ ] Score and retry work.
- [ ] Layout works on a phone-sized screen.
- [ ] Replace any generic policy wording with the target organisation's approved reporting process before using this as real employee training.
