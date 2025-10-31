# 🍛 CookBuddy - Your Friendly Cooking Companion

**CookBuddy** is a modern web application that helps you discover authentic South Indian recipes with intelligent search capabilities. Find ingredients, quantities, and cooking videos for over 250 traditional dishes.

## 🌟 Features

- **Smart Search**: Find recipes with typo-tolerant search (e.g., "iddly" finds "Idli")
- **250+ Recipes**: Comprehensive collection of authentic South Indian dishes
- **Recipe Details**: Complete ingredients list with quantities
- **YouTube Integration**: Watch cooking videos with your API key
- **Responsive Design**: Works beautifully on desktop and mobile
- **Custom Branding**: Professional UI with custom logo and theming

## 🚀 Live Demo

- **Production**: [https://krazatec.github.io/cookbuddy/](https://krazatec.github.io/cookbuddy/)
- **Alternative**: Deploy on Vercel or other platforms

## 🛠️ Technologies Used

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Search**: Fuse.js for fuzzy search
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages + GitHub Actions

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control

### Local Development

```bash
# Clone the repository
git clone https://github.com/KRAZATEC/cookbuddy.git

# Navigate to project directory
cd cookbuddy

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080 in your browser
```

### Build for Production

```bash
# Build for GitHub Pages
npm run build

# Build for Vercel
npm run build:vercel

# Preview production build
npm run preview
```

## 🚀 Deployment

### GitHub Pages (Automatic)
The project automatically deploys to GitHub Pages via GitHub Actions when you push to the `master` branch.

### Vercel
1. Import your GitHub repository in Vercel dashboard
2. Vercel will automatically detect the `vercel.json` configuration
3. Deploy with one click!

### Manual Deployment
```bash
# Deploy to GitHub Pages
npm run deploy
```

## 🎨 Customization

### Adding Recipes
Edit `src/data/recipes.json` to add new recipes:
```json
{
  "name": "Your Recipe Name",
  "ingredients": ["ingredient1", "ingredient2"],
  "quantities": ["1 cup", "2 tbsp"]
}
```

### YouTube Integration
1. Get a YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Enter your API key in the app to enable cooking videos

### Styling
- Customize colors in `tailwind.config.ts`
- Modify components in `src/components/ui/`
- Update logo by replacing `public/cookbuddy-logo.jpg`

## 📝 Project Structure

```
cookbuddy/
├── src/
│   ├── components/        # React components
│   ├── data/             # Recipe data
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── pages/            # Page components
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions
├── vercel.json          # Vercel configuration
└── vite.config.ts       # Vite configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Recipe data sourced from authentic South Indian cuisine
- UI components powered by shadcn/ui
- Search functionality enhanced with Fuse.js
- Icons provided by Lucide React

---

Made with ❤️ for South Indian food lovers everywhere! 🍛✨
