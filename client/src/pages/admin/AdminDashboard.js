import React from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import {
  Card,
  CardContent
} from '../../components/ui/card';
import { BarChart, PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Users, AlertTriangle, Settings, Activity, FileText, Shield, MessageSquare, Globe, Zap, Server, Database, Lock, Megaphone, CreditCard, Bug, LinkIcon, Menu, X } from 'lucide-react';
import { Button } from '../../components/ui/button';

const AdminDashboard = () => {
  const location = useLocation();
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  const navigation = [
    { name: 'Overview', path: '/admin', icon: Activity },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Moderation', path: '/admin/moderation', icon: Shield },
    { name: 'Analytics', path: '/admin/reports-analytics', icon: BarChart },
    { name: 'System Config', path: '/admin/config', icon: Settings },
    { name: 'Audit Logs', path: '/admin/logs', icon: FileText },
    { name: 'Access Control', path: '/admin/roles', icon: Lock },
    { name: 'Backups', path: '/admin/backup', icon: Database },
    { name: 'Compliance', path: '/admin/legal', icon: AlertTriangle },
    { name: 'Announcements', path: '/admin/announcements', icon: Megaphone },
    { name: 'Billing', path: '/admin/billing', icon: CreditCard },
    { name: 'Feedback', path: '/admin/feedback', icon: Bug },
    { name: 'Integrations', path: '/admin/integrations', icon: LinkIcon },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className={`${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 w-64 fixed md:relative h-screen border-r bg-background 
          transform transition-transform duration-200 ease-in-out z-50 md:z-auto`}
        >
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Admin Console</h2>
          </div>
          <div className="p-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors
                  ${isActive ? 'bg-accent' : 'hover:bg-muted'}`
                }
                onClick={() => setIsMobileNavOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-8">
          <Outlet /> {/* This will render the nested routes */}
        </main>
      </div>
    </div>
  );
};

// Example route component for Analytics (create similar components for other routes)
export const AdminAnalytics = () => {
  const userGrowthData = [
    { name: 'Jan', users: 200 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 450 },
    { name: 'Apr', users: 600 },
    { name: 'May', users: 750 },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">Total Users</h3>
            <p className="text-2xl">3,256</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">Active Reports</h3>
            <p className="text-2xl">134 (90 pending / 44 resolved)</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold">System Uptime</h3>
            <p className="text-2xl">99.98%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4 h-[300px]">
          <h3 className="font-semibold mb-2">User Growth Over Months</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" />
              <Line type="monotone" dataKey="users" stroke="#1d4ed8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;