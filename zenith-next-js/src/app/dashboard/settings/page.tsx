import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Users, 
  CreditCard, 
  Shield,
  Globe,
  Bell,
  Database,
  Key
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <CardTitle>General</CardTitle>
            </div>
            <CardDescription>
              Basic account settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Account Information</h4>
                <p className="text-sm text-muted-foreground">
                  Update your profile, email, and basic settings
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage General Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Team Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <CardTitle>Team</CardTitle>
            </div>
            <CardDescription>
              Manage team members and permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Team Management</h4>
                <p className="text-sm text-muted-foreground">
                  Add, remove, and manage team members
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage Team
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Billing Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <CardTitle>Billing</CardTitle>
            </div>
            <CardDescription>
              Manage your subscription and billing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Subscription & Billing</h4>
                <p className="text-sm text-muted-foreground">
                  View plans, update payment methods
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage Billing
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <CardTitle>Security</CardTitle>
            </div>
            <CardDescription>
              Security and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Security & Privacy</h4>
                <p className="text-sm text-muted-foreground">
                  Password, 2FA, and privacy settings
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage Security
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>
              Email and notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Notification Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Configure email and push notifications
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage Notifications
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* API Keys */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Key className="h-5 w-5" />
              <CardTitle>API Keys</CardTitle>
            </div>
            <CardDescription>
              Manage API keys and integrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">API & Integrations</h4>
                <p className="text-sm text-muted-foreground">
                  Generate and manage API keys
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage API Keys
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <CardTitle>Data & Privacy</CardTitle>
            </div>
            <CardDescription>
              Data export and privacy controls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Data Management</h4>
                <p className="text-sm text-muted-foreground">
                  Export data and privacy settings
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage Data
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <CardTitle>Appearance</CardTitle>
            </div>
            <CardDescription>
              Theme and display preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Theme & Display</h4>
                <p className="text-sm text-muted-foreground">
                  Customize appearance and theme
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage Appearance
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Limits */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <CardTitle>Limits</CardTitle>
            </div>
            <CardDescription>
              Usage limits and quotas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Usage Limits</h4>
                <p className="text-sm text-muted-foreground">
                  View and manage usage limits
                </p>
              </div>
              <Button className="w-full" variant="outline">
                Manage Limits
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 