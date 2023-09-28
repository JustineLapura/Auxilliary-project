import React from "react";

const CostumersTable = () => {
  return (
    <div className="hidden md:block w-full mt-12">
      <table className="w-full">
        <thead>
          <tr className="lg:font-bold text-xs lg:text-lg">
            <th>No.</th>
            <th>Booking No.</th>
            <th>Customer's Name</th>
            <th>Facility</th>
            <th>Booking Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xs text-center font-semibold py-6 md:text-base">
            <td>1</td>
            <td>12345</td>
            <td>John Doe</td>
            <td>Conference Room</td>
            <td>2023-09-26</td>
            <td>09:00 AM</td>
            <td>10:00 AM</td>
            <td>Confirmed</td>
          </tr>
          <tr className="text-xs text-center font-semibold py-6 md:text-base">
            <td>1</td>
            <td>12345</td>
            <td>John Doe</td>
            <td>Conference Room</td>
            <td>2023-09-26</td>
            <td>09:00 AM</td>
            <td>10:00 AM</td>
            <td>Confirmed</td>
          </tr>
          <tr className="text-xs text-center font-semibold py-6 md:text-base">
            <td>1</td>
            <td>12345</td>
            <td>John Doe</td>
            <td>Conference Room</td>
            <td>2023-09-26</td>
            <td>09:00 AM</td>
            <td>10:00 AM</td>
            <td>Confirmed</td>
          </tr>
          {/* Add more data rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default CostumersTable;
