const Tag = ({ name }: { name: string }) => {
  return (
    <div className="bg-primary text-secondary rounded-full px-2 py-1 font-light text-[12px]">
      # {name}
    </div>
  )
}

export default Tag