interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default ({ title, children, className }: Props) => (
  <section
    id="info"
    className={`bg-white rounded-xl shadow-lg print:rounded-none print:shadow-none overflow-hidden w-full p-4 print:py-0 print:max-w-[730px] ${className}`}
  >
    <div className="text-lg font-bold mb-4 print:mb-0">{title}</div>
    {children}
  </section>
);
