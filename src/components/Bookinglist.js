import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BookingList({ refresh }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')
         .then(res => setBookings(res.data))
         .catch(console.error);
  }, [refresh]);

  if (!bookings.length) return <p className="text-center mt-6">No bookings yet.</p>;

  return (
    <div className="mt-8 max-w-2xl mx-auto overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr><th className="p-3">Name</th><th>Service</th><th>Date</th></tr>
        </thead>
        <tbody>
          {bookings.map((b,i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-3">{b.name}</td>
              <td className="p-3">{b.service}</td>
              <td className="p-3">{new Date(b.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
