import { useEffect, useState } from "react";
import api from "../Axios/api";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchNotification() {
      try {
        const res = await api.get("/notifications");
        setNotifications(res.data); // 
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    }
    fetchNotification();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Notifications</h1>

      <div className="space-y-3">
        {notifications.map((noti, idx) => (
          <NotificationTile key={idx} notification={noti} />
        ))}
      </div>
    </div>
  );
}

export function NotificationTile({ notification }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={notification?.sender?.avatar}
          alt={notification?.sender?.username}
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-sm">
        <strong>{notification?.sender?.username}</strong>{" "}
        <span className="text-gray-600">{notification?.message}</span>
      </div>

      {/* Right side */}
      <div>
        {notification?.type === "follow" && (
          <button className="bg-blue-600 px-3 py-1 text-white text-sm rounded-md hover:bg-blue-700 transition">
            Follow
          </button>
        )}

        {notification?.type === "post" && (
          <div className="w-12 h-12 rounded-md overflow-hidden border">
            <img
              className="w-full h-full object-cover"
              src={notification?.image}
              alt="post"
            />
          </div>
        )}
      </div>
    </div>
  );
}