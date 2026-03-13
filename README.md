# ANTEL Events & Tours

> Premier Travel & Event Planning Agency in Kenya

[![Website](https://img.shields.io/badge/Website-anteleventsandtours.com-orange)](https://anteleventsandtours.com)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38bdf8)](https://tailwindcss.com/)

## 🌍 About

ANTEL Events & Tours is a comprehensive travel and event planning platform offering:

- **Luxury Hotel Bookings** - 50+ hotels across Kenya and international destinations
- **Event Planning** - Weddings, corporate events, birthdays, anniversaries
- **Tour Packages** - Customized tours for families, couples, groups, and solo travelers
- **Destinations** - Kenya, Tanzania, Mauritius, Seychelles, South Africa, Rwanda, Thailand

### 🎯 Key Features

- ✅ Real-time search across hotels, events, and destinations
- ✅ Advanced filtering and sorting (price range, name)
- ✅ Image lazy loading for optimal performance
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Shopping cart and checkout system
- ✅ Booking confirmation with email notifications
- ✅ SEO optimized with meta tags and structured data
- ✅ WhatsApp integration for instant support
- ✅ Error boundaries for graceful error handling

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.1** - Build tool
- **Tailwind CSS 3.4.11** - Styling
- **Shadcn/ui** - UI components
- **Framer Motion 12.23.9** - Animations
- **React Router 6.26.2** - Routing
- **React Query 5.56.2** - Data fetching

### Backend
- **Node.js** - Runtime
- **Express 5.1.0** - Web framework
- **MySQL 2** - Database
- **CORS** - Cross-origin support

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- MySQL database

### Setup

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Configure environment variables
cp backend/.env.example backend/.env
# Edit backend/.env with your database credentials

# Initialize database
mysql -u root -p < backend/schema.sql

# Start backend server
cd backend
npm start

# Start frontend (in new terminal)
npm run dev
```

## 🗄️ Database Schema

### Tables
- **bookings** - Hotel and event bookings
- **booking_items** - Individual cart items per booking
- **contact_messages** - Contact form submissions

## 📱 Features

### Search & Discovery
- Real-time search with debouncing
- Categorized results (hotels, events, destinations)
- Price display in search results
- Direct navigation from search

### Filtering & Sorting
- Price range slider (KSh 0 - KSh 100,000+)
- Sort by: Price (Low/High), Name (A-Z/Z-A)
- Mobile-friendly filter drawer
- Reset filters functionality

### Booking Flow
1. Browse destinations or events
2. View package details with image gallery
3. Add to cart with customization
4. Checkout with M-PESA payment
5. Receive booking confirmation

### User Experience
- Empty states for cart, search, filters
- Loading skeletons for images
- Breadcrumb navigation
- Image lightbox viewer
- Cart persistence warning
- Error boundaries

## 🎨 Design System

### Colors
- **Primary**: Orange (#f97316)
- **Secondary**: Dark Blue (#0a1628)
- **Background**: White (#ffffff)
- **Text**: Dark Gray (#1f2937)

### Typography
- **Font Family**: System fonts
- **Headings**: Bold, 2xl-5xl
- **Body**: Regular, base-lg

## 📊 Performance

- **Lazy Loading**: Images load on viewport entry
- **Code Splitting**: Route-based splitting ready
- **Caching**: React Query + localStorage
- **Bundle Size**: Optimized with Vite
- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO)

## 🔍 SEO

- Dynamic meta tags per page
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Schema.org markup
- Sitemap ready

## 📞 Contact

- **Phone**: +254 725 814767
- **Email**: info@anteleventsandtours.com
- **Address**: 00200, Nairobi, Kenya
- **WhatsApp**: [Chat with us](https://wa.me/254725814767)

### Social Media
- [Facebook](https://www.facebook.com/people/ANTEL-Events-Tours/100063708379128/)
- [Instagram](https://www.instagram.com/antel_events_tours/)
- [TikTok](https://www.tiktok.com/@antel_events_tours)

## 🛠️ Development

### Available Scripts

```sh
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Backend
cd backend
npm start            # Start backend server
```

### Project Structure

```
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # Shadcn UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchBar.tsx
│   │   └── ...
│   ├── pages/          # Route pages
│   │   ├── Index.tsx
│   │   ├── Destination.tsx
│   │   ├── EventPackage.tsx
│   │   └── ...
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities
│   └── App.tsx         # Main app component
├── backend/
│   ├── index.js        # Express server
│   ├── db.js           # Database connection
│   └── schema.sql      # Database schema
└── public/             # Static assets
```

## 🚢 Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)

See [QUICK_START.md](./QUICK_START.md) for 5-minute deployment guide.

### Frontend (Vercel)
- Build: `npm run build`
- Deploy to: Vercel, Netlify, or any static host
- Environment Variable: `VITE_API_URL` (set to backend URL)

### Backend (Railway/Heroku/DigitalOcean)
- Deploy to: Railway, Heroku, DigitalOcean
- Database: MySQL on cloud provider
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions

### Environment Variables

**Frontend (.env.local or Vercel)**
```env
VITE_API_URL=https://your-backend-url.com
```

**Backend (.env)**
```env
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=antel_events
PORT=4000
```

For complete deployment guide, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📝 License

Copyright © 2024 ANTEL Events & Tours. All rights reserved.

## 🤝 Contributing

This is a private project. For inquiries, contact info@anteleventsandtours.com

---

**Built with ❤️ by ANTEL Events & Tours Team**
