export default function SectionContainer({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col items-start'>
      <h3 className='mt-8 text-lg font-bold'>{label}</h3>
      {children}
    </div>
  )
}
