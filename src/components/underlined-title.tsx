interface Props {
  title: string;
}

export function UnderlinedTitle({ title }: Props) {
  return (
    <div className="relative mb-8 sm:mb-12 text-center">
      <h2 className="mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl sm:text-4xl font-bold text-transparent md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto h-1 w-24 sm:w-32 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
    </div>
  );
}
