# Antigravity Rules & Behavior

## 1. Strict Scope Adherence (DO NOT TOUCH UNRELATED CODE)
- **Rule:** You must **only** change the specific files, lines of code, or UI elements that the user explicitly asks you to change. 
- **Rule:** Never attempt to preemptively fix, refactor, or globally update code that the user did not ask you about. 
- **Rule:** If a requested change seems like it might break something else, **ask the user first** before modifying other files. Do not silently push changes to global components (like `button.tsx`, `Layout.tsx`, etc.) to solve a local problem without permission.
- **Rule:** Double-check the blast radius of your changes. If fixing a bug on one page requires changing a shared component, verify all other usages of that component before committing to the change, or find a localized solution instead.

## 2. Routing and Scroll Restoration Architecture
- **Rule:** This application uses a highly specific scroll restoration architecture inside `App.tsx` (using `ScrollTracker`, `ScrollRestorer`, and a global click interceptor) because `HashRouter` and Framer Motion's `AnimatePresence` have severe race conditions with native browser scrolling.
- **Rule:** **DO NOT** attempt to add `window.scrollTo(0, 0)` or smooth scrolling hacks to individual `<Link>` `onClick` handlers. The global interceptor already handles "scroll to top" for all internal navigations by setting `forceScrollToTop` in `sessionStorage`.
- **Rule:** **DO NOT** modify the `onExitComplete` logic in `App.tsx`'s `AnimatePresence`. It is carefully calibrated to defer to `ScrollRestorer` during Back navigations.
- **Rule:** If you need a specific `<Link>` or `<a>` tag to act like a Back button (i.e. to restore a previous scroll position instead of jumping to the top), simply add the attribute `data-restore-scroll="true"` to the link.

## 3. Git Workflow
Always follow this sequence for saving progress:
```bash
git add .
git commit -m "type: description

[Insert the full, multi-line commit message here]"
git push
```
*(Note: The full multiline commit message, including all detailed bullet points, must be placed entirely inside these double quotes.)*

**Valid Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting, missing semi colons, etc; no code change
- `refactor`: Refactoring production code
- `perf`: Performance improvements
- `test`: Adding missing tests
- `chore`: Maintenance tasks (build, dependencies, etc)

NEVER run `git commit` or `git push`. The user will ALWAYS commit manually after reviewing the code. Do NOT attempt to commit changes on behalf of the user.

NEVER include the iterative "scratchpad" steps we took during sessions since last commit.
