import { Badge } from "@/components/ui/badge";

export function TagList({ tags, label = "Tags" }: { tags: string[]; label?: string }) {
  if (tags.length === 0) return null;
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="outline">#{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}
