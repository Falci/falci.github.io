import { EntityType, IconType } from '../types';
import Card from './Card';
import Entry from './Entry';
import ViewMore from './ViewMore';

interface Props {
  title: string;
  Icon: IconType;
  data: EntityType[];
  linkedinUrl: string;
}

export default ({ title, Icon, data, linkedinUrl }: Props) => (
  <Card title={title}>
    <div className="flex flex-col divide-y">
      {data.map((item) => (
        <Entry
          data={item}
          Icon={Icon}
          key={item.company}
          breakPage={item.company === 'Adevinta'}
        />
      ))}
      <ViewMore href={linkedinUrl} />
    </div>
  </Card>
);
