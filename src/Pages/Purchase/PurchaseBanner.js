
import motor from '../../assets/images/Motor.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const PurchaseBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={motor} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You have Selected:{format(date, 'PP')}</p>

                </div>

            </div>

        </div>
    );
};

export default PurchaseBanner;