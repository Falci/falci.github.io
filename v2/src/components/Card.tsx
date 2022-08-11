interface Props {
  title: string;
  children: React.ReactNode;
}

export default ({ title, children }: Props) => (
  <section
    id="info"
    className="bg-white rounded-xl shadow-lg overflow-hidden w-full p-4 min-w-[250px]"
  >
    <div className="text-lg font-bold mb-4">{title}</div>
    {children}
  </section>
);
