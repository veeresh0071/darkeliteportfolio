# Dark Elite Creations - Single Page Portfolio Website

## Overview
This is a single-page portfolio website for Dark Elite Creations, showcasing all company information, clients, works, and contact details on one seamless page with smooth scrolling navigation.

## Website Structure

### Single Page Layout

All content is on the home page (`/`) with the following sections accessible via smooth-scrolling navigation:

1. **Home Section (#home)** 
   - Hero section with company tagline
   - Call-to-action buttons

2. **About Section (#about)**
   - Company introduction
   - Company statistics (650+ projects, 95+ clients, 15+ team members, 2 years experience)
   - Core values and principles (6 value cards)

3. **Clients Section (#clients)**
   - Animated marquee display of 33+ client logos
   - Three rows of scrolling logos

4. **Works Section (#works)**
   - Portfolio categories grid (9 categories):
     - Website Development (clickable - scrolls to #website-development)
     - App Development
     - Digital Marketing
     - UI/UX Design (clickable - scrolls to #ui-ux-design)
     - Graphic Design (clickable - scrolls to #graphic-design)
     - Production
     - Animation
     - VFX/CGI
     - Print Design

5. **Website Development Projects (#website-development)**
   - 12 website projects with screenshots
   - Live website links
   - Smooth scroll back to works section

6. **UI/UX Design Projects (#ui-ux-design)**
   - 8 mobile app UI designs
   - Portfolio grid layout
   - Smooth scroll back to works section

7. **Graphic Design Projects (#graphic-design)**
   - 12 graphic design samples
   - Grid layout with hover effects
   - Smooth scroll back to works section

8. **Contact Section (#contact)**
   - Contact form (name, email, company, mobile, message)
   - Contact information cards
   - Social media links
   - Google Maps embed
   - Floating WhatsApp button

### Navigation Flow

- Click on "Website Development", "UI/UX Design", or "Graphic Design" in the Works section
- Page smoothly scrolls to the respective project showcase section
- Each project section has a "Back to Works" link to return to the main works grid
- All navigation happens on the same page - no page reloads

## Navigation

The navbar includes smooth-scrolling anchor links:
- Home → scrolls to #home
- About → scrolls to #about
- Clients → scrolls to #clients
- Works → scrolls to #works
- Contact → scrolls to #contact

Additional anchor links within the page:
- #website-development → Website projects
- #ui-ux-design → UI/UX projects
- #graphic-design → Graphic design projects

All navigation uses smooth scroll behavior for a seamless user experience.

## Assets

### Client Logos
Located in `/public/clients/` - 33 client logos displayed in animated marquees

### Work Images
Located in `/public/works/` - Project category images

### Portfolio Images
- `/public/website-portfolio/` - 12 website development screenshots
- `/public/uiux/` - 8 UI/UX design mockups
- `/public/graphic-design/` - 12 graphic design samples

## Contact Information

- **Email:** hello@darkelitecreations.com
- **Support Email:** Darkelitecreations@gmail.com
- **Phone:** +91 8073674176
- **WhatsApp:** +91 8073674176
- **Address:** CTS No. 4855/78 3rd floor, Oneness Empire, T1-A, Sadashiv Nagar, Belagavi, Karnataka 590019

## Social Media

- Facebook: https://www.facebook.com/profile.php?id=61551983787864
- Instagram: https://www.instagram.com/darkelitecreations/
- LinkedIn: https://www.linkedin.com/company/100664240/
- YouTube: https://www.youtube.com/@DEcreations

## Features

- **Single Page Design**: All content on one page for easy navigation
- **Smooth Scrolling**: Seamless transitions between sections
- **In-Page Project Showcases**: Click work categories to view projects without leaving the page
- **Responsive Layout**: Works on all device sizes
- **Animated Elements**: 3D rotating circles, blinking dots
- **Interactive Forms**: Contact form with validation
- **Floating WhatsApp**: Quick access to WhatsApp chat
- **Google Maps Integration**: Embedded location map
- **Dark/Light Theme Toggle**: User preference support
- **External Links**: Website projects link to live sites in new tabs

## Technology Stack

- React with TypeScript
- TanStack Router for routing
- Framer Motion for animations
- GSAP for counter animations
- Tailwind CSS for styling
- Vite for build tooling

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Build Output

The production build creates optimized static files in the `dist/` directory ready for deployment.

## Project Counts

- **Website Development**: 12 projects
- **UI/UX Design**: 8 projects
- **Graphic Design**: 12 projects
- **Total**: 32 portfolio projects showcased
