
# Medicare Frontend

A modern, responsive web application built with Next.js for booking doctor appointments effortlessly. This frontend provides an intuitive interface for patients to find doctors, schedule appointments, and manage their healthcare needs.

## Features

- **User Authentication**: Secure login and registration system
- **Doctor Directory**: Browse and search for healthcare professionals by specialization
- **Appointment Booking**: Easy scheduling with instant confirmation
- **Dashboard**: Personal dashboard to view upcoming appointments, completed visits, and saved doctors
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Radix UI components

## Tech Stack

- **Framework**: Next.js 16
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide React
- **Utilities**: Class Variance Authority, clsx, tailwind-merge

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── _components/       # Page-specific components
│   │   ├── Header.jsx     # Navigation header
│   │   └── Hero.jsx       # Landing page hero section
│   ├── dashboard/         # User dashboard page
│   ├── doctors/           # Doctors listing page
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # Reusable components
│   └── ui/                # UI components (Button, etc.)
├── lib/                   # Utility functions
├── public/                # Static assets
├── package.json           # Dependencies and scripts
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── eslint.config.mjs      # ESLint configuration
└── tsconfig.json          # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support or questions, please contact the development team.
