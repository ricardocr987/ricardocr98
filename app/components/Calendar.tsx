import { Dispatch, SetStateAction } from 'react';
import { DateProps } from '../meeting/page';

type CalendatProps = {
    date: DateProps
    setDate: Dispatch<SetStateAction<DateProps>>
}

const Calendar = ({date, setDate}: CalendatProps) => {
    const getMonthName = (monthIndex: number) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        return months[monthIndex];
    };

    const isSelectedDay = (day: number, month: number, year: number) => {
        return day === date.day && month === date.month && year === date.year;
    };

    const renderCalendar = () => {
        const days = [];
        const totalDaysInMonth = new Date(date.year, date.month + 1, 0).getDate();
        let firstDayOfMonth = new Date(date.year, date.month, 0).getDay();
    
        let dayCounter = 1;
    
        for (let week = 0; dayCounter <= totalDaysInMonth; week++) {
            const weekDays = [];
    
            if (week === 0) {
                for (let i = 0; i < firstDayOfMonth; i++) {
                    weekDays.push(<td key={`empty-${i}`} />);
                }
            }
    
            for (let dayOfWeek = firstDayOfMonth; dayOfWeek < 7 && dayCounter <= totalDaysInMonth; dayOfWeek++) {
                const day = dayCounter;
                const currentDate = new Date();
                const isDisabled = currentDate > new Date(date.year, date.month, day);
    
                weekDays.push(
                    <td key={dayCounter}>
                        <div
                            className={`px-2 py-2 cursor-pointer flex w-full justify-center ${
                                isSelectedDay(day, date.month, date.year) ? 'bg-blue-600' : ''
                            } ${isDisabled ? 'bg-red-700' : ''}`}
                            onClick={() => {
                                if (!isDisabled) {
                                    setDate({ ...date, day });
                                }
                            }}
                        >
                            <p className={`text-base ${isSelectedDay(day, date.month, date.year) ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-100 font-medium`}>{day}</p>
                            {/* Add event indicators or highlights here */}
                        </div>
                    </td>
                );
                dayCounter++;
            }
    
            days.push(<tr key={`week-${week}`}>{weekDays}</tr>);
    
            firstDayOfMonth = 0;
        }
    
        return days;
    };
    
    const renderDayNames = () => {
        const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
        return (
            <tr>
                {dayNames.map((name) => (
                    <th key={name}>
                        <div className="w-full flex justify-center">
                            <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">{name}</p>
                        </div>
                    </th>
                ))}
            </tr>
        );
    };
    
    const handleMonthIncrease = () => {
        const newMonth = date.month === 11 ? 0 : date.month + 1;
        const newYear = date.month === 11 ? date.year + 1 : date.year;
        setDate({ year: newYear, month: newMonth, day: undefined, hours: [] });
    };
    
    const handleMonthDecrease = () => {
        const newMonth = date.month === 0 ? 11 : date.month - 1;
        const newYear = date.month === 0 ? date.year - 1 : date.year;
        setDate({ year: newYear, month: newMonth, day: undefined, hours: [] });
    };    

    return (
        <div className="p-8 dark:bg-gray-800 bg-white rounded-t">
            <div className="px-4 flex items-center justify-between">
            <span className="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800">
                {getMonthName(date.month)} {date.year}
            </span>
            <div className="flex items-center">
                <button className="hover:text-gray-400 text-gray-800 dark:text-gray-100" onClick={handleMonthDecrease}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </button>
                <button className="hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100" onClick={handleMonthIncrease}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
                </div>
            </div>
            <div className="flex items-center justify-between pt-12 overflow-x-auto">
                <table className="w-full">
                    <thead>
                        {renderDayNames()}
                    </thead>
                    <tbody>
                        {renderCalendar()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Calendar;
