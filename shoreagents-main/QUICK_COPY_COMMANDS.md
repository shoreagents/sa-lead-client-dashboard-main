# Quick Copy Commands for Styling Migration

## 🚀 Fast Track: Copy Everything

When you're back on your main branch, run these commands to pull styling from this branch:

### Step 1: Identify This Branch Name
```bash
git branch --show-current
```
**Save this branch name!** You'll need it in the next steps.

---

## 📋 Copy Commands

### Option A: Using Git (Recommended)

```bash
# Make sure you're on your target branch
git checkout your-main-branch

# Copy the Footer from this branch
git checkout <this-branch-name> -- src/components/layout/Footer.tsx

# Copy the Real Estate Outsourcing page
git checkout <this-branch-name> -- src/app/real-estate-outsourcing/page.tsx

# If you need the layout too
git checkout <this-branch-name> -- src/app/real-estate-outsourcing/layout.tsx
```

### Option B: Manual File Copy

```bash
# Navigate to your main branch directory
cd path/to/your-main-branch

# Copy Footer
cp ../this-branch-directory/src/components/layout/Footer.tsx src/components/layout/Footer.tsx

# Copy Real Estate page
cp ../this-branch-directory/src/app/real-estate-outsourcing/page.tsx src/app/real-estate-outsourcing/page.tsx
```

---

## 🎯 Targeted Extraction

If you only want specific components, copy these sections manually:

### Hero Section with Dark Background
- File: `src/app/real-estate-outsourcing/page.tsx`
- Lines: 390-415
- Key: Dark hero with animated background lines

### Cost Calculator
- File: `src/app/real-estate-outsourcing/page.tsx`
- Lines: 87-182
- Interactive calculator with dark header

### Service Explorer (Tabbed Content)
- File: `src/app/real-estate-outsourcing/page.tsx`
- Lines: 254-305
- Tab-based category switching

### Timeline Component
- File: `src/app/real-estate-outsourcing/page.tsx`
- Lines: 307-333
- Vertical timeline with phases

### Footer (Complete)
- File: `src/components/layout/Footer.tsx`
- Full file (183 lines)
- Dark footer with 4-column layout

---

## 🔍 What to Look For

### Styling Patterns to Extract:

1. **Color Classes:**
   - `bg-lime-500/10`, `bg-lime-600`, `text-lime-400`
   - `bg-slate-900`, `bg-slate-950`
   - `border-lime-500/20`

2. **Spacing:**
   - `my-16 md:my-24` (section spacing)
   - `px-4 sm:px-6 lg:px-8` (horizontal padding)

3. **Effects:**
   - `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
   - `rounded-3xl`, `rounded-2xl`, `rounded-full`

4. **Animations:**
   - framer-motion `initial`, `animate`, `transition` props
   - `AnimatePresence` for enter/exit animations

---

## ⚡ Quick Test After Copy

```bash
# Install any missing dependencies
npm install

# Run dev server
npm run dev

# Visit in browser
# http://localhost:3000/real-estate-outsourcing
```

---

## 🛠️ Troubleshooting

### If styling looks broken:
```bash
# Ensure Tailwind is compiling
npm run dev

# Clear Next.js cache
rm -rf .next
npm run dev
```

### If components don't work:
```bash
# Check dependencies
npm list framer-motion recharts lucide-react

# Install if missing
npm install framer-motion recharts lucide-react
```

---

## 📝 Notes
- Save this file in your main branch for reference
- The main styling guide is in `STYLING_MIGRATION_GUIDE.md`
- Test thoroughly after copying
- Adjust content/copy to fit your pages

---

**Branch to Copy From:** _[Write your current branch name here]_
**Target Branch:** _[Write your main branch name here]_
**Date Created:** {{ date }}

