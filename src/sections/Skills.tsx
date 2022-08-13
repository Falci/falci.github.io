import Card from '../components/Card';

interface Props {
  data: string[];
}

export default ({ data }: Props) => (
  <Card title="Skills">
    <div className="flex flex-wrap md:flex-col lg:flex-row print:flex-col">
      {data.map((item) => (
        <div
          className="bg-blue-100 text-blue-700 px-2 py-1 mb-2 mr-2 text-sm rounded-lg shadow text-center print:text-left print:rounded-none print:shadow-none print:mb-0"
          key={item}
        >
          {item}
        </div>
      ))}

      <a
        href="https://github.com/falci"
        className="text-blue-600 px-2 py-1 text-sm rounded-lg hover:underline print:hidden"
      >
        and more
      </a>
    </div>
  </Card>
);
