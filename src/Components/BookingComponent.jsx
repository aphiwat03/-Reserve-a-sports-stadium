import { useState } from "react";
import DateTimeDisplay from "./Time";
const bookings = [
  { id: "#5644", name: "Alexander", contact: "(123) 456-789", stadium: "Sriracha Arena", facility: "Football", status: "Confirmed", amount: 5 },
  { id: "#6112", name: "Pegasus", contact: "(123) 456-789", stadium: "Sriracha Arena", facility: "Badminton", status: "Confirmed", amount: 5 },
  { id: "#6141", name: "Martin", contact: "(123) 456-789", stadium: "Ryumint", facility: "Badminton", status: "Cancelled", amount: 5 },
  { id: "#6535", name: "Cecil", contact: "(123) 456-789", stadium: "Ryumint", facility: "Badminton", status: "Confirmed", amount: 5 },
  { id: "#6541", name: "Luke", contact: "(123) 456-789", stadium: "Ryumint", facility: "Badminton", status: "Confirmed", amount: 5 },
];


export default function BookingComponent() {
  const [filter, setFilter] = useState("All");

  const filteredBookings = bookings.filter(
    (booking) => filter === "All" || booking.status === filter
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-100 p-4">
        <img src="/public/logo.png" width="40%" style={{ display: "block", margin: "-30px auto" }} />
        <nav className="mt-4">
          <ul>
            <li className="flex items-center py-2 px-3"><img src="/public/homeBlack.png" className="w-[24px] h-[24px] mr-2"></img> Dashboard</li>
            <li className="flex items-center py-2 px-3 bg-black text-white rounded-md pt-"><img src="/public/booking.png" className="w-[24px] h-[24px] mr-2"></img> Booking</li>
            <li className="flex items-center py-2 px-3 pt-2"><img src="/public/facility.png" className="w-[24px] h-[24px] mr-2"></img>Facilities</li>
            <li className="flex items-center py-2 px-3 pt-2"><img src="/public/transaction.png" className="w-[24px] h-[24px] mr-2"></img>Transaction</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div></div>
      <div className="flex-1 p-6 bg-white">
        <div className="flex justify-between items-center mb-4">
          <div className="mx-auto ">
            <DateTimeDisplay />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Booking</button>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-4">
          {["All", "Confirmed", "Cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded border ${filter === status ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Booking Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Reservation ID</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Contact</th>
                <th className="p-2 text-left">Stadium</th>
                <th className="p-2 text-left">Facility</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-t">
                  <td className="p-2">{booking.id}</td>
                  <td className="p-2">{booking.name}</td>
                  <td className="p-2">{booking.contact}</td>
                  <td className="p-2">{booking.stadium}</td>
                  <td className="p-2">{booking.facility}</td>
                  <td className={`p-2 font-bold ${booking.status === "Confirmed" ? "text-green-500" : "text-red-500"}`}>
                    {booking.status}
                  </td>
                  <td className="p-2">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
