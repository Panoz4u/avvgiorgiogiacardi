# Studio Legale Monviso - Website

Modern, professional website for Studio Legale Monviso built with React and Supabase.

## Features

- Responsive design optimized for all devices
- Contact form with Supabase backend
- Professional practice areas showcase
- Multi-location information
- Modern UI with Tailwind CSS and shadcn/ui components

## Tech Stack

- **Frontend**: React 19, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Database, Edge Functions)
- **Build Tool**: Create React App with CRACO
- **Styling**: Tailwind CSS with custom configuration

## Project Structure

```
lawfirm-monviso/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # shadcn/ui components
│   ├── public/          # Static assets
│   └── build/           # Production build
├── backend/            # Backend API (if needed)
└── supabase/           # Supabase migrations
```

## Build & Deploy

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

```bash
# Install dependencies
npm install

# Start development server (from frontend directory)
cd frontend
npm start
```

### Production Build

The site is configured to run from the `gg04` subdirectory (via the `homepage` value in `frontend/package.json`). Update this value or set `PUBLIC_URL` if deploying elsewhere.

```bash
# Build the application
npm run build
```

The build creates an optimized production bundle in `frontend/build/`.

### Deployment

The application is configured for automatic deployment. The production build is located in `frontend/build/` and includes:

- Optimized JavaScript bundles
- Minified CSS
- Static assets
- index.html entry point

#### Deployment Options

1. **Static Hosting** (Vercel, Netlify, etc.)
   - Deploy the `frontend/build` directory
   - Set build command: `npm run build`
   - Set publish directory: `frontend/build`

2. **Supabase Storage**
   - Upload the build folder to Supabase Storage
   - Configure as a static website

3. **Traditional Web Server**
   - Copy `frontend/build` contents to server
   - Configure web server to serve static files
   - Ensure proper routing for single-page application

## Database

The application uses Supabase for data persistence:

- **Contacts Table**: Stores contact form submissions
- **RLS Policies**: Secure access control
- **Edge Functions**: Server-side logic (if needed)

### Database Setup

Migrations are located in `supabase/migrations/` and are automatically applied during deployment.

## Environment Variables

Required environment variables are configured in `.env`:

```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

## Build Configuration

The application uses CRACO for custom webpack configuration:

- ESLint disabled in production builds for compatibility
- Custom path aliases (@/ for src/)
- Optimized bundle size and performance

## Support

For deployment issues or questions, please contact the development team.

## License

Proprietary - All rights reserved
