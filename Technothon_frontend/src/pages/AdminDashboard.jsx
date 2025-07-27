import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// --- Stat Card ---
const StatCard = ({ title, total, active, current, event, totalUploads, image }) => (
  <div className="bg-gray-900 rounded-lg p-6 shadow text-white w-full flex flex-col">
    {image && (
      <img src={image} alt="Banner" className="w-full h-28 object-cover rounded mb-3" />
    )}
    <h2 className="text-lg font-bold mb-1">{title}</h2>
    {total && <p>Total: {total}</p>}
    {active && <p className="text-green-400">🟢 Active: {active}</p>}
    {current && <p>Current: {current}</p>}
    {event && (
      <>
        <p>Upcoming: {event}</p>
        <p>Uploads: {totalUploads}</p>
      </>
    )}
  </div>
);

// --- Gallery ---
const Gallery = () => {
  const images = Array.from({ length: 7 }, (_, i) => `https://via.placeholder.com/150?text=${i + 1}`);
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow text-white w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg">Gallery 📷</h2>
        <button className="bg-purple-700 px-3 py-1 text-sm rounded">Show all</button>
      </div>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <div className="flex gap-4 pb-2">
          {images.map((img, i) => (
            <img key={i} src={img} alt={`img-${i}`} className="w-36 h-24 object-cover rounded bg-black" />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Events Section ---
const EventsSection = () => {
  const [form, setForm] = useState({ name: "", desc: "", prize: "", start: "", end: "" });

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow text-white w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Create Event 🎤</h3>
        <div className="flex gap-2">
          <button className="bg-purple-600 px-3 py-1 rounded">Existing</button>
          <button className="bg-purple-600 px-3 py-1 rounded">Live</button>
        </div>
      </div>
      <div className="grid gap-3">
        {["name", "desc", "prize", "start", "end"].map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            className="w-full px-3 py-2 rounded bg-black text-white"
          />
        ))}
        <button className="bg-green-600 px-4 py-2 rounded w-fit">Add</button>
      </div>
    </div>
  );
};

// --- Upload Section ---
const UploadSection = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow text-white w-full">
      <h3 className="font-semibold text-lg mb-3">Uploads 📁</h3>
      <p>Total: 22</p>
      <p className="mb-3">Last Uploaded: abc.csv</p>
      <input className="w-full mb-3 p-2 rounded bg-black text-white" placeholder="Search..." />
      <ul className="text-sm space-y-2 mb-4">
        {["abc.csv", "file2.doc", "event.pdf"].map((file, i) => (
          <li key={i} className="flex justify-between bg-black px-3 py-2 rounded">
            <span>{file}</span><span>Date</span>
          </li>
        ))}
      </ul>
      <input type="file" className="mb-3 w-full text-sm" />
      <div className="flex gap-2">
        <button className="bg-red-500 px-4 py-1 rounded">Cancel</button>
        <button className="bg-green-600 px-4 py-1 rounded">Upload</button>
      </div>
    </div>
  );
};

// --- Participants Chart ---
const Participants = () => {
  const participantData = {
    labels: ["Teams", "Participants"],
    datasets: [
      {
        label: "AI Unleashed",
        data: [40, 200],
        backgroundColor: ["#ec4899", "#f59e0b"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow text-white w-full">
      <h3 className="font-semibold text-lg mb-4">Participants 🧑‍🤝‍🧑</h3>
      <div className="w-full flex justify-center">
        <Bar data={participantData} options={options} />
      </div>
    </div>
  );
};

// --- Users Doughnut ---
const Users = () => {
  const userData = {
    labels: ["Active", "Regular", "Inactive"],
    datasets: [
      {
        label: "Users",
        data: [40, 200, 40],
        backgroundColor: ["#10b981", "#3b82f6", "#f87171"],
        borderColor: "#1e1e1e",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow text-white w-full">
      <h3 className="font-semibold text-lg mb-4">Users 👥</h3>
      <div className="w-full flex justify-center">
        <Doughnut data={userData} />
      </div>
    </div>
  );
};

// --- Sponsors Pie Chart ---
const Sponsors = () => {
  const sponsorData = {
    labels: ["Current Sponsors", "Past Sponsors"],
    datasets: [
      {
        label: "Sponsors",
        data: [10, 5],
        backgroundColor: ["#6366f1", "#a78bfa"],
        borderColor: "#1e1e1e",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow text-white w-full">
      <h3 className="font-semibold text-lg mb-4">Sponsors 💼</h3>
      <div className="w-full flex justify-center">
        <Pie data={sponsorData} />
      </div>
    </div>
  );
};

// --- Admin Dashboard ---
export default function AdminDashboard() {
  const [teamsPending, setTeamsPending] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPending = async () => {
    try {
      const res = await axios.get("http://43.204.96.98:8000/admin/pending_teams", {
        withCredentials: true,
      });
      setTeamsPending(res.data.pending_teams || []);
    } catch (err) {
      console.error("Error fetching pending teams", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDecision = async (tid, approve) => {
    const url = `http://43.204.96.98:8000/admin/${approve ? "approve_team" : "reject_team"}/${tid}`;
    try {
      await axios.post(url, {}, { withCredentials: true });
      fetchPending();
    } catch (err) {
      console.error("Error processing team", err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6 pb-12">
      {/* Admin Info */}
      <div className="flex items-center gap-4 mb-8 px-1">
        <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
          S
        </div>
        <div>
          <h1 className="text-2xl font-bold">Rahul Mahato</h1>
          <p className="text-sm text-gray-400">TCS Employee</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <Users />
        <Sponsors />
        <StatCard
          title="At a glance"
          event="AI Unleashed"
          totalUploads={22}
          image="https://images.unsplash.com/photo-1581092334119-3e09cc2211d2?auto=format&fit=crop&w=800&q=80"
        />
      </div>

      {/* Dynamic Team Approvals */}
      <div className="bg-gray-900 p-6 rounded-lg shadow text-white mb-6">
        <h3 className="text-lg font-semibold mb-4">Team Approvals ✅</h3>
        {loading ? (
          <p>Loading...</p>
        ) : teamsPending.length === 0 ? (
          <p>No teams pending approval.</p>
        ) : (
          teamsPending.map((team) => (
            <div key={team.tid} className="flex justify-between items-center bg-black p-4 mb-2 rounded">
              <div>
                <p className="font-bold">{team.team_name}</p>
                <p className="text-sm text-gray-400">Transaction ID: {team.transaction_id}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleDecision(team.tid, true)} className="bg-green-600 px-3 py-1 rounded">Approve</button>
                <button onClick={() => handleDecision(team.tid, false)} className="bg-red-600 px-3 py-1 rounded">Reject</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Gallery */}
      <div className="mb-6">
        <Gallery />
      </div>

      {/* Events + Uploads */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <EventsSection />
        <UploadSection />
      </div>

      {/* Participants */}
      <div className="grid md:grid-cols-2 gap-6">
        <Participants />
      </div>
    </div>
  );
}
