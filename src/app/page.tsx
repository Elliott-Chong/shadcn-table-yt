import { Button } from "@/components/ui/button";
import {redirect} from 'next/navigation'
export default function Home() {
  return redirect('/people');
}
