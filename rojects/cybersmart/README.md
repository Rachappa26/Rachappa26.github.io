# CyberSmart: Cybersecurity Awareness

An interactive, self-paced cybersecurity awareness demo built with HTML, CSS, and vanilla JavaScript. This is a portfolio case study demonstrating learning design decisions and front-end implementation.

## Learning design

**Audience:** Employees in a typical organization  
**Estimated seat time:** 5–7 minutes  
**Format:** Responsive browser-based microlearning  
**Learning objectives:** Learners will be able to:
1. Identify common warning signs in a suspicious message.
2. Choose safer password and multi-factor authentication practices.
3. Select an appropriate response to a suspected cybersecurity incident.

## Interactions

- Click-to-start introduction
- Three scenario-based knowledge checks
- Immediate explanatory feedback for correct and incorrect answers
- Progress indicator
- Completion score and key takeaways
- Retry and review options

## Files

- `index.html` — semantic page structure and learning content container
- `styles.css` — responsive visual design, interaction states, and accessibility focus styles
- `script.js` — lesson data, scoring, navigation, and feedback logic

## Run locally

1. Download or clone this folder.
2. Open `index.html` in a modern browser.
3. No build tools, frameworks, or server are required.

## Publish using GitHub Pages

### Option A: Add it as a project page (recommended)
1. In your GitHub account, create a new public repository named `cybersmart-cybersecurity-demo`.
2. Upload `index.html`, `styles.css`, `script.js`, and this README at the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for deployment. Your demo URL will look like:
   `https://YOUR-USERNAME.github.io/cybersmart-cybersecurity-demo/`

### Option B: Keep it inside your existing portfolio repository
1. Open your existing portfolio repository.
2. Create a folder named `projects/cybersmart`.
3. Upload the three web files into that folder.
4. If your portfolio is published from the repository root, the demo URL will look like:
   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/projects/cybersmart/`
5. If your portfolio uses a custom build process, check that the `projects/cybersmart` folder is included in the published site.

## Suggested portfolio case-study copy

**CyberSmart: Cybersecurity Awareness Microlearning**

I designed and built a short, browser-based cybersecurity awareness learning experience for employees. The module uses realistic workplace scenarios, three knowledge checks, immediate feedback, and a completion summary to help learners practise safer responses to phishing, account-security risks, and suspected incidents.

**My role:** Instructional design, learning-flow design, content writing, interaction design, HTML/CSS/JavaScript implementation, and manual testing.

**Design approach:** The experience is organised around measurable learning objectives and short scenario-based practice. Feedback explains why a response is safer, rather than simply marking an answer right or wrong.

**Tools:** HTML5, CSS3, JavaScript, GitHub Pages.

**Evaluation plan:** Conduct a small usability review with representative users. Check whether learners can complete the module on desktop and mobile, understand the feedback, and achieve the learning objectives. This portfolio demo has not yet been formally evaluated with learners.

## Accessibility and responsible use

- Uses semantic headings, button controls, keyboard focus indicators, and responsive layouts.
- No learner data is collected or transmitted.
- The phishing example uses a fictional domain and does not include a live link.
- This is general awareness training, not an organisation-specific security policy. Adapt reporting guidance to the target organisation before real-world deployment.

## Portfolio presentation checklist

- [ ] Confirm all three files are uploaded.
- [ ] Test the live page on desktop and mobile.
- [ ] Try both correct and incorrect answers.
- [ ] Check the progress indicator, results screen, retry, and review controls.
- [ ] Add a project card and case-study summary to your main portfolio homepage.
- [ ] Capture one or two screenshots for your case-study page.
