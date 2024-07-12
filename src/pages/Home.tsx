import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import useLayoutStore from "@/state/layout";
const Home = () => {
  const { darkMode, toggleDarkMode } = useLayoutStore();
  return (
    <div
      className={cn(
        "w-full min-h-screen bg-background font-inter",
        darkMode && "dark"
      )}
    >
      <div className="p-10 space-y-8">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Hello world</CardTitle>
            <CardDescription>
              Welcome to the Next.js starter template with Tailwind CSS and
              NextUI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Amet ut officia duis commodo mollit. Elit esse voluptate velit
            eiusmod ipsum ex esse amet aute commodo Lorem aute. Consequat aute
            sint officia occaecat adipisicing mollit ex cupidatat in officia
            quis enim veniam. Ex nisi incididunt non ad ipsum aute anim occaecat
            officia.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Home;
