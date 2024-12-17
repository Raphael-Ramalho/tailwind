import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="group">
      <div className="w-full bg-red-600 h-8 items-center flex pl-2">
        <span>Header</span>
      </div>
      <div className="group/test">
        <div className="m-2 w-24 h-20 bg-green-500 group-hover/test:bg-fuchsia-600">
          Container
        </div>
        <div className="m-2 w-24 h-20 bg-green-500">Container 2</div>
      </div>

      <div className="m-3">
        <Button variant="destructive" onClick={()=>alert('ola')}>Button</Button>
      </div>
    </div>
  );
}
