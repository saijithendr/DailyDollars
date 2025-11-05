# Financial Modeler - What-If Calculator

## Overview

A financial visualization tool that helps users understand the long-term impact of daily expenses through compound interest calculations. The application transforms abstract financial concepts into visceral, memorable experiences by showing what small recurring expenses could become if invested instead. Built as a single-page application with interactive calculators and data visualizations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React with TypeScript as the primary UI framework
- Vite for development server and production builds
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query for server state management and data fetching

**UI Component System**
- shadcn/ui component library (Radix UI primitives with Tailwind styling)
- "New York" style variant configured in components.json
- Comprehensive component library including forms, dialogs, charts, and data display components
- Custom component examples provided for all major UI elements

**Styling Approach**
- Tailwind CSS with custom theme configuration
- CSS variables for theming (light/dark mode support built-in)
- Custom design tokens for spacing, colors, and typography
- Google Fonts integration: Inter (primary) and Space Grotesk (display/numbers)
- Design guidelines emphasize fintech-inspired clean UI with educational clarity

**State Management**
- Local component state with React hooks
- No global state management library (Redux, Zustand, etc.)
- Calculator state managed through controlled components
- Real-time calculation updates on input change

**Data Visualization**
- Recharts library for compound interest growth charts
- Interactive area charts showing spending vs. investment growth over time
- Timeline slider for exploring different year projections
- Responsive chart containers using ResponsiveContainer

**Key Features**
- Interactive financial calculator with real-time updates
- Compound interest visualization with comparison charts
- Scenario cards for common expense examples (coffee, dining, subscriptions)
- Milestone achievements display (emergency fund, vacation, down payments)
- Hero section with animated number counter for engagement

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Custom Vite middleware integration for development
- HTTP server creation using Node's native `http` module

**Development vs Production**
- Development: Vite dev server with HMR (Hot Module Replacement)
- Production: Static file serving from built assets
- Custom logging middleware for API request tracking

**API Structure**
- RESTful API endpoints prefixed with `/api`
- Routes registered through `registerRoutes` function
- Middleware for JSON parsing and request body buffering
- Currently minimal backend logic (storage interface prepared but unused)

**Data Storage Interface**
- Abstract `IStorage` interface for CRUD operations
- In-memory storage implementation (`MemStorage`)
- User schema defined with Drizzle ORM
- Prepared for PostgreSQL migration (Drizzle config present)

**Session Management**
- Connect-pg-simple package included for PostgreSQL session storage
- Session infrastructure prepared but not actively implemented
- Express session middleware ready for authentication features

### Database Architecture

**ORM & Schema**
- Drizzle ORM for type-safe database operations
- PostgreSQL dialect configured in drizzle.config.ts
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Schema validation with drizzle-zod integration

**Current Schema**
- Users table with UUID primary key, username, and password fields
- Unique constraint on username
- Schema defined in shared/schema.ts for use across client/server

**Migration Strategy**
- Migrations output to ./migrations directory
- Schema push command available via `npm run db:push`
- Database URL required via environment variable

**Note**: The application currently uses in-memory storage. The database infrastructure is configured and ready but not actively used in the current implementation. This allows for easy future expansion to persistent storage.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive collection of unstyled, accessible UI primitives (accordion, dialog, dropdown, slider, tooltip, etc.)
- **Recharts**: Composable charting library for React
- **cmdk**: Command menu component
- **Embla Carousel**: Carousel/slider functionality
- **Lucide React**: Icon library
- **class-variance-authority**: Utility for managing component variants
- **tailwind-merge & clsx**: Utility functions for className management

### Form Management
- **React Hook Form**: Form state management with @hookform/resolvers for validation
- **Zod**: Schema validation for forms and data

### Database & Backend
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **Drizzle ORM**: Type-safe ORM with PostgreSQL support
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **Vite**: Build tool and dev server
- **esbuild**: JavaScript bundler for server-side code
- **TypeScript**: Type safety across the entire application
- **PostCSS & Autoprefixer**: CSS processing
- **tsx**: TypeScript execution for development

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit IDE integration
- **@replit/vite-plugin-dev-banner**: Development environment banner

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing library

### Fonts
- **Google Fonts**: Inter (400, 500, 600, 700) and Space Grotesk (700) loaded via CDN