# Contributing Guide

Thank you for your interest in contributing to this project! This guide will help you get started.

## 🎯 Ways to Contribute

- **Report bugs** - Found something broken? Let us know!
- **Suggest features** - Have ideas for improvements?
- **Improve documentation** - Help make the docs clearer
- **Fix issues** - Submit pull requests for bug fixes
- **Add features** - Implement new functionality

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/buntu-majaja-website.git
cd buntu-majaja-website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch naming:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code improvements

### 5. Make Your Changes

- Write clean, readable code
- Add comments for complex logic
- Follow the existing code style
- Test your changes locally

### 6. Test Locally

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 7. Commit Your Changes

```bash
git add .
git commit -m "feat: add new portfolio filter"
```

**Commit message format:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### 8. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 9. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Describe your changes
5. Submit!

## 📝 Code Style Guidelines

### JavaScript/React

**Use functional components:**
```jsx
// ✅ Good
function MyComponent() {
  return <div>Hello</div>;
}

// ❌ Avoid
class MyComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

**Use descriptive names:**
```jsx
// ✅ Good
const [isMenuOpen, setIsMenuOpen] = useState(false);

// ❌ Avoid
const [open, setOpen] = useState(false);
```

**Add comments for complex logic:**
```jsx
// ✅ Good
// Filter projects by selected category and status
// Returns all projects if "All" is selected
const filteredProjects = projects.filter(project => {
  const matchesCategory = selectedCategory === "All" || 
                         project.category === selectedCategory;
  const matchesStatus = selectedStatus === "All" || 
                       project.status === selectedStatus;
  return matchesCategory && matchesStatus;
});

// ❌ Avoid
const filteredProjects = projects.filter(p => 
  (selectedCategory === "All" || p.category === selectedCategory) &&
  (selectedStatus === "All" || p.status === selectedStatus)
);
```

### CSS/Tailwind

**Use Tailwind utilities:**
```jsx
// ✅ Good
<div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">

// ❌ Avoid custom CSS unless necessary
<div className="custom-container">
```

**Responsive design:**
```jsx
// ✅ Good - Mobile first
<div className="w-full md:w-1/2 lg:w-1/3">

// ❌ Avoid - Desktop first
<div className="w-1/3 md:w-1/2 sm:w-full">
```

## 🐛 Reporting Bugs

### Before Submitting

1. Check if the bug has already been reported
2. Try to reproduce it in the latest version
3. Gather information about your environment

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 10, macOS 13]
- Browser: [e.g., Chrome 120, Firefox 121]
- Node version: [e.g., 18.17.0]

**Additional context**
Any other relevant information.
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you thought about.

**Additional context**
Mockups, examples, or references.
```

## ✅ Pull Request Guidelines

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Comments added for complex logic
- [ ] Tested locally (dev and production builds)
- [ ] No console errors or warnings
- [ ] Documentation updated if needed
- [ ] Commit messages follow the format

### PR Description Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
How you tested the changes.

## Screenshots (if applicable)
Before and after screenshots.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed the code
- [ ] Commented complex code
- [ ] Documentation updated
- [ ] No new warnings
```

## 🔍 Code Review Process

### What to Expect

1. **Initial Review** - Maintainer checks PR within 48 hours
2. **Feedback** - Suggestions for improvements
3. **Revisions** - Make requested changes
4. **Approval** - PR is approved and merged
5. **Deployment** - Changes go live

### Review Criteria

- **Functionality** - Does it work as intended?
- **Code Quality** - Is it clean and maintainable?
- **Performance** - Any negative impact?
- **Documentation** - Are changes documented?
- **Testing** - Has it been tested?

## 🎓 Learning Resources

New to contributing? These resources can help:

- [First Contributions Guide](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

## 📞 Getting Help

Need help? Here's how to reach out:

- **GitHub Issues** - For bugs and feature requests
- **GitHub Discussions** - For questions and ideas
- **Email** - hello@buntumajaja.com

## 🏆 Recognition

Contributors will be:
- Listed in the project's contributors page
- Mentioned in release notes
- Credited in documentation

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity, level of experience, nationality, personal appearance, race, religion, or sexual identity.

### Our Standards

**Positive behavior:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards others

**Unacceptable behavior:**
- Trolling, insulting, or derogatory comments
- Public or private harassment
- Publishing others' private information
- Other conduct inappropriate in a professional setting

### Enforcement

Instances of unacceptable behavior may be reported to hello@buntumajaja.com. All complaints will be reviewed and investigated promptly and fairly.

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

**Thank you for contributing! 🎉**

Your efforts help make this project better for everyone.

