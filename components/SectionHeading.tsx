type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium capitalize mb-4 text-center text-gray-100">{children}</h2>;
}
