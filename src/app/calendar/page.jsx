import Calendar from "../../components/Calender";
import DefaultLayout from "../../components/Layouts/DefaultLayout";

export const metadata= {
  title: "Lavaash Dashboard",
  description:
    "Lavaash Dashboard",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <Calendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
