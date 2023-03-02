export default function Error({ error }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>{JSON.stringify(error)}</h2>
    </div>
  );
}
