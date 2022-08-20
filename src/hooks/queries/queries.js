import dayjs from "dayjs";
import { useState } from "react";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

const useQueries = () => {
  const [value, onChange] = useState(new Date());
  const dateCalendar = dayjs(value).format("D/MMMM YYYY");

  return {
    onChange,
    dateCalendar,
  };
};

export default useQueries;
