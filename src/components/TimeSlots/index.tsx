import { useEffect, useState } from 'react';
import moment from 'moment';

interface TimeSlotProps {
    format?: string;
}

const TimeSlot = ({ format = 'h:mm A' }: TimeSlotProps) => {
    const [timeSlots, setTimeSlots] = useState<string[]>([]);

    useEffect(() => {
        const startTime = moment().startOf('day').add(8, 'hours'); // Start time at 8:00 AM
        const endTime = moment().startOf('day').add(20, 'hours'); // End time at 8:00 PM
        const timeSlot = 30; // Half-hour increments

        const slots = [];

        let currentTime = startTime;
        while (currentTime <= endTime) {
            slots.push(currentTime.format(format));
            currentTime = currentTime.add(timeSlot, 'minutes');
        }

        setTimeSlots(slots);
    }, [format]);

    return (
        <div>
            {timeSlots.map((timeSlot) => (
                <div key={timeSlot}>{timeSlot}</div>
            ))}
        </div>
    );
};

export default TimeSlot;