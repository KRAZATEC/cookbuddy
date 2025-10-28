import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface YouTubeEmbedProps {
  dishName: string;
  apiKey: string;
}

const YouTubeEmbed = ({ dishName, apiKey }: YouTubeEmbedProps) => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      if (!apiKey) {
        setError("Please enter your YouTube API key above");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const searchQuery = encodeURIComponent(`${dishName} South Indian recipe cooking`);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchQuery}&type=video&key=${apiKey}`
        );

        if (!response.ok) {
          if (response.status === 403) {
            throw new Error("Invalid API key or quota exceeded");
          }
          throw new Error(`Failed to fetch video: ${response.status}`);
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        } else {
          setError("No video found for this recipe");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load video");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [dishName, apiKey]);

  return (
    <Card className="overflow-hidden border-2">
      <CardHeader className="bg-gradient-to-r from-secondary to-primary">
        <CardTitle className="text-xl text-primary-foreground">
          🎥 How to Cook {dishName}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {loading && (
          <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-64 bg-destructive/10 rounded-lg">
            <p className="text-destructive font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && videoId && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-[var(--shadow-soft)]">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${dishName} Recipe`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default YouTubeEmbed;
