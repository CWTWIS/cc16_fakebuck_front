export default function ErrorMessage({ error }) {
  return <small className="text-red-500">{error ? error : null}</small>;
}
