import Calendar from '../icons/Calendar';
import Location from '../icons/Location';
import { EntityType, IconType } from '../types';

interface Props {
  Icon: IconType;
  data: EntityType;
}

export default ({ Icon, data }: Props) => (
  <div className="flex space-x-2 py-4 print:py-2">
    <div className="rounded-lg overflow-hidden w-16 h-14">
      <img src={data.image} alt={data.company} width={58} height={58} />
    </div>
    <div className="w-full">
      <span className="font-semibold">{data.title}</span>
      <div className="flex justify-between flex-wrap items-end">
        <div className="flex space-x-2 text-gray-500">
          <div className="flex space-x-1">
            <Icon className="h-6 w-6" />
            <span>{data.company}</span>
          </div>
          <div className="flex space-x-1">
            <Location className="h-6 w-6" />
            <span>{data.location}</span>
          </div>
        </div>

        <div className="flex space-x-1 text-gray-500">
          <Calendar className="h-6 w-6" />
          <span>{data.period}</span>
        </div>
      </div>
      {data.text && (
        <div className="mt-3 text-gray-600 text-justify">{data.text}</div>
      )}
    </div>
  </div>
);
