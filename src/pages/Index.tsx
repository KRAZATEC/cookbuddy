import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search, UtensilsCrossed } from "lucide-react";
import Fuse from "fuse.js";
import recipes from "@/data/recipes.json";
import RecipeCard from "@/components/RecipeCard";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { useToast } from "@/hooks/use-toast";

interface Recipe {
  name: string;
  ingredients: string[];
  quantities: string[];
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const { toast } = useToast();

  // Initialize Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(recipes, {
        keys: ["name"],
        threshold: 0.4, // Allows for typos and partial matches
        includeScore: true,
      }),
    []
  );

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSelectedRecipe(null);
      return;
    }

    const results = fuse.search(query);

    if (results.length > 0) {
      const bestMatch = results[0].item as Recipe;
      setSelectedRecipe(bestMatch);
      toast({
        title: "Recipe Found! 🎉",
        description: `Showing recipe for ${bestMatch.name}`,
      });
    } else {
      setSelectedRecipe(null);
      toast({
        title: "No Match Found",
        description: "Try searching for another South Indian dish",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary via-accent to-secondary py-8 shadow-[var(--shadow-soft)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <UtensilsCrossed className="w-10 h-10 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              CookBuddy
            </h1>
          </div>
          <p className="text-center text-primary-foreground/90 text-lg">
            Your friendly cooking companion for authentic recipes
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* API Key Input */}
        <div className="mb-8 p-6 bg-card rounded-2xl shadow-[var(--shadow-card)] border-2 border-border">
          <label htmlFor="apiKey" className="block text-sm font-semibold mb-3 text-foreground">
            YouTube API Key (required for video):
          </label>
          <Input
            id="apiKey"
            type="password"
            placeholder="Enter your YouTube Data API v3 key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="text-base h-12 border-2 focus:shadow-[var(--shadow-soft)]"
          />
          <p className="mt-3 text-sm text-muted-foreground">
            Get your free API key from{" "}
            <a
              href="https://console.cloud.google.com/apis/credentials"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Google Cloud Console
            </a>
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a dish (e.g., Idli, Dosa, Sambar)..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-14 pr-6 py-7 text-lg rounded-2xl border-2 shadow-[var(--shadow-card)] focus:shadow-[var(--shadow-soft)] transition-all"
            />
          </div>
          <p className="mt-3 text-center text-muted-foreground">
            Try searching with typos - our smart search handles them! (e.g., "iddly" works)
          </p>
        </div>

        {/* Results */}
        {selectedRecipe ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <RecipeCard
              name={selectedRecipe.name}
              ingredients={selectedRecipe.ingredients}
              quantities={selectedRecipe.quantities}
            />
            <YouTubeEmbed dishName={selectedRecipe.name} apiKey={apiKey} />
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-muted/50 rounded-full mb-6">
              <UtensilsCrossed className="w-16 h-16 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Start Your Culinary Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Search for any of the 250 South Indian dishes to see ingredients and watch cooking
              videos
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            🍛 CookBuddy - Featuring 250 authentic South Indian recipes with smart search technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
