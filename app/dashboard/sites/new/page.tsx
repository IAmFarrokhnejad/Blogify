import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


export default function NewSiteRoute() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <Card className="max-w-[450px]">
                <CardHeader>
                    <CardTitle>Create Site</CardTitle>
                    <CardDescription>Click on the submit button once you're done...</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="grid gap-4">
                            <Label>Site Name</Label>
                            <Input placeholder="Choose a Site Name..." />
                        </div>

                        <div className="grid gap-4">
                            <Label>Subdirectory</Label>
                            <Input placeholder="Choose a Subdirectory..."></Input>
                        </div>

                        <div className="grid gap-4">
                            <Label>Description</Label>
                            <Textarea placeholder="Write a description for your site..."></Textarea>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    )
}