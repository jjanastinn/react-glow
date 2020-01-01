import React from "react";

export default function Appointment({
  info: { available, price, name, specialist, startDate, endDate, imageUrl }
}) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const transformedStartDate = new Date(startDate).toLocaleDateString(
    "de-DE",
    options
  );
  const transformedStartTime = new Date(startDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  const transformedEndTime = new Date(endDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="schedulecard_wrapper">
      <div className="schedulecard_image-container">
        <img
          className="schedulecard_image"
          src={imageUrl}
          data-available={available}
          alt=""
        />
      </div>
      <div className="schedulecard_description">
        <h2 className="schedulecard_description-headline">{name}</h2>
        <p className="schedulecard_description-specialist">{specialist}</p>
        <p className="schedulecard_description-startDate">
          {transformedStartDate}
        </p>
        <p className="schedulecard_description-endDate">
          {transformedStartTime} - {transformedEndTime}
        </p>
        <p className="schedulecard_description-price">{price}</p>
      </div>
    </div>
  );
}
