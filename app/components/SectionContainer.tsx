export default function SectionContainer({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col items-center sm:items-start'>
      <h3 className='mt-12 text-lg font-bold mb-2 border-b-[1px] border-dark dark:border-light'>
        {label}
      </h3>
      {children}
    </div>
  )
}
