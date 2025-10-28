import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecipeCardProps {
  name: string;
  ingredients: string[];
  quantities: string[];
}

const RecipeCard = ({ name, ingredients, quantities }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden border-2 hover:shadow-[var(--shadow-card)] transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-primary to-accent">
        <CardTitle className="text-2xl text-primary-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Ingredients:</h3>
        <div className="space-y-2">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="font-medium text-foreground">{ingredient}</span>
              <span className="text-muted-foreground">{quantities[index]}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
