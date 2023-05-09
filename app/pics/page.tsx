import {redirect} from "next/navigation";

export default function PicsPage() {
    redirect('/pics/latest');

    return null;
}
