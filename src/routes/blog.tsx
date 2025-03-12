import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: BlogComponent,
})

function BlogComponent() {
  return (
    <div className="p-2">
      <h3>Blog</h3>
    </div>
  )
}
