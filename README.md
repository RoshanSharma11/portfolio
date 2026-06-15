# Roshan Sharma - Portfolio

A modern, responsive portfolio website built with Next.js 16, showcasing my projects, skills, and professional experience as a Full Stack Software Engineer.

## Tech Stack

- **Framework:** Next.js 16.1.4 with App Router and Turbopack
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (Google Fonts)
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image Component

## Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Dark Theme** - Clean, modern dark UI with zinc color palette
- **Interactive Components:**
  - Mobile-friendly sidebar navigation
  - Skills section with expandable grid
  - Contact form modal
  - Timeline-based experience and education sections
  - Project showcase with hover effects
- **Component-Based Architecture** - Modular, reusable components
- **SEO Optimized** - Proper metadata and semantic HTML

## Sections

1. **Home** - Hero section with introduction and CTA
2. **About** - Professional bio, experience timeline, and education
3. **Projects** - Showcase of recent work and side projects
4. **Skills** - Technology stack with detailed descriptions (14 skills)
5. **Contact** - Get in touch form with social links

## Skills Featured

**Main Skills:** Python, TypeScript, Go, Node.js, React, Next.js

**Additional Skills:** PostgreSQL, MongoDB, Redis, Docker, Apache Kafka, GraphQL, Kubernetes, System Design & Architecture

## Social Links

- [GitHub](https://github.com/RoshanSharma11)
- [LinkedIn](https://www.linkedin.com/in/theroshansharma)
- [Instagram](https://www.instagram.com/roshansharma_11/)
- Resume: `/resume.pdf`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RoshanSharma11/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Add your profile image:
   - Place your image at `public/profile.jpeg`

4. Add your resume:
   - Place your PDF at `public/resume.pdf`

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Skills** - Edit `constants/skills.ts`
2. **Experience** - Update `experienceData` in `app/about/page.tsx`
3. **Education** - Update `educationData` in `app/about/page.tsx`
4. **Projects** - Edit `app/projects/page.tsx`
5. **Social Links** - Update `socialIcons` in `components/Sidebar.tsx`
6. **Metadata** - Edit `app/layout.tsx` for SEO

### Add Technology Icons

Place icon images in `public/icons/` and reference them in `constants/skills.ts`

## Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RoshanSharma11/portfolio)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Roshan Sharma - [LinkedIn](https://www.linkedin.com/in/theroshansharma)

Project Link: [https://github.com/RoshanSharma11/portfolio](https://github.com/RoshanSharma11/portfolio)
