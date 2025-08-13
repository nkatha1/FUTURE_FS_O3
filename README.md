# Safaricom Rebrand 🌍📱

A fresh reimagining of the Safaricom website, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project showcases Safaricom's services, contact info, and a modern "Meet the Team" section.

Live Demo: [https://future-fs-o3.vercel.app](https://future-fs-o3.vercel.app)

---

## ✨ Features

- ⚡ Fast and responsive UI with **Next.js App Router**
- 🎨 Styled using **Tailwind CSS**
- 👨‍💼 Dynamic **"Meet the Team"** page with leadership bios and photos
- 🌙 Light and dark mode support (via Tailwind's `dark:` classes)
- 🔗 SEO-optimized with clean meta tags
- 📱 Mobile-first responsive layout
- 🔒 Clean folder structure and best practices

---

## 🖼 Preview

![Homepage Preview](public/hero.jpg)

---

## 📁 Folder Structure

safaricom-rebrand/
├── app/ # App router pages
│ ├── layout.tsx # Root layout with Navbar and Footer
│ ├── page.tsx # Home page
│ ├── about/ # About page (if added)
│ ├── contact/ # Contact form or info
│ ├── services/ # Service listing
│ └── team/ # Meet the Team section
├── public/
│ └── images/team/ # Profile images for team members
├── components/ # Reusable UI components (e.g. Navbar)
├── styles/ # Global styles (if separate)
├── package.json
├── tsconfig.json
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started Locally

1. **Clone the repo:**

```bash
git clone https://github.com/nkatha1/FUTURE_FS_O3.git
cd safaricom-rebrand
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn
Run the development server:
npm run dev
# or
yarn dev
Visit http://localhost:3000 to view it in the browser.
🧑‍💼 Team Profiles (Meet the Team)
The /team page displays key Safaricom leadership members:

Dr. Peter Ndegwa — Group CEO

Dilip Pal — Chief Finance Officer

Fred W. Waithaka — Chief Corporate Affairs Officer

Images are stored locally under /public/images/team/.
🛠️ Built With
Next.js

React

TypeScript

Tailwind CSS

Vercel — for hosting and deployment

🌐 Deployment
This project is deployed using Vercel:

🔗 Live Site: https://future-fs-o3.vercel.app

Every push to main automatically deploys the latest version of the site.

✍️ Author
Nkatha Patience
💼 Frontend Developer
📧 nkatha@example.com
🔗 GitHub: @nkatha1

📄 License
This project is open source and available under the MIT License.

yaml
Copy
Edit

---

## ✅ What to Do Next

- Save this as `README.md` in your project root.
- Commit and push to GitHub:

```bash
git add README.md
git commit -m "Add detailed README"
git push

