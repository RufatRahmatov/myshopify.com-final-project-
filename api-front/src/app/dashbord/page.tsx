import Layout from "../_components/layout/layout";
import Card from "../_components/card/card";
import TopBar from "../_components/topbar/topbar";
import {
  AiOutlineDollarCircle,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineBarChart,
} from "react-icons/ai";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-6 font-medium">
        <TopBar />
        <header>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">
            Check the sales, value and bounce rate by country.
          </p>
        </header>

        {/* Cards */}
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

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-600">Website Views</h2>
            <div className="mt-4">[Chart Placeholder]</div>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-sm font-medium text-gray-600">Daily Sales</h2>
            <div className="mt-4">[Chart Placeholder]</div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-600">Projects</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-200 p-2">Company</th>
                  <th className="border border-gray-200 p-2">Members</th>
                  <th className="border border-gray-200 p-2">Budget</th>
                  <th className="border border-gray-200 p-2">Completion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-2">
                    Material XD Version
                  </td>
                  <td className="border border-gray-200 p-2">4</td>
                  <td className="border border-gray-200 p-2">$14,000</td>
                  <td className="border border-gray-200 p-2">60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2">
                    Launch Mobile App
                  </td>
                  <td className="border border-gray-200 p-2">5</td>
                  <td className="border border-gray-200 p-2">$20,500</td>
                  <td className="border border-gray-200 p-2">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders Overview */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-600">Orders Overview</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between items-center">
              <p className="text-sm text-gray-600">$2400, Design Changes</p>
              <span className="text-xs text-gray-500">22 DEC 7:20 PM</span>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-sm text-gray-600">New order #1832412</p>
              <span className="text-xs text-gray-500">21 DEC 11 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
