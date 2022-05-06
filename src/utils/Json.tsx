export default function Json({
  children,
  indent = false,
}: {
  children: any
  indent?: boolean
}) {
  return <pre>{JSON.stringify(children, null, indent ? 2 : 0)}</pre>
}
