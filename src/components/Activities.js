import '../App.css';
export default function Activities()
{
    return (
                <div className=" flex justify-center items-center h-full">
                            <ul className="list-disc  tracking-wide">
                                <div className="md:grid md:grid-cols-[5fr_1fr]">
                                    <li >
                                    <span className="font-bold">Joint Secretary</span>
                                        <p>Computer Science Engineering Coding Club - KEC</p>
                                    </li>
                                    <div className="time_period">
                                    <p className="flex items-center rounded-full bg-teal-300/70 px-4">2023-2024</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="md:grid md:grid-cols-[5fr_1fr] ">
                                    <li >
                                    <span className="font-bold">Class Representative</span>
                                        <p >II CSE-B (3rd Semester) - KEC </p>
                                    </li>
                                    <div className="time_period">
                                    <p className="flex items-center rounded-full bg-teal-300/70 px-4">2022-2022</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="md:grid md:grid-cols-[5fr_1fr] ">
                                    <li> 
                                    <span className="font-bold">Executive Member</span>
                                    <p>Computer Science Engineering Coding Club - KEC</p>
                                    </li>
                                    <div className="time_period">
                                    <p className="flex items-center rounded-full bg-teal-300/70 px-4">2022-2023</p>
                                    </div>
                                </div>

                            </ul>
                </div>
    );
}