import PeopleIcon from "@mui/icons-material/People";

interface EventCardProps {
  event: NavetEvent;
}

export interface NavetEvent {
  title: string;
  startTime: string;
  description: string;
  companyId: string;
  responsibleId: string;
  food: string;
  updatedAt: string;
  location: string;
}

const EventCard = ({ event }: EventCardProps) => {
  const { title, startTime } = event;
  const startDate = new Date(startTime).toDateString();
  return (
    <div className="bg-eventGray text-white h-[200px] flex items-center rounded-md mt-10 ">
      <div className="w-[216px] h-[192px] bg-white rounded-md"></div>
      <div className="w-[400px] h-48">
        <h4 className="text-lg">{title}</h4>
        <p>Introduksjon til Frontend-utvikling med React</p>
      </div>
      <div className="w-[400px] h-48">
        <div className="flex">
          <p>49</p>
          <PeopleIcon className="" />
          <p>{startDate}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
