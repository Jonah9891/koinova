# SETUP-ANTIGRAVITY.md
How to set up Antigravity so the agent can build KOINOVA with as few interruptions as possible, without risking your computer or project.

> Menu names can change between Antigravity versions. If a name below does not match, look for the closest equivalent in Settings → Agent.

## 1. Open the project
1. Create an empty folder called `koinova-website`.
2. Copy this whole content pack into it (`build-specs/`, `phase-1-launch/`, `phase-2-3-growth-and-scale/`, `README.md`).
3. Open that folder as the Antigravity workspace.
4. Start the first conversation with: "Read AGENT-RULES.md, then 16-BUILD-PLAN-AND-TASKS.md, and begin Task 1."

## 2. Settings that reduce approval pop-ups
Open **Settings → Agent** and set:

| Setting | Recommended value | What it does |
|---|---|---|
| Terminal command auto execution | **Always Proceed** (also called Turbo) | Runs commands without asking, except anything on the Deny list |
| Review policy | **Always Proceed** | Agent does not pause for plan or artifact review. Use "Agent Decides" if you want to see plans first |
| Non-workspace file access | **Deny** | Agent cannot touch files outside the project folder |
| Sandbox mode | Optional (on if available) | Runs commands in an isolated environment |

Changes usually apply to **new conversations only**, so start a fresh chat after changing them.

### Browser access for images and screenshots
The agent needs the built-in browser to download licensed stock photos (Unsplash, Pexels) and to take screenshots for design review. If Antigravity asks to allow these sites, allow them. Do not let the agent sign in to any account or accept paid terms.

## 3. Deny list (always block these)
Add these to **Deny List Terminal Commands** so "Always Proceed" cannot do serious damage:

```
rm -rf
rmdir /s
del /f
format
git push --force
git push -f
git reset --hard
git clean -fd
vercel --prod
vercel deploy --prod
vercel env rm
npm publish
drop database
drop table
truncate
curl * | sh
curl * | bash
wget * | sh
sudo
chmod -R 777
```

## 4. Allow list (safe, routine commands)
If prompts still appear, add these to **Allow List Terminal Commands**:

```
npm install
npm run
npm ci
npx
node
git status
git add
git commit
git diff
git log
git checkout -b
ls
dir
mkdir
cat
type
echo
vercel dev
```

## 5. If prompts keep appearing anyway
Some Antigravity versions have had bugs where "Always Proceed" did not fully suppress approval prompts. In that case:
1. Update Antigravity to the latest version and restart it.
2. Start a **new** conversation after changing settings.
3. Make sure the Deny list is not blocking something the agent needs.
4. Add the commands being prompted to the Allow list.
5. Check the Antigravity forum or release notes for the current status.
6. Do **not** use "dangerously skip permissions" flags. Their only purpose is to remove all safety checks.

## 6. What still needs a human
Even in fast mode, the agent must stop and ask you before:
- Deploying to production.
- Changing or deleting environment variables or secrets.
- Sending real emails or messages to real users.
- Deleting data in Supabase or any database.
- Spending money (paid plans, domains, paid APIs).
- Anything on the Deny list.

These rules are repeated in `AGENT-RULES.md`.

## 7. Accounts to prepare before building
- GitHub (repository)
- Vercel (hosting)
- Supabase (database and auth)
- Resend or another email provider
- A domain name (can be added later)
- Google Analytics or a privacy-friendly option such as Plausible (optional)
