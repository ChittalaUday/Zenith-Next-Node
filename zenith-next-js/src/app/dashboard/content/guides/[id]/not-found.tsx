export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">404 - Not Found</h1>
        <p className="text-muted-foreground">This guide edit route does not exist.</p>
        <p className="mt-4 text-sm text-gray-500">If you are seeing this for /new/edit, your dynamic route is not being matched. Check your [id]/edit.tsx and restart the dev server.</p>
      </div>
    </div>
  );
} 