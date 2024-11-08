'use client'

import { useState } from 'react'
import { Bell, BookOpen, GraduationCap, LayoutDashboard, LineChart, MessageSquare, Settings, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Progress } from "~/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

export default function KiddomAIDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-4">
        <div className="flex items-center mb-6">
          <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Kiddom AI</h1>
        </div>
        <nav>
          {[
            { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
            { icon: Users, label: 'Students', id: 'students' },
            { icon: BookOpen, label: 'Courses', id: 'courses' },
            { icon: MessageSquare, label: 'Messages', id: 'messages' },
            { icon: LineChart, label: 'Analytics', id: 'analytics' },
            { icon: Settings, label: 'Settings', id: 'settings' },
          ].map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'secondary' : 'ghost'}
              className="w-full justify-start mb-2"
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+10% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Engagement</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">+5% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI-Assisted Lessons</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">Created this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Progress</CardTitle>
              <CardDescription>Overall course completion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Math', 'Science', 'English', 'History'].map((subject) => (
                  <div key={subject} className="flex items-center space-x-4">
                    <div className="w-[100px] text-sm">{subject}</div>
                    <Progress value={Math.floor(Math.random() * 100)} className="flex-1" />
                    <div className="text-sm text-muted-foreground w-[50px] text-right">
                      {Math.floor(Math.random() * 100)}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>Personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                    <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Adaptive Learning Paths</h4>
                    <p className="text-sm text-muted-foreground">Customize curriculum based on individual student performance.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <Users className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Group Project Suggestions</h4>
                    <p className="text-sm text-muted-foreground">Form optimal student groups for collaborative assignments.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                    <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Content Recommendations</h4>
                    <p className="text-sm text-muted-foreground">Suggest additional resources based on learning patterns.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}