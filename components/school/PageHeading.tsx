interface PageHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeading({ title, description, className = "" }: PageHeadingProps) {
  return (
    <div className={`mx-auto mb-12 max-w-2xl text-center ${className}`}>
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
}