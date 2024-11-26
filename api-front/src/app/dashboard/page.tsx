"use client";
import React, { useEffect, useState } from "react";
import Layout from "../_components/layout/layout";
import Card from "../_components/card/card";
import TopBar from "../_components/topbar/topbar";
import {
  AiOutlineDollarCircle,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineBarChart,
} from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

interface Message {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  comment: string;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/messages");
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data: Message[] = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        alert("Failed to fetch messages. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    setTimeout(fetchMessages, 1500);
  }, []);

  const deleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/api/messages/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the message");
      }

      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== id)
      );
      alert("Message deleted successfully");
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Failed to delete the message. Please try again.");
    }
  };

  return (
    <Layout>
      <main className="space-y-6 font-medium relative">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <TopBar />

            <header>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-gray-600">
                Check the sales, value, and bounce rate by country.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card
                title="Today's Money"
                value="$53k"
                icon={<AiOutlineDollarCircle />}
                change="+55% than last week"
                changeType="increase"
              />
              <Card
                title="Today's Users"
                value="2300"
                icon={<AiOutlineUser />}
                change="+3% than last month"
                changeType="increase"
              />
              <Card
                title="Ads Views"
                value="3,462"
                icon={<AiOutlineEye />}
                change="-2% than yesterday"
                changeType="decrease"
              />
              <Card
                title="Sales"
                value="$103,430"
                icon={<AiOutlineBarChart />}
                change="+5% than yesterday"
                changeType="increase"
              />
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-sm font-medium text-gray-600">Messages</h2>

              <div className="overflow-x-auto mt-4">
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-200 p-2">Name</th>
                      <th className="border border-gray-200 p-2">Email</th>
                      <th className="border border-gray-200 p-2">Phone</th>
                      <th className="border border-gray-200 p-2">Comment</th>
                      <th className="border border-gray-200 p-2">Date</th>
                      <th className="border border-gray-200 p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.length > 0 ? (
                      messages.map((message) => (
                        <tr key={message._id}>
                          <td className="border border-gray-200 p-2">
                            {message.name}
                          </td>
                          <td className="border border-gray-200 p-2">
                            {message.email}
                          </td>
                          <td className="border border-gray-200 p-2">
                            {message.phone || "N/A"}
                          </td>
                          <td className="border border-gray-200 p-2">
                            {message.comment}
                          </td>
                          <td className="border border-gray-200 p-2">
                            {new Date(message.createdAt).toLocaleString()}
                          </td>
                          <td className="border border-gray-200 p-2 text-center">
                            <button
                              onClick={() => deleteMessage(message._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={6}
                          className="border border-gray-200 p-2 text-center"
                        >
                          No messages found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </Layout>
  );
};

export default Dashboard;
