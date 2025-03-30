import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="new-answers">New Answers</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications when someone answers a question you're following
              </p>
            </div>
            <Switch id="new-answers" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="upvotes">Upvotes</Label>
              <p className="text-sm text-muted-foreground">Receive notifications when someone upvotes your answer</p>
            </div>
            <Switch id="upvotes" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="new-papers">New Question Papers</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications when new question papers are added to your courses
              </p>
            </div>
            <Switch id="new-papers" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications via email in addition to in-app notifications
              </p>
            </div>
            <Switch id="email-notifications" />
          </div>
          <Button className="mt-4">Save Preferences</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Display</CardTitle>
          <CardDescription>Customize your display preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">Toggle between light and dark mode</p>
            </div>
            <Switch id="dark-mode" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="compact-view">Compact View</Label>
              <p className="text-sm text-muted-foreground">Display more content with less spacing</p>
            </div>
            <Switch id="compact-view" />
          </div>
          <Button className="mt-4">Save Preferences</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
          <CardDescription>Manage your privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="show-profile">Show Profile</Label>
              <p className="text-sm text-muted-foreground">Allow other users to see your profile information</p>
            </div>
            <Switch id="show-profile" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="show-answers">Show Answers</Label>
              <p className="text-sm text-muted-foreground">Display your name with your answers</p>
            </div>
            <Switch id="show-answers" defaultChecked />
          </div>
          <Button className="mt-4">Save Preferences</Button>
        </CardContent>
      </Card>
    </div>
  )
}

