import Card from '../components/Card';

interface Props {
  data: {
    label: string;
    value: string;
  }[];
}

export default ({ data }: Props) => (
  <Card title="Information" className="min-w-fit">
    <div className="flex flex-col space-y-2 w-full">
      {data.map(({ label, value }) => (
        <div className="flex justify-between space-x-2" key={label}>
          <div className="text-gray-500">{label}</div>
          <div className="font-medium text-right text-gray-600 whitespace-nowrap">
            {value}
          </div>
        </div>
      ))}
    </div>
  </Card>
);
