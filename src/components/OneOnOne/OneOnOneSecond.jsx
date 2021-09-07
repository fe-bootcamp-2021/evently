import { useState } from "react";
import {
  ADD_EVENT,
  ADD_MEMBER,
  DATE,
  TIME,
  // TEXT,
  // TEL,
  // FIRST_NAME,
  // LAST_NAME,
  // PHONE_NUMBER,
} from "../../constants/constants";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Navbar from "../Navbar/Navbar";
import Member from "../Member/Member";
import { containerOneOnOne, inputStyle, card, title } from "./OneOnOne.style";

export default function OneOnOneSecond() {
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [members, setMembers] = useState([]);

  const addMember = () => {
    if (
      date === undefined ||
      startTime === undefined ||
      endTime === undefined
    ) {
      return; // Must be an error
    }

    let member = { date, startTime, endTime };
    setMembers([...members, member]);
  };

  const addEvent = () => {
    if (members.length === 0) {
      return; // Must be an error
    }
    // addOneOnOneEvent(members, eventId);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };
  const handleEndTime = (event) => {
    setEndTime(event.target.value);
  };
  // const handleFirstName = (event) => {
  //   setFirstName(event.target.value);
  // };
  // const handleLastName = (event) => {
  //   setLastName(event.target.value);
  // };
  // const handlePhoneNumber = (event) => {
  //   setPhoneNumber(event.target.value);
  // };
  return (
    <div className={containerOneOnOne}>
      <div className={`${card} px-10`}>
        <h2 className={title}>Add One-on-One Event</h2>

        <div></div>
        <Input type={DATE} onChange={handleDate} className={inputStyle} />
        <Input type={TIME} onChange={handleStartTime} className={inputStyle} />
        <Input type={TIME} onChange={handleEndTime} className={inputStyle} />
        {/* <Input
          type={TEXT}
          onChange={handleFirstName}
          placeholder={FIRST_NAME}
        />
        <Input type={TEXT} onChange={handleLastName} placeholder={LAST_NAME} />
        <Input
          type={TEL}
          onChange={handlePhoneNumber}
          placeholder={PHONE_NUMBER}
        /> */}
        <Button name={ADD_MEMBER} onClick={addMember} />
        <div className="flex flex-wrap justify-center">
          {members.map(({ date, startTime, endTime }) => {
            return (
              <>
                <Member date={date} startTime={startTime} endTime={endTime} />
              </>
            );
          })}
          {/* <Button name={ADD_EVENT} onClick={addEvent} /> */}
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { NavRoutes } from "../../constants/routes";
// import { eventTypes } from "../../constants/constants";
// import { addEvent } from "../../services/event.services";
// import { useAuth } from "../../contexts/AuthContext";
// import { formatDate } from "../../helpers/date";
// import DataRange from "../DateRange/DateRange";
// import Duration from "../Duration/Duration";
// import Button from "../Button/Button";
// import EventTypeAvailability from "../EventTypeAvailability/EventTypeAvailability";
// import {
//   containerOneOnOne,
//   card,
//   buttonContainer,
//   sectionDuration,
//   availability,
//   buttonSection
// } from "./OneOnOne.style";

// export default function OneOnOneSecond({
//   setFirstPageInfo,
//   setSecondPageInfo,
// }) {
//   const history = useHistory();
//   const { user } = useAuth();
//   const [dateRangeInfo, setDateRangeInfo] = useState({});
//   const [minutes, setMinutes] = useState(60);

//   const handleNext = () => {
//     const secondPageInfo = { dateRange: dateRangeInfo, minutes };
//     const event = {
//       eventType: eventTypes.oneOnOne,
//       userId: user.uid,
//       createdOn: formatDate(new Date()),
//     };

//     const eventInfo = Object.assign(setFirstPageInfo, secondPageInfo, event);

//     setSecondPageInfo(secondPageInfo);
//     try {
//       addEvent(eventInfo);
//       history.push(NavRoutes.home().path);
//     } catch (err) {
//       alert(err);
//     }
//   };

//   const handleCancel = () => {
//     history.push(NavRoutes.home().path);
//   };

//   return (
//     <>
//       <div className={containerOneOnOne}>
//         <div className={card}>
//           <section className="my-10 px-10">
//             <DataRange setDateRangeInfo={setDateRangeInfo} />
//           </section>
//           <section className={sectionDuration}>
//             <Duration setMinutes={setMinutes} minutes={minutes} />
//           </section>
//           <section className={availability}>
//             <EventTypeAvailability />
//           </section>
//           <section className={buttonSection}>
//             <div className={buttonContainer}>
//               <Button name={`Cancel`} onClick={handleCancel} />
//               <Button name={`Create`} className="ml-3" onClick={handleNext} />
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }
