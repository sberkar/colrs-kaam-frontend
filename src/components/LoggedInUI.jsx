import CreateKaam from "./kaam/Create";
import KaamsList from "./kaam/List";

export default function LoggedInUI(){
    return <>
        <div className="w-1/2">
            <h2 className="text-2xl mb-4 text-primary font-semibold font-inter tracking-[-0.6px]">
                Your Kaams 
            </h2>
            <KaamsList />
        </div>
        <div className="w-1/3">
            <CreateKaam />
        </div> 
    </>
}