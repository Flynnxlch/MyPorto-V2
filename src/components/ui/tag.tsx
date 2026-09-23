export function TagList({ tags, label }: { tags: string[]; label?: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="badge badge-sm border-base-300 bg-base-200 font-mono text-base-content/80">
          {tag}
        </li>
      ))}
    </ul>
  )
}
