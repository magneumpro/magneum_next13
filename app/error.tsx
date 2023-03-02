export default function Error({ error }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <h2>{JSON.stringify(error)}</h2>
    </div>
  );
}
