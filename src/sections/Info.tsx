import Card from '../components/Card';

interface Props {
  data: {
    label: string;
    value: string;
  }[];
}

export default ({ data }: Props) => (
  <Card title="Information">
    <div className="flex flex-col space-y-2">
      {data.map(({ label, value }) => (
        <div className="flex justify-between" key={label}>
          <div className="text-gray-500">{label}</div>
          <div className="font-medium text-right text-gray-600">{value}</div>
        </div>
      ))}
    </div>
  </Card>
);
