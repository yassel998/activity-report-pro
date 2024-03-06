import dayjs from "dayjs";
import "./workCalendar.scss";

const WorkCalendar = () => {
  //get the selected month and year
  const currentDate = dayjs();

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  //fetch holidays for the given year from the API
  async function fetchHolidays(
    year: number
  ): Promise<{ [key: string]: string }> {
    const response = await fetch(
      `https://calendrier.api.gouv.fr/jours-feries/metropole/${year}.json`
    );
    const data = await response.json();
    return data;
  }

  //get holidays for a specific month
  async function getHolidaysForMonth(
    year: number,
    month: number
  ): Promise<number[]> {
    const holidays = await fetchHolidays(year);

    //filter holidays for the given month
    const holidaysForMonth = Object.entries(holidays).filter(([dateStr]) => {
      const date = new Date(dateStr);
      return date.getMonth() + 1 === month; //because months are 0-indexed in JS Date objects
    });

    //extract dates from filtered holidays
    const datesForMonth = holidaysForMonth.map(([dateStr]) => {
      const date = new Date(dateStr);
      return date.getDate(); //get day of the month
    });

    return datesForMonth;
  }

  //example usage: Get holidays for May 2024
  const year = 2024;
  const month = 5;
  getHolidaysForMonth(year, month)
    .then((dates) => {
      console.log("Holidays for May 2024:", dates);
    })
    .catch((error) => {
      console.error("Error fetching holidays:", error);
    });
  const holidayDates: number[] = [8, 9, 20, 22, 27]; //example holiday dates for May

  const generateDate = (
    month = dayjs().month(), //current month
    year = dayjs().year() //current year
  ) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    //determine the day of the week for the first date of the month
    //adjust day() value to make Monday (Lun=Lundi) the first day of the week (0)
    let dayOfWeek =
      firstDateOfMonth.day() === 0 ? 6 : firstDateOfMonth.day() - 1;

    const arrayOfDate = [];

    //prefix with null for days before the first day of the current month
    for (let i = 0; i < dayOfWeek; i++) {
      arrayOfDate.push(null);
    }

    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
      arrayOfDate.push({
        currentMonth: true,
        date: firstDateOfMonth.date(i),
      });
    }

    return arrayOfDate;
  };

  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <div className="workCalendar">
      <div className="workCalendarHeader">
        <span className="date-display">
          {months[currentDate.month()]}, {currentDate.year()}
        </span>
        <span>
          <select name="" id="">
            <option value="">projet 1</option>
            <option value="">projet 2</option>
          </select>
        </span>
      </div>
      <div className="days">
        {days.map((day, index) => {
          return <h6 key={index}>{day}</h6>;
        })}
      </div>
      <div className="workCalendarContainer">
        {generateDate(currentDate.month(), currentDate.year()).map(
          (item, index) => {
            const isWeekend = item && [6, 0].includes(item.date.day());
            const isHoliday = item && holidayDates.includes(item.date.date());

            //combine checks for weekend or holiday to decide on applying the grey background
            const isNonWorkingDay = isWeekend || isHoliday;

            //use a specific class for non-working days or a default one for other days
            const dateClassName = isNonWorkingDay
              ? "date-container date-non-working"
              : "date-container";

            if (!item) {
              return <div key={index} className="emptyDay"></div>;
            }
            return (
              <div
                key={index}
                className={dateClassName}
                onClick={() => !isNonWorkingDay}
              >
                <div className="dates">
                  <h6>{item.date.date()}</h6>
                </div>
                {!isNonWorkingDay && <div className="dynamic-number">0</div>}
                {/* just an example initial number */}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default WorkCalendar;
