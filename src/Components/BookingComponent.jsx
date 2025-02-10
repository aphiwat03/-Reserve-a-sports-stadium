import { useState } from "react";
import DateTimeDisplay from "./Time";

export default function BookingComponent() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const bookings = [
    { id: "#7010", name: "Sophia", contact: "(987) 654-321", stadium: "Bangkok Arena", facility: "Tennis", status: "Confirmed", amount: 3 },
    { id: "#7021", name: "Jackson", contact: "(555) 123-457", stadium: "Sriracha Arena", facility: "Football", status: "Cancelled", amount: 4 },
    { id: "#7032", name: "Emma", contact: "(321) 987-655", stadium: "Ryumint", facility: "Badminton", status: "Cancelled", amount: 2 },
    { id: "#7043", name: "Liam", contact: "(999) 888-778", stadium: "Bangkok Arena", facility: "Swimming", status: "Confirmed", amount: 6 },
    { id: "#7054", name: "Olivia", contact: "(777) 666-556", stadium: "Ryumint", facility: "Badminton", status: "Confirmed", amount: 3 },
    { id: "#7065", name: "Noah", contact: "(444) 333-223", stadium: "Sriracha Arena", facility: "Football", status: "Confirmed", amount: 7 },
    { id: "#7076", name: "Ava", contact: "(222) 111-001", stadium: "Bangkok Arena", facility: "Tennis", status: "Cancelled", amount: 4 },
    { id: "#7088", name: "Mia", contact: "(555) 444-333", stadium: "Ryumint", facility: "Badminton", status: "Confirmed", amount: 5 },
    { id: "#7099", name: "Ethan", contact: "(888) 777-666", stadium: "Sriracha Arena", facility: "Football", status: "Cancelled", amount: 3 },
    { id: "#7100", name: "Isabella", contact: "(333) 222-111", stadium: "Bangkok Arena", facility: "Swimming", status: "Confirmed", amount: 2 },
    { id: "#7111", name: "Liam", contact: "(777) 555-444", stadium: "Ryumint", facility: "Tennis", status: "Confirmed", amount: 4 },
    { id: "#7122", name: "Aiden", contact: "(444) 333-222", stadium: "Sriracha Arena", facility: "Badminton", status: "Cancelled", amount: 6 },
    { id: "#7133", name: "Zoe", contact: "(666) 555-444", stadium: "Bangkok Arena", facility: "Football", status: "Confirmed", amount: 3 }
  ];

  const filteredBookings = bookings.filter(
    (booking) =>
      (filter === "All" || booking.status === filter) &&  // กรองตาม status
      (booking.name.toLowerCase().includes(searchQuery.toLowerCase()) || booking.id.includes(searchQuery)) // กรองตาม searchQuery
  );


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/10 bg-white p-4" >
        <img src="/public/logo.png" width="40%" style={{ display: "block", margin: "-30px auto" }} />
        <nav className="mt-4">
          <ul>
            <li className="flex items-center py-2 px-3 text-lg">
              <img src="/public/homeBlack.png" className="w-[24px] h-[24px] mr-2" />
              Dashboard
            </li>
            <li className="flex items-center py-2 px-3 bg-black text-white rounded-md text-lg">
              <img src="/public/booking.png" className="w-[24px] h-[24px] mr-2" />
              Booking
            </li>
            <li className="flex items-center py-2 px-3 pt-2 text-lg">
              <img src="/public/facility.png" className="w-[24px] h-[24px] mr-2" />
              Facilities
            </li>
            <li className="flex items-center py-2 px-3 pt-2 text-lg">
              <img src="/public/transaction.png" className="w-[24px] h-[24px] mr-2" />
              Transaction
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white">
        <div className="flex justify-between items-center mb-4">
          <div className="mx-auto">
            <DateTimeDisplay />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Booking</button>
        </div>

        {/* Filter Buttons and Search Bar */}
        <div className="flex justify-end space-x-2 mb-4 items-center">
          {/* Filter Buttons "Ongoing" , "Completed" */}
          <div className="flex space-x-2">
            {["Ongoing", "Completed"].map((status) => (
              <button key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-md border border-gray-300 bg-white ${filter === status ? "bg-blue-500 " : "text-gray-700"}`}
              >
                {status}
              </button>

            ))}
          </div>

          {/* Filter Buttons "All", "Confirmed", "Cancelled" */}
          {["All", "Confirmed", "Cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-md border border-gray-300 bg-white ${filter === status ? "bg-blue-500" : "text-gray-700"
                }`}
            >
              {status}
            </button>

          ))}

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by name or ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Booking Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Reservation ID</th>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Contact</th>
                <th className="p-2 text-left">Stadium</th>
                <th className="p-2 text-left">Facility</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-t">
                  <td className="p-2">{booking.id}</td>
                  <td className="p-2">{booking.name}</td>
                  <td className="p-2">Phone: {booking.contact}</td>
                  <td className="p-2">{booking.stadium}</td>
                  <td className="p-2">{booking.facility}</td>
                  <td className="p-2">
                    <span
                      className={`px-4 py-1 rounded-full text-white font-bold ${booking.status === "Confirmed"
                        ? "border border-white bg-[#E7F8F0] text-[#41C588]"
                        : booking.status === "Cancelled"
                          ? "border border-white bg-[#FEECEB] text-[#F36960]"
                          : "border border-gray-700 bg-gray-200 "
                        }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-2">{booking.amount}</td>
                  <button className="text-gray-600 hover:text-black focus:outline-none flex items-center">
                    <img
                      src="/public/kebab.png"
                      alt="Kebab Menu"
                      className="w-4 h-4 mr-2"
                    />
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}