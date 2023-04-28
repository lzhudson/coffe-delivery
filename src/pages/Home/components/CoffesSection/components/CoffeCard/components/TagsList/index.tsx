import { TagsListContainer } from './style'

interface TagListProps {
  tags: string[]
}

export function TagsList({ tags }: TagListProps) {
  return (
    <TagsListContainer>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </TagsListContainer>
  )
}
